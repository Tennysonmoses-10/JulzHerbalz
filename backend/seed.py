import json
from backend.database import engine, SessionLocal, is_db_connected, Base
from backend.models import Category, Product, ProductVariant

SEED_PRODUCTS = [
  {
    "id": "harmoni-hair-oil",
    "name": "Harmoni Hair Oil",
    "slug": "harmoni-hair-oil",
    "category": "Hair Care",
    "description": "Harmony Herbal Hair Oil is a nourishing herbal hair oil formulated with a blend of 24 carefully selected herbs and natural cold-pressed oils.",
    "howToUse": "Apply oil generously on scalp & hair strands. Massage gently in circular motions for 10-15 minutes.",
    "shelfLife": "24 Months",
    "bestFor": "Hair fall control, scalp nourishment, dry & frizzy hair",
    "benefits": ["Helps nourish the scalp and hair roots", "Supports stronger, healthier-looking hair growth", "Helps reduce dryness and roughness"],
    "ingredients": ["Amla", "Hibiscus", "Curry Leaves", "Fenugreek", "Neem", "Rosemary", "Onion", "Coconut Oil", "Castor Oil", "Almond Oil"],
    "variants": [
      { "quantityLabel": "100 ml", "price": 250 },
      { "quantityLabel": "250 ml", "price": 625 },
      { "quantityLabel": "500 ml", "price": 1250 },
      { "quantityLabel": "1000 ml", "price": 2500 }
    ],
    "images": ["https://images.unsplash.com/photo-1608248597260-6578613692d2?auto=format&fit=crop&w=600&q=80"]
  },
  {
    "id": "natural-aura-bath-powder",
    "name": "Natural Aura Bath Powder",
    "slug": "natural-aura-bath-powder",
    "category": "Body Care",
    "description": "Natural Aura Bath Powder is a traditional herbal bathing powder made with a carefully selected blend of 11 natural herbs and botanicals.",
    "howToUse": "Mix 2-3 tablespoons with water or raw milk to form a smooth paste.",
    "shelfLife": "12 Months",
    "bestFor": "Daily gentle cleansing, soft skin feel, all skin types",
    "benefits": ["Gently cleanses the skin without harsh chemicals", "Helps remove dirt, sweat, and excess oil naturally"],
    "ingredients": ["Green Gram", "Chickpea/Gram", "Turmeric", "Neem", "Rose Petals", "Hibiscus", "Amla", "Vetiver", "Sandalwood"],
    "variants": [
      { "quantityLabel": "100 gm", "price": 200 },
      { "quantityLabel": "250 gm", "price": 500 },
      { "quantityLabel": "500 gm", "price": 1000 },
      { "quantityLabel": "1000 gm", "price": 2000 }
    ],
    "images": ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"]
  },
  {
    "id": "nature-fresh-moringa-bath-powder",
    "name": "Nature Fresh Moringa Bath Powder",
    "slug": "nature-fresh-moringa-bath-powder",
    "category": "Body Care",
    "description": "Nature Fresh Moringa Bath Powder is a targeted herbal bathing powder specially formulated for acne-prone and blemish-prone skin.",
    "howToUse": "Mix 2 tablespoons with plain water or rose water. Apply evenly on body & acne-prone areas.",
    "shelfLife": "12 Months",
    "bestFor": "Acne-prone skin, oily skin, blemish reduction, body acne",
    "benefits": ["Specially formulated for acne-prone and oily skin types", "Helps cleanse away acne-causing dirt"],
    "ingredients": ["Moringa", "Neem", "Turmeric", "Green Gram", "Chickpea", "Amla", "Vetiver"],
    "variants": [
      { "quantityLabel": "100 gm", "price": 250 },
      { "quantityLabel": "250 gm", "price": 625 },
      { "quantityLabel": "500 gm", "price": 1250 },
      { "quantityLabel": "1000 gm", "price": 2500 }
    ],
    "images": ["https://images.unsplash.com/photo-1512290900676-26c2a46486bd?auto=format&fit=crop&w=600&q=80"]
  },
  {
    "id": "luminance-tan-care-pack",
    "name": "Luminance Tan Care Pack",
    "slug": "luminance-tan-care-pack",
    "category": "Skin Care",
    "description": "Luminance Tan Care Pack is an intensive herbal skin-care blend specially created to care for sun-tanned, dull, and uneven-looking skin.",
    "howToUse": "Mix 1-2 tablespoons with curd, raw milk, or rose water into a thick paste.",
    "shelfLife": "12 Months",
    "bestFor": "Sun tan removal, skin brightening, exfoliation & glow",
    "benefits": ["Helps improve the appearance of sun-tanned skin", "Helps brighten dull-looking skin"],
    "ingredients": ["Wild Turmeric", "Gram Flour", "Green Gram", "Rose Petals", "Orange Peel"],
    "variants": [
      { "quantityLabel": "100 gm", "price": 250 },
      { "quantityLabel": "250 gm", "price": 625 },
      { "quantityLabel": "500 gm", "price": 1250 },
      { "quantityLabel": "1000 gm", "price": 2500 }
    ],
    "images": ["https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"]
  },
  {
    "id": "tiny-glow-baby-bath-powder",
    "name": "Tiny Glow Baby Bath Powder",
    "slug": "tiny-glow-baby-bath-powder",
    "category": "Baby Care",
    "description": "Tiny Glow Baby Bath Powder is an ultra-gentle herbal bathing powder specially crafted for your baby's delicate skin.",
    "howToUse": "Mix a small spoonful with warm water to create a silky paste. Gently smooth over baby's body.",
    "shelfLife": "12 Months",
    "bestFor": "Delicate baby skin, sensitive skin, 100% natural chemical-free bathing",
    "benefits": ["Ultra-gentle cleansing designed for baby's sensitive skin", "Helps remove everyday sweat and impurities"],
    "ingredients": ["Green Gram", "Chickpea", "Kasturi Manjal", "Neem Leaves", "Rose Petals"],
    "variants": [
      { "quantityLabel": "100 gm", "price": 250 },
      { "quantityLabel": "250 gm", "price": 625 },
      { "quantityLabel": "500 gm", "price": 1250 },
      { "quantityLabel": "1000 gm", "price": 2500 }
    ],
    "images": ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"]
  },
  {
    "id": "little-bloom-baby-hair-oil",
    "name": "Little Bloom Baby Hair Oil",
    "slug": "little-bloom-baby-hair-oil",
    "category": "Baby Care",
    "description": "Little Bloom Baby Hair Oil is a mild, non-sticky herbal hair oil formulated for baby's tender scalp and fine hair strands.",
    "howToUse": "Take 4-5 drops on palm, warm gently between hands, and softly massage baby's scalp.",
    "shelfLife": "24 Months",
    "bestFor": "Baby scalp nourishment, soft hair growth, gentle cradle cap care",
    "benefits": ["Gently nourishes baby's delicate scalp", "Helps keep baby's fine hair soft and smooth"],
    "ingredients": ["Virgin Coconut Oil", "Sweet Almond Oil", "Sesame Oil", "Castor Oil"],
    "variants": [
      { "quantityLabel": "100 ml", "price": 300 },
      { "quantityLabel": "250 ml", "price": 750 },
      { "quantityLabel": "500 ml", "price": 1500 },
      { "quantityLabel": "1000 ml", "price": 3000 }
    ],
    "images": ["https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80"]
  },
  {
    "id": "nature-shine-herbal-shampoo",
    "name": "Nature Shine Herbal Shampoo",
    "slug": "nature-shine-herbal-shampoo",
    "category": "Hair Care",
    "description": "Nature Shine Herbal Shampoo is a gentle, low-lather herbal hair cleanser made with reetha, hibiscus, and aloe vera.",
    "howToUse": "Dilute 1-2 tablespoons with a little water. Apply to wet hair and scalp, massage into a soft natural lather.",
    "shelfLife": "18 Months",
    "bestFor": "Gentle natural hair wash, scalp cleansing, hibiscus hair shine",
    "benefits": ["Gently cleanses scalp and hair without harsh sulfates", "Helps remove dirt and excess scalp oil"],
    "ingredients": ["Hibiscus Flowers", "Reetha (Soapnut)", "Amla", "Moringa", "Curry Leaves", "Aloe Vera"],
    "variants": [
      { "quantityLabel": "100 ml", "price": 250 },
      { "quantityLabel": "250 ml", "price": 500 },
      { "quantityLabel": "500 ml", "price": 625 },
      { "quantityLabel": "1000 ml", "price": 1250 }
    ],
    "images": ["https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80"]
  }
]

def seed_database():
    if not is_db_connected:
        print("⚠️ Database offline. Skipping SQLAlchemy ORM seed.")
        return

    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        print("🌱 Seeding PostgreSQL via Python SQLAlchemy ORM...")
        for pdata in SEED_PRODUCTS:
            # 1. Category
            cat = db.query(Category).filter(Category.name == pdata["category"]).first()
            if not cat:
                cat = Category(
                    id=f"cat-{pdata['category'].lower().replace(' ', '-')}",
                    name=pdata["category"],
                    slug=pdata["category"].lower().replace(' ', '-')
                )
                db.add(cat)
                db.flush()

            # 2. Product
            prod = db.query(Product).filter(Product.id == pdata["id"]).first()
            if not prod:
                prod = Product(
                    id=pdata["id"],
                    name=pdata["name"],
                    slug=pdata["slug"],
                    description=pdata["description"],
                    howToUse=pdata.get("howToUse", ""),
                    shelfLife=pdata.get("shelfLife", ""),
                    bestFor=pdata.get("bestFor", ""),
                    benefits=" | ".join(pdata["benefits"]),
                    ingredients=", ".join(pdata["ingredients"]),
                    category_id=cat.id,
                    images=json.dumps(pdata["images"]),
                    is_featured=True
                )
                db.add(prod)
                db.flush()

            # 3. Variants
            for vdata in pdata["variants"]:
                existing_v = db.query(ProductVariant).filter(
                    ProductVariant.product_id == prod.id,
                    ProductVariant.quantity_label == vdata["quantityLabel"]
                ).first()

                if not existing_v:
                    v = ProductVariant(
                        id=f"var-{prod.id}-{vdata['quantityLabel'].replace(' ', '')}",
                        product_id=prod.id,
                        quantity_label=vdata["quantityLabel"],
                        price=float(vdata["price"])
                    )
                    db.add(v)

        db.commit()
        print("✅ Python SQLAlchemy ORM seed completed successfully!")
    except Exception as e:
        db.rollback()
        print(f"❌ Error during SQLAlchemy ORM seed: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
