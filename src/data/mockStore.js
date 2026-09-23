import { PRODUCTS as SEED_PRODUCTS, CATEGORIES, BUYERS, ARTISANS } from "./mockData.js";

// Guard localStorage for SSR/build environments
const isBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";
const STORAGE_KEY_PRODUCTS = "vanya_session_products_v2";
const STORAGE_KEY_USER = "vanya_current_user_v2";
const STORAGE_KEY_ORDERS = "vanya_session_orders_v2";
const STORAGE_KEY_CART = "vanya_session_cart_v2";

const loadFromStorage = (key, fallback) => {
  if (!isBrowser) return fallback;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
};

const saveToStorage = (key, data) => {
  if (!isBrowser) return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn("localStorage save failed:", err);
  }
};

let sessionProducts = loadFromStorage(STORAGE_KEY_PRODUCTS, []);
let currentUser = loadFromStorage(STORAGE_KEY_USER, null);
let sessionOrders = loadFromStorage(STORAGE_KEY_ORDERS, [
  {
    id: "ord_1001",
    orderDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    buyerName: "Aarav Sharma",
    buyerLocation: "Hyderabad, Telangana",
    items: [
      {
        id: 101,
        name: "Jaipur Hand-Painted Blue Pottery Serving Bowl",
        price: 1450,
        priceFormatted: "₹1,450",
        quantity: 1,
        artisan: "Ramprasad Prajapat",
        image: "https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg"
      }
    ],
    totalAmount: 1450,
    status: "Dispatched",
    paymentMethod: "UPI Direct"
  }
]);
let sessionCart = loadFromStorage(STORAGE_KEY_CART, []);

const listeners = new Set();
const notifyListeners = () => listeners.forEach(fn => fn());

// Buyer preference profiles for digest matching
export const BUYER_PREFERENCES = [
  { id: "b1", name: "Ananya Sharma", city: "Mumbai", category: "kitchen-and-dining", maxPrice: 3000, channel: "WhatsApp" },
  { id: "b2", name: "Rohan Varma", city: "Bengaluru", category: "art-and-crafts", maxPrice: 4500, channel: "Telegram" },
  { id: "b3", name: "Priya Nair", city: "Chennai", category: "clothing-and-apparel", maxPrice: 12000, channel: "WhatsApp" },
  { id: "b4", name: "Vikram Sengupta", city: "Kolkata", category: "religious-items", maxPrice: 2000, channel: "WhatsApp" },
  { id: "b5", name: "Kavita Rao", city: "Hyderabad", category: "kitchen-and-dining", maxPrice: 2500, channel: "Telegram" },
  { id: "b6", name: "Devansh Mehta", city: "Delhi NCR", category: "art-and-crafts", maxPrice: 8000, channel: "WhatsApp" }
];

export const mockStore = {
  // PRODUCTS
  getProducts() {
    return [...sessionProducts, ...SEED_PRODUCTS];
  },

  getProductById(id) {
    return this.getProducts().find(p => String(p.id) === String(id));
  },

  addProduct(product) {
    const formattedPrice = `₹ ${Number(product.price).toLocaleString("en-IN")}`;
    const cat = CATEGORIES.find(c => c.id === product.category);
    const newCraft = {
      id: `craft_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      name: product.name,
      category: product.category || "art-and-crafts",
      categoryName: cat ? cat.title : "Artisan Craft",
      price: Number(product.price),
      priceFormatted: formattedPrice,
      image: product.image || "https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg",
      artisan: product.artisan || currentUser?.name || "Ramprasad Prajapat",
      location: product.location || currentUser?.location || "Jaipur, Rajasthan",
      description: product.description || "",
      material: product.material || "",
      giVerified: true,
      inStock: product.quantity || 5,
      rating: 5.0,
      reviews: 1,
      specs: product.specs || {},
      agentData: {
        productAgent: product.productAgent || null,
        priceAgent: product.priceAgent || null,
        marketAgent: product.marketAgent || null,
        createdAt: new Date().toISOString()
      }
    };

    sessionProducts = [newCraft, ...sessionProducts];
    saveToStorage(STORAGE_KEY_PRODUCTS, sessionProducts);
    notifyListeners();
    return newCraft;
  },

  getSellerProducts(artisanName) {
    const all = this.getProducts();
    if (!artisanName) return all;
    return all.filter(p => p.artisan?.toLowerCase().includes(artisanName.toLowerCase()) || artisanName.toLowerCase().includes(p.artisan?.toLowerCase() || ""));
  },

  // USER / AUTH
  getCurrentUser() {
    return currentUser;
  },

  setCurrentUser(user) {
    currentUser = user;
    saveToStorage(STORAGE_KEY_USER, currentUser);
    notifyListeners();
    return currentUser;
  },

  logoutUser() {
    currentUser = null;
    saveToStorage(STORAGE_KEY_USER, null);
    notifyListeners();
  },

  loginDemoUser(role = "buyer") {
    let demoUser;
    if (role === "seller") {
      demoUser = {
        id: "artisan_1",
        name: "Ramprasad Prajapat",
        email: "ramprasad@vanya.demo",
        role: "seller",
        location: "Jaipur, Rajasthan",
        craft: "Jaipur Blue Pottery",
        rating: 4.9,
        reviewsCount: 84,
        giVerified: true,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
      };
    } else {
      demoUser = {
        id: "buyer_1",
        name: "Aarav Sharma",
        email: "aarav.sharma@vanya.demo",
        role: "buyer",
        location: "Hyderabad, Telangana",
        interests: ["Pottery", "Ceramics", "Sarees"]
      };
    }
    return this.setCurrentUser(demoUser);
  },

  // CART
  getCart() {
    return sessionCart;
  },

  addToCart(product, quantity = 1) {
    const existingIndex = sessionCart.findIndex(item => String(item.id) === String(product.id));
    if (existingIndex > -1) {
      sessionCart[existingIndex].quantity += quantity;
    } else {
      sessionCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        priceFormatted: product.priceFormatted || `₹${product.price}`,
        image: product.image,
        artisan: product.artisan || "Master Artisan",
        location: product.location || "India",
        quantity
      });
    }
    saveToStorage(STORAGE_KEY_CART, sessionCart);
    notifyListeners();
    return sessionCart;
  },

  updateCartQuantity(productId, delta) {
    sessionCart = sessionCart.map(item => {
      if (String(item.id) === String(productId)) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);

    saveToStorage(STORAGE_KEY_CART, sessionCart);
    notifyListeners();
    return sessionCart;
  },

  removeFromCart(productId) {
    sessionCart = sessionCart.filter(item => String(item.id) !== String(productId));
    saveToStorage(STORAGE_KEY_CART, sessionCart);
    notifyListeners();
    return sessionCart;
  },

  clearCart() {
    sessionCart = [];
    saveToStorage(STORAGE_KEY_CART, sessionCart);
    notifyListeners();
  },

  // ORDERS
  getOrders() {
    return sessionOrders;
  },

  getSellerOrders(artisanName) {
    if (!artisanName) return sessionOrders;
    return sessionOrders.filter(order =>
      order.items?.some(item =>
        item.artisan?.toLowerCase().includes(artisanName.toLowerCase()) ||
        artisanName.toLowerCase().includes(item.artisan?.toLowerCase() || "")
      )
    );
  },

  addOrder(orderData) {
    const newOrder = {
      id: `ord_${Date.now()}`,
      orderDate: new Date().toISOString(),
      buyerName: currentUser?.name || orderData.buyerName || "Aarav Sharma",
      buyerLocation: currentUser?.location || orderData.buyerLocation || "Hyderabad, Telangana",
      items: orderData.items || [...sessionCart],
      totalAmount: orderData.totalAmount || sessionCart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      status: "Processing",
      paymentMethod: orderData.paymentMethod || "UPI Direct"
    };

    sessionOrders = [newOrder, ...sessionOrders];
    saveToStorage(STORAGE_KEY_ORDERS, sessionOrders);
    this.clearCart();
    notifyListeners();
    return newOrder;
  },

  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  getBuyerMatches(product) {
    return BUYER_PREFERENCES.filter(b => b.category === product.category && product.price <= b.maxPrice);
  },

  getAdminMetrics() {
    const all = this.getProducts();
    const sessionGMV = sessionProducts.reduce((s, p) => s + p.price, 0);
    const orderGMV = sessionOrders.reduce((s, o) => s + o.totalAmount, 0);
    return {
      gmvFormatted: `₹ ${(4285000 + sessionGMV + orderGMV).toLocaleString("en-IN")}`,
      totalArtisans: 1420 + sessionProducts.length,
      totalListings: all.length,
      aiExecutions: 34810 + sessionProducts.length * 3,
      sessionProductsCount: sessionProducts.length,
      buyerConversations: 24190 + sessionOrders.length * 4
    };
  }
};
