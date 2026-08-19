from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field

class ProductVariantSchema(BaseModel):
    quantityLabel: str
    price: float

class ProductSchema(BaseModel):
    id: str
    name: str
    slug: str
    category: str
    description: str
    howToUse: Optional[str] = ""
    shelfLife: Optional[str] = ""
    bestFor: Optional[str] = ""
    benefits: List[str]
    ingredients: List[str]
    variants: List[ProductVariantSchema]
    images: List[str]
    isFeatured: bool = True

class OrderItemSchema(BaseModel):
    productId: str
    variantLabel: str
    quantity: int = Field(gt=0)

class PlaceOrderSchema(BaseModel):
    customerName: str = Field(min_length=2)
    customerEmail: EmailStr
    customerPhone: str = Field(min_length=8)
    shippingAddress: str = Field(min_length=5)
    items: List[OrderItemSchema]

class OrderResponseSchema(BaseModel):
    id: str
    orderNumber: str
    customerName: str
    customerEmail: str
    customerPhone: str
    shippingAddress: str
    totalAmount: float
    status: str
    createdAt: str
    items: List[dict]
