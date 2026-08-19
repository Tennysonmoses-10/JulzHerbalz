export interface ProductVariantData {
  quantityLabel: string;
  price: number;
}

export interface ProductData {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  variants: ProductVariantData[];
  images: string[];
  isFeatured: boolean;
}

export const INITIAL_PRODUCTS: ProductData[] = [
  {
    id: "harmoni-hair-oil",
    name: "Harmoni Hair Oil",
    slug: "harmoni-hair-oil",
    category: "Hair Care",
    description: "Harmony Herbal Hair Oil is a nourishing herbal hair oil formulated with a blend of carefully selected herbs and natural oils. It is designed to support healthier-looking, stronger, smoother and more manageable hair while providing nourishment to the scalp and hair strands.",
    benefits: [
      "Helps nourish the scalp and hair",
      "Supports stronger, healthier-looking hair",
      "Helps reduce dryness and roughness",
      "Helps maintain a healthy-looking scalp",
      "Suitable for regular hair-care routines",
      "Provides the goodness of traditional herbal ingredients"
    ],
    ingredients: [
      "Amla", "Hibiscus", "Curry Leaves", "Fenugreek", "Neem", 
      "Rosemary", "Onion", "Coconut Oil", "Castor Oil", "Almond Oil"
    ],
    variants: [
      { quantityLabel: "100 ml", price: 250 },
      { quantityLabel: "250 ml", price: 625 },
      { quantityLabel: "500 ml", price: 1250 },
      { quantityLabel: "1000 ml", price: 2500 }
    ],
    images: [
      "https://images.unsplash.com/photo-1608248597260-6578613692d2?auto=format&fit=crop&w=600&q=80",
      "/images/products/harmoni-hair-oil.png"
    ],
    isFeatured: true
  },
  {
    id: "natural-aura-bath-powder",
    name: "Natural Aura Bath Powder",
    slug: "natural-aura-bath-powder",
    category: "Body Care",
    description: "Natural Aura Bath Powder is a traditional herbal bathing powder made with a carefully selected blend of natural herbs and botanicals. It gently cleanses the skin while helping remove excess oil, dirt, and impurities.",
    benefits: [
      "Gently cleanses the skin",
      "Helps remove dirt, sweat, and excess oil",
      "Helps maintain soft and smooth-looking skin",
      "Supports a naturally clean and healthy-looking appearance",
      "Suitable for regular bathing routines"
    ],
    ingredients: [
      "Green Gram", "Chickpea/Gram", "Turmeric", "Neem", "Rose Petals",
      "Hibiscus", "Amla", "Vetiver", "Sandalwood", "Orange Peel", "Fenugreek"
    ],
    variants: [
      { quantityLabel: "100 gm", price: 200 },
      { quantityLabel: "250 gm", price: 500 },
      { quantityLabel: "500 gm", price: 1000 },
      { quantityLabel: "1000 gm", price: 2000 }
    ],
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      "/images/products/natural-aura-bath-powder.png"
    ],
    isFeatured: true
  },
  {
    id: "nature-fresh-moringa-bath-powder",
    name: "Nature Fresh Moringa Bath Powder",
    slug: "nature-fresh-moringa-bath-powder",
    category: "Body Care",
    description: "Nature Fresh Moringa Bath Powder is a herbal bathing powder specially formulated for acne-prone and blemish-prone skin. Enriched with the natural goodness of moringa and carefully selected herbal ingredients.",
    benefits: [
      "Specially formulated for acne-prone and oily skin",
      "Helps cleanse away dirt, sweat, and excess oil",
      "Helps keep the skin feeling fresh and clean",
      "Helps maintain a clearer-looking complexion",
      "Leaves the skin feeling refreshed after bathing"
    ],
    ingredients: [
      "Moringa", "Neem", "Turmeric", "Green Gram", "Chickpea", 
      "Amla", "Vetiver", "Rose Petals", "Orange Peel"
    ],
    variants: [
      { quantityLabel: "100 gm", price: 250 },
      { quantityLabel: "250 gm", price: 625 },
      { quantityLabel: "500 gm", price: 1250 },
      { quantityLabel: "1000 gm", price: 2500 }
    ],
    images: [
      "https://images.unsplash.com/photo-1512290900676-26c2a46486bd?auto=format&fit=crop&w=600&q=80",
      "/images/products/moringa-bath-powder.png"
    ],
    isFeatured: true
  },
  {
    id: "luminance-tan-care-pack",
    name: "Luminance Tan Care Pack",
    slug: "luminance-tan-care-pack",
    category: "Skin Care",
    description: "Luminance Tan Care Pack is a herbal skin-care blend specially created to help care for tanned, dull, and uneven-looking skin. Made with carefully selected herbal ingredients.",
    benefits: [
      "Helps improve the appearance of tanned skin",
      "Helps brighten dull-looking skin",
      "Helps remove surface dirt and impurities",
      "Helps gently exfoliate dead skin cells",
      "Supports a naturally radiant-looking complexion"
    ],
    ingredients: [
      "Turmeric", "Gram Flour", "Green Gram", "Rose Petals", "Orange Peel"
    ],
    variants: [
      { quantityLabel: "100 gm", price: 250 },
      { quantityLabel: "250 gm", price: 625 },
      { quantityLabel: "500 gm", price: 1250 },
      { quantityLabel: "1000 gm", price: 2500 }
    ],
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "/images/products/tan-care-pack.png"
    ],
    isFeatured: true
  },
  {
    id: "tiny-glow-baby-bath-powder",
    name: "Tiny Glow Baby Bath Powder",
    slug: "tiny-glow-baby-bath-powder",
    category: "Baby Care",
    description: "Tiny Glow Baby Bath Powder is a gentle herbal bathing powder specially made for your little one's delicate skin. Made with carefully selected traditional herbal ingredients.",
    benefits: [
      "Gentle cleansing for baby's delicate skin",
      "Helps remove everyday dirt and sweat",
      "Leaves baby's skin feeling soft and fresh",
      "Helps maintain a clean and comfortable skin feel",
      "Provides the goodness of traditional herbal ingredients"
    ],
    ingredients: [
      "Green Gram", "Chickpea", "Turmeric", "Neem", "Rose Petals", "Vetiver"
    ],
    variants: [
      { quantityLabel: "100 gm", price: 250 },
      { quantityLabel: "250 gm", price: 625 },
      { quantityLabel: "500 gm", price: 1250 },
      { quantityLabel: "1000 gm", price: 2500 }
    ],
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "/images/products/baby-bath-powder.png"
    ],
    isFeatured: true
  },
  {
    id: "little-bloom-baby-hair-oil",
    name: "Little Bloom Baby Hair Oil",
    slug: "little-bloom-baby-hair-oil",
    category: "Baby Care",
    description: "Little Bloom Baby Hair Oil is a gentle herbal hair oil specially formulated for your baby's delicate scalp and soft hair. Made with carefully selected natural oils and traditional herbs.",
    benefits: [
      "Gently nourishes baby's delicate scalp",
      "Helps keep baby's hair soft and smooth",
      "Helps maintain healthy-looking hair",
      "Helps prevent dryness of the scalp and hair",
      "Ideal for gentle baby scalp massage"
    ],
    ingredients: [
      "Coconut Oil", "Almond Oil", "Sesame Oil", "Castor Oil", "Rose Petals"
    ],
    variants: [
      { quantityLabel: "100 ml", price: 300 },
      { quantityLabel: "250 ml", price: 750 },
      { quantityLabel: "500 ml", price: 1500 },
      { quantityLabel: "1000 ml", price: 3000 }
    ],
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "/images/products/baby-hair-oil.png"
    ],
    isFeatured: true
  },
  {
    id: "nature-shine-herbal-shampoo",
    name: "Nature Shine Herbal Shampoo",
    slug: "nature-shine-herbal-shampoo",
    category: "Hair Care",
    description: "Nature Shine Herbal Shampoo is a gentle herbal hair cleanser made with carefully selected herbs and plant-based ingredients. Designed to cleanse the scalp and hair while maintaining a fresh and clean feel.",
    benefits: [
      "Gently cleanses the scalp and hair",
      "Helps remove dirt, sweat, and excess oil",
      "Helps maintain a fresh and clean scalp",
      "Helps keep hair soft and manageable",
      "Suitable for regular hair-washing routines"
    ],
    ingredients: [
      "Hibiscus", "Reetha", "Amla", "Moringa", "Curry Leaves", 
      "Fenugreek", "Flaxseed", "Aloe Vera"
    ],
    variants: [
      { quantityLabel: "100 ml", price: 250 },
      { quantityLabel: "250 ml", price: 500 },
      { quantityLabel: "500 ml", price: 625 },
      { quantityLabel: "1000 ml", price: 1250 }
    ],
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
      "/images/products/herbal-shampoo.png"
    ],
    isFeatured: true
  }
];
