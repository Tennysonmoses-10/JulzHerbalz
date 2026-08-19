import json
import random
from datetime import datetime
from typing import List, Dict, Any
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from backend.database import get_db, is_db_connected, Base, engine
from backend.models import Product, ProductVariant, Category, Order, OrderItem, OrderStatusEnum
from backend.schemas import PlaceOrderSchema, ProductSchema
from backend.seed import SEED_PRODUCTS, seed_database

app = FastAPI(
    title="Julz Herbals Python API",
    description="Enterprise Python FastAPI Backend Microservice with SQLAlchemy ORM & PostgreSQL",
    version="1.0.0"
)

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory orders fallback store for zero-downtime resilience
in_memory_orders: List[Dict[str, Any]] = []

@app.on_event("startup")
def startup_event():
    if is_db_connected:
        try:
            Base.metadata.create_all(bind=engine)
            seed_database()
        except Exception as e:
            print(f"⚠️ Startup seed notice: {e}")

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "framework": "FastAPI (Python)",
        "orm": "SQLAlchemy",
        "database_connected": is_db_connected,
        "mode": "PostgreSQL ORM" if is_db_connected else "Resilient In-Memory Fallback"
    }

@app.get("/api/products")
def get_products(db: Session = Depends(get_db)):
    if db is not None:
        try:
            db_prods = db.query(Product).all()
            if db_prods:
                result = []
                for p in db_prods:
                    cat_name = p.category.name if p.category else "Herbal Care"
                    variants = [
                        {"quantityLabel": v.quantity_label, "price": v.price}
                        for v in p.variants
                    ]
                    imgs = json.loads(p.images) if p.images.startswith("[") else [p.images]
                    result.append({
                        "id": p.id,
                        "name": p.name,
                        "slug": p.slug,
                        "category": cat_name,
                        "description": p.description,
                        "howToUse": p.howToUse or "",
                        "shelfLife": p.shelfLife or "",
                        "bestFor": p.bestFor or "",
                        "benefits": p.benefits.split(" | ") if p.benefits else [],
                        "ingredients": p.ingredients.split(", ") if p.ingredients else [],
                        "variants": variants,
                        "images": imgs,
                        "isFeatured": p.is_featured
                    })
                return {"success": True, "products": result, "source": "SQLAlchemy ORM"}
        except Exception as err:
            print(f"⚠️ ORM fetch notice: {err}")

    # Fallback to seed data
    return {"success": True, "products": SEED_PRODUCTS, "source": "Fallback Data"}

@app.get("/api/products/{product_id}")
def get_product_by_id(product_id: str, db: Session = Depends(get_db)):
    all_prods = get_products(db)["products"]
    for p in all_prods:
        if p["id"] == product_id or p["slug"] == product_id:
            return {"success": True, "product": p}
    raise HTTPException(status_code=404, detail="Product not found")

@app.post("/api/orders", status_code=status.HTTP_201_CREATED)
def create_order(payload: PlaceOrderSchema, db: Session = Depends(get_db)):
    # Server-Side Price Calculation via ORM / Seed data
    all_prods = get_products(db)["products"]
    calculated_total = 0.0
    validated_items = []

    for item in payload.items:
        product = next((p for p in all_prods if p["id"] == item.productId), None)
        if not product:
            raise HTTPException(status_code=400, detail=f"Product not found: {item.productId}")

        variant = next((v for v in product["variants"] if v["quantityLabel"] == item.variantLabel), None)
        if not variant:
            raise HTTPException(status_code=400, detail=f"Variant {item.variantLabel} not available for {product['name']}")

        item_total = variant["price"] * item.quantity
        calculated_total += item_total

        validated_items.append({
            "productId": product["id"],
            "productName": product["name"],
            "variantLabel": variant["quantityLabel"],
            "quantity": item.quantity,
            "unitPrice": variant["price"],
            "itemTotal": item_total
        })

    order_number = f"JULZ-PY-{int(datetime.utcnow().timestamp())}-{random.randint(1000, 9999)}"

    # Attempt SQLAlchemy ORM insert if DB connected
    if db is not None:
        try:
            new_order = Order(
                id=order_number,
                order_number=order_number,
                customer_name=payload.customerName,
                customer_email=payload.customerEmail,
                customer_phone=payload.customerPhone,
                shipping_address=payload.shippingAddress,
                total_amount=calculated_total,
                status=OrderStatusEnum.PENDING
            )
            db.add(new_order)
            db.flush()

            for vitem in validated_items:
                order_item = OrderItem(
                    id=f"item-{random.randint(10000, 99999)}",
                    order_id=new_order.id,
                    product_id=vitem["productId"],
                    variant_label=vitem["variantLabel"],
                    quantity=vitem["quantity"],
                    unit_price=vitem["unitPrice"]
                )
                db.add(order_item)

            db.commit()
            return {
                "success": True,
                "message": "Order created via Python SQLAlchemy ORM",
                "order": {
                    "id": new_order.id,
                    "orderNumber": new_order.order_number,
                    "customerName": new_order.customer_name,
                    "totalAmount": new_order.total_amount,
                    "status": new_order.status.value,
                    "items": validated_items
                }
            }
        except Exception as e:
            db.rollback()
            print(f"⚠️ ORM Insert Fallback: {e}")

    # In-memory fallback order object
    fallback_order = {
        "id": order_number,
        "orderNumber": order_number,
        "customerName": payload.customerName,
        "customerEmail": payload.customerEmail,
        "customerPhone": payload.customerPhone,
        "shippingAddress": payload.shippingAddress,
        "totalAmount": calculated_total,
        "status": "PENDING",
        "createdAt": datetime.utcnow().isoformat(),
        "items": validated_items
    }
    in_memory_orders.insert(0, fallback_order)

    return {
        "success": True,
        "message": "Order saved via Python FastAPI (Resilient Fallback Mode)",
        "order": fallback_order
    }

@app.get("/api/orders")
def get_orders(db: Session = Depends(get_db)):
    if db is not None:
        try:
            db_orders = db.query(Order).order_by(Order.created_at.desc()).all()
            if db_orders:
                result = []
                for o in db_orders:
                    items = [
                        {
                            "productId": item.product_id,
                            "variantLabel": item.variant_label,
                            "quantity": item.quantity,
                            "unitPrice": item.unit_price
                        }
                        for item in o.items
                    ]
                    result.append({
                        "id": o.id,
                        "orderNumber": o.order_number,
                        "customerName": o.customer_name,
                        "customerEmail": o.customer_email,
                        "customerPhone": o.customer_phone,
                        "shippingAddress": o.shipping_address,
                        "totalAmount": o.total_amount,
                        "status": o.status.value if hasattr(o.status, "value") else str(o.status),
                        "createdAt": o.created_at.isoformat(),
                        "items": items
                    })
                return {"success": True, "orders": result, "source": "SQLAlchemy ORM"}
        except Exception as e:
            print(f"⚠️ ORM Orders Fetch Notice: {e}")

    return {"success": True, "orders": in_memory_orders, "source": "In-Memory Fallback"}
