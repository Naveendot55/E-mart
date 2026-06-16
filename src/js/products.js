/**
 * E-mart Product Database
 * Contains 24 sample products across 3 categories: Women, Men, Food
 * Each product has: id, name, category, price, rating, reviewCount, image, inStock, badge
 * Images sourced from Unsplash (free, permanent CDN URLs) matched to each product
 */

const products = [
  // ==================== WOMEN'S PRODUCTS ====================
  {
    id: 1,
    name: "Elegant Silk Blouse",
    category: "women",
    price: 49.99,
    rating: 4.5,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "New",
    description: "A luxurious silk blouse perfect for both office and evening wear."
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    category: "women",
    price: 79.99,
    rating: 4.8,
    reviewCount: 256,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Popular",
    description: "Beautiful floral print dress ideal for sunny days and beach outings."
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    category: "women",
    price: 89.99,
    rating: 4.3,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: null,
    description: "Timeless denim jacket with a modern fit and premium wash."
  },
  {
    id: 4,
    name: "Cashmere Sweater",
    category: "women",
    price: 129.99,
    rating: 4.7,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a28?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a28?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Sale",
    description: "Ultra-soft cashmere sweater for cozy winter styling."
  },
  {
    id: 5,
    name: "High-Waist Yoga Pants",
    category: "women",
    price: 39.99,
    rating: 4.6,
    reviewCount: 342,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Popular",
    description: "Stretchy, comfortable yoga pants with moisture-wicking fabric."
  },
  {
    id: 6,
    name: "Leather Crossbody Bag",
    category: "women",
    price: 159.99,
    rating: 4.4,
    reviewCount: 73,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: false,
    badge: "Sale",
    description: "Genuine leather crossbody bag with adjustable strap."
  },
  {
    id: 7,
    name: "Pleated Midi Skirt",
    category: "women",
    price: 54.99,
    rating: 4.2,
    reviewCount: 95,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "New",
    description: "Elegant pleated midi skirt in a versatile neutral tone."
  },
  {
    id: 8,
    name: "Embroidered Boho Top",
    category: "women",
    price: 44.99,
    rating: 4.1,
    reviewCount: 61,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: null,
    description: "Bohemian-style top with intricate embroidery details."
  },

  // ==================== MEN'S PRODUCTS ====================
  {
    id: 9,
    name: "Slim Fit Oxford Shirt",
    category: "men",
    price: 59.99,
    rating: 4.6,
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Popular",
    description: "Classic Oxford shirt with a modern slim fit cut."
  },
  {
    id: 10,
    name: "Bomber Jacket",
    category: "men",
    price: 119.99,
    rating: 4.7,
    reviewCount: 145,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "New",
    description: "Stylish bomber jacket with ribbed cuffs and collar."
  },
  {
    id: 11,
    name: "Tapered Chino Pants",
    category: "men",
    price: 64.99,
    rating: 4.4,
    reviewCount: 112,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: null,
    description: "Comfortable tapered chinos with stretch fabric technology."
  },
  {
    id: 12,
    name: "Leather Chelsea Boots",
    category: "men",
    price: 189.99,
    rating: 4.8,
    reviewCount: 87,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Sale",
    description: "Premium leather Chelsea boots with elastic side panels."
  },
  {
    id: 13,
    name: "Graphic Crew T-Shirt",
    category: "men",
    price: 29.99,
    rating: 4.2,
    reviewCount: 276,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: null,
    description: "100% cotton graphic tee with contemporary art-inspired print."
  },
  {
    id: 14,
    name: "Wool Blend Overcoat",
    category: "men",
    price: 249.99,
    rating: 4.9,
    reviewCount: 54,
    image: "https://images.unsplash.com/photo-1544923246-77307dd270cb?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1544923246-77307dd270cb?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: false,
    badge: "Popular",
    description: "Sophisticated wool blend overcoat for a refined winter look."
  },
  {
    id: 15,
    name: "Performance Running Shoes",
    category: "men",
    price: 139.99,
    rating: 4.5,
    reviewCount: 321,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "New",
    description: "Lightweight running shoes with advanced cushioning system."
  },
  {
    id: 16,
    name: "Minimalist Leather Watch",
    category: "men",
    price: 199.99,
    rating: 4.6,
    reviewCount: 163,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Sale",
    description: "Sleek leather strap watch with Japanese quartz movement."
  },

  // ==================== FOOD PRODUCTS ====================
  {
    id: 17,
    name: "Organic Matcha Powder",
    category: "food",
    price: 24.99,
    rating: 4.7,
    reviewCount: 412,
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Popular",
    description: "Ceremonial grade organic matcha from Kyoto, Japan."
  },
  {
    id: 18,
    name: "Artisan Dark Chocolate",
    category: "food",
    price: 12.99,
    rating: 4.8,
    reviewCount: 534,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Sale",
    description: "72% cacao single-origin dark chocolate from Belgium."
  },
  {
    id: 19,
    name: "Premium Olive Oil",
    category: "food",
    price: 34.99,
    rating: 4.5,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: null,
    description: "Cold-pressed extra virgin olive oil from Tuscany."
  },
  {
    id: 20,
    name: "Truffle Sea Salt",
    category: "food",
    price: 18.99,
    rating: 4.3,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "New",
    description: "Hand-harvested sea salt infused with black truffle essence."
  },
  {
    id: 21,
    name: "Organic Honey Collection",
    category: "food",
    price: 42.99,
    rating: 4.9,
    reviewCount: 298,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "Popular",
    description: "Set of 3 raw organic honeys: wildflower, clover, and buckwheat."
  },
  {
    id: 22,
    name: "Gourmet Coffee Beans",
    category: "food",
    price: 28.99,
    rating: 4.6,
    reviewCount: 467,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: null,
    description: "Single-origin Arabica beans from Ethiopian highlands."
  },
  {
    id: 23,
    name: "Mixed Nuts & Dried Fruits",
    category: "food",
    price: 19.99,
    rating: 4.4,
    reviewCount: 223,
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: false,
    badge: "Sale",
    description: "Premium trail mix with almonds, cashews, cranberries, and apricots."
  },
  {
    id: 24,
    name: "Aged Balsamic Vinegar",
    category: "food",
    price: 39.99,
    rating: 4.7,
    reviewCount: 132,
    image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=400&h=400&fit=crop&auto=format&q=80",
    thumbnail: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=200&h=200&fit=crop&auto=format&q=80",
    inStock: true,
    badge: "New",
    description: "12-year aged balsamic vinegar from Modena, Italy."
  }
];

export default products;
