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
  howToUse: string;
  shelfLife: string;
  bestFor: string;
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
    description: "Harmony Herbal Hair Oil is a nourishing herbal hair oil formulated with a blend of 24 carefully selected herbs and natural cold-pressed oils. It is designed to support healthier-looking, stronger, smoother and more manageable hair while providing deep nourishment to the scalp and hair strands.",
    howToUse: "Apply oil generously on scalp & hair strands. Massage gently in circular motions for 10-15 minutes. Leave on for at least 1 hour or overnight before washing with a mild herbal shampoo.",
    shelfLife: "24 Months",
    bestFor: "Hair fall control, scalp nourishment, dry & frizzy hair",
    benefits: [
      "Helps nourish the scalp and hair roots",
      "Supports stronger, healthier-looking hair growth",
      "Helps reduce dryness, split ends, and roughness",
      "Helps maintain a clean and healthy scalp",
      "Suitable for regular daily hair-care routines",
      "Enriched with 24 traditional Indian botanical ingredients"
    ],
    ingredients: [
      "Amla", "Hibiscus", "Curry Leaves", "Fenugreek", "Neem", 
      "Rosemary", "Onion", "Coconut Oil", "Castor Oil", "Almond Oil",
      "Bhringraj", "Brahmi", "Vetiver", "Sesame Oil"
    ],
    variants: [
      { quantityLabel: "100 ml", price: 250 },
      { quantityLabel: "250 ml", price: 625 },
      { quantityLabel: "500 ml", price: 1250 },
      { quantityLabel: "1000 ml", price: 2500 }
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1HOLsWYR6ZVthDlK-fffbQngz6Tw0k0wB=w1000",
      "/images/products/harmoni-hair-oil.jpg"
    ],
    isFeatured: true
  },
  {
    id: "natural-aura-bath-powder",
    name: "Natural Aura Bath Powder",
    slug: "natural-aura-bath-powder",
    category: "Body Care",
    description: "Natural Aura Bath Powder is a traditional herbal bathing powder made with a carefully selected blend of 11 natural herbs and botanicals. It gently cleanses the skin while helping remove excess oil, dirt, and impurities without stripping natural skin moisture.",
    howToUse: "Mix 2-3 tablespoons with water or raw milk to form a smooth paste. Apply all over wet body, massage gently in circular motions, and rinse off thoroughly with warm water. Replaces soap for daily natural bathing.",
    shelfLife: "12 Months",
    bestFor: "Daily gentle cleansing, soft skin feel, all skin types",
    benefits: [
      "Gently cleanses the skin without harsh chemicals",
      "Helps remove dirt, sweat, and excess oil naturally",
      "Helps maintain soft, smooth, and supple skin",
      "Supports a naturally clean and glowing appearance",
      "100% natural replacement for synthetic body washes"
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
      "https://lh3.googleusercontent.com/d/1eTaDYrMaxUNgq1kDWJQd5RQm_6512uwt=w1000",
      "/images/products/natural-aura-bath-powder.jpg"
    ],
    isFeatured: true
  },
  {
    id: "nature-fresh-moringa-bath-powder",
    name: "Nature Fresh Moringa Bath Powder",
    slug: "nature-fresh-moringa-bath-powder",
    category: "Body Care",
    description: "Nature Fresh Moringa Bath Powder is a targeted herbal bathing powder specially formulated for acne-prone and blemish-prone skin. Enriched with the natural antibacterial goodness of moringa leaves, neem, and turmeric.",
    howToUse: "Mix 2 tablespoons with plain water or rose water. Apply evenly on body & acne-prone areas. Massage gently for 2 minutes and wash off with lukewarm water.",
    shelfLife: "12 Months",
    bestFor: "Acne-prone skin, oily skin, blemish reduction, body acne",
    benefits: [
      "Specially formulated for acne-prone and oily skin types",
      "Helps cleanse away acne-causing dirt and excess sebum",
      "Helps keep the skin feeling fresh, cool, and clean",
      "Helps maintain a clearer, healthier-looking skin texture",
      "Leaves skin refreshed and energized after every bath"
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
      "https://lh3.googleusercontent.com/d/16vzTm2UDBwbWNhloX6U425Nz0iv9CCH0=w1000",
      "/images/products/moringa-bath-powder.jpg"
    ],
    isFeatured: true
  },
  {
    id: "luminance-tan-care-pack",
    name: "Luminance Tan Care Pack",
    slug: "luminance-tan-care-pack",
    category: "Skin Care",
    description: "Luminance Tan Care Pack is an intensive herbal skin-care blend specially created to care for sun-tanned, dull, and uneven-looking skin. Formulated with wild turmeric, gram flour, and sun-dried orange peel.",
    howToUse: "Mix 1-2 tablespoons with curd, raw milk, or rose water into a thick paste. Apply evenly to face, neck, arms, and tanned areas. Leave for 15 minutes until semi-dry, then wet hands and scrub gently while rinsing off.",
    shelfLife: "12 Months",
    bestFor: "Sun tan removal, skin brightening, exfoliation & glow",
    benefits: [
      "Helps improve the appearance of sun-tanned skin",
      "Helps brighten dull, fatigued-looking skin tone",
      "Helps remove surface dead skin cells and deep impurities",
      "Gently exfoliates without causing skin micro-tears",
      "Supports a naturally radiant and glowing complexion"
    ],
    ingredients: [
      "Wild Turmeric", "Gram Flour", "Green Gram", "Rose Petals", "Orange Peel", "Sandalwood"
    ],
    variants: [
      { quantityLabel: "100 gm", price: 250 },
      { quantityLabel: "250 gm", price: 625 },
      { quantityLabel: "500 gm", price: 1250 },
      { quantityLabel: "1000 gm", price: 2500 }
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1mYqMGbqIM6IgDXGmt_5V2g6xmJxxrH7s=w1000",
      "/images/products/tan-care-pack.jpg"
    ],
    isFeatured: true
  },
  {
    id: "tiny-glow-baby-bath-powder",
    name: "Tiny Glow Baby Bath Powder",
    slug: "tiny-glow-baby-bath-powder",
    category: "Baby Care",
    description: "Tiny Glow Baby Bath Powder is an ultra-gentle herbal bathing powder specially crafted for your baby's delicate skin. Made with finely ground traditional herbs to ensure zero irritation and 100% natural purity.",
    howToUse: "Mix a small spoonful with warm water to create a silky paste. Gently smooth over baby's body during bath and rinse with lukewarm water. Safe for daily baby bath routines.",
    shelfLife: "12 Months",
    bestFor: "Delicate baby skin, sensitive skin, 100% natural chemical-free bathing",
    benefits: [
      "Ultra-gentle cleansing designed for baby's sensitive skin",
      "Helps remove everyday sweat and skin impurities smoothly",
      "Leaves baby's skin feeling soft, smooth, and refreshed",
      "Helps maintain comfortable skin moisture balance",
      "Provides traditional Indian botanical care for infants"
    ],
    ingredients: [
      "Green Gram", "Chickpea", "Kasturi Manjal", "Neem Leaves", "Rose Petals", "Vetiver Root"
    ],
    variants: [
      { quantityLabel: "100 gm", price: 250 },
      { quantityLabel: "250 gm", price: 625 },
      { quantityLabel: "500 gm", price: 1250 },
      { quantityLabel: "1000 gm", price: 2500 }
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1WTz7wZ2nvUs8CnaklGMC836mb7IpNYkY=w1000",
      "/images/products/baby-bath-powder.jpg"
    ],
    isFeatured: true
  },
  {
    id: "little-bloom-baby-hair-oil",
    name: "Little Bloom Baby Hair Oil",
    slug: "little-bloom-baby-hair-oil",
    category: "Baby Care",
    description: "Little Bloom Baby Hair Oil is a mild, non-sticky herbal hair oil formulated for baby's tender scalp and fine hair strands. Blended with cold-pressed coconut oil, sweet almond oil, sesame oil, and castor oil.",
    howToUse: "Take 4-5 drops on palm, warm gently between hands, and softly massage baby's scalp and hair 30 minutes before bath or after washing.",
    shelfLife: "24 Months",
    bestFor: "Baby scalp nourishment, soft hair growth, gentle cradle cap care",
    benefits: [
      "Gently nourishes baby's delicate scalp and hair roots",
      "Helps keep baby's fine hair soft, smooth, and shiny",
      "Helps prevent dryness and flaking of the baby's scalp",
      "Lightweight, non-sticky, and quickly absorbed formula",
      "Ideal for gentle daily baby scalp and head massage"
    ],
    ingredients: [
      "Virgin Coconut Oil", "Sweet Almond Oil", "Sesame Oil", "Castor Oil", "Rose Petal Extract"
    ],
    variants: [
      { quantityLabel: "100 ml", price: 300 },
      { quantityLabel: "250 ml", price: 750 },
      { quantityLabel: "500 ml", price: 1500 },
      { quantityLabel: "1000 ml", price: 3000 }
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1faA3VbUn4Bm_PxsqxVwom5VB4RNBtoji=w1000",
      "/images/products/baby-hair-oil.jpg"
    ],
    isFeatured: true
  },
  {
    id: "nature-shine-herbal-shampoo",
    name: "Nature Shine Herbal Shampoo",
    slug: "nature-shine-herbal-shampoo",
    category: "Hair Care",
    description: "Nature Shine Herbal Shampoo is a gentle, low-lather herbal hair cleanser made with reetha, hibiscus, and aloe vera. Formulated to clean hair and scalp effectively without stripping natural scalp protective oils.",
    howToUse: "Dilute 1-2 tablespoons with a little water. Apply to wet hair and scalp, massage into a soft natural lather, and rinse off thoroughly.",
    shelfLife: "18 Months",
    bestFor: "Gentle natural hair wash, scalp cleansing, hibiscus hair shine",
    benefits: [
      "Gently cleanses scalp and hair without harsh sulfates",
      "Helps remove dirt, sweat, and excess scalp oil buildup",
      "Helps maintain scalp pH balance and freshness",
      "Leaves hair feeling soft, shiny, and naturally bouncy",
      "Ideal companion to use after Harmoni Hair Oil treatment"
    ],
    ingredients: [
      "Hibiscus Flowers", "Reetha (Soapnut)", "Amla", "Moringa", "Curry Leaves", 
      "Fenugreek", "Flaxseed", "Fresh Aloe Vera Gel"
    ],
    variants: [
      { quantityLabel: "100 ml", price: 250 },
      { quantityLabel: "250 ml", price: 500 },
      { quantityLabel: "500 ml", price: 625 },
      { quantityLabel: "1000 ml", price: 1250 }
    ],
    images: [
      "https://lh3.googleusercontent.com/d/13Pkwu__irDvpsQWRndYMObE9srwSO42H=w1000",
      "/images/products/herbal-shampoo.jpg"
    ],
    isFeatured: true
  }
];
