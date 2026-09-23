/**
 * VANYA API PLUGIN
 * Server middleware for Vite dev server.
 * Loads .env, handles REST endpoints for Product, Price, and Marketing AI agents.
 */

import fs from "fs";
import path from "path";

import { runProductAgent } from "./agents/productAgent.js";
import { runPriceAgent } from "./agents/priceAgent.js";
import { runMarketAgent } from "./agents/marketAgent.js";

function loadEnv() {
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (!fs.existsSync(envPath)) return;
    const envConfig = fs.readFileSync(envPath, "utf-8");
    envConfig.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return;
      const index = trimmed.indexOf("=");
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
      if (key && value) process.env[key] = value;
    });
    console.log("[VANYA] Environment loaded.");
  } catch (error) {
    console.error("[VANYA] Failed to load .env:", error.message);
  }
}

loadEnv();

const CATEGORIES = [
  { id: "art-and-crafts", title: "Art & Crafts" },
  { id: "clothing-and-apparel", title: "Clothing" },
  { id: "kitchen-and-dining", title: "Kitchen & Dining" },
  { id: "religious-items", title: "Religious Items" }
];

const SEED_PRODUCTS = [
  {
    id: 101,
    name: "Jaipur Hand-Painted Blue Pottery Serving Bowl",
    category: "kitchen-and-dining",
    categoryName: "Kitchen & Dining",
    artisan: "Ramprasad Prajapat",
    location: "Jaipur, Rajasthan",
    price: 1450,
    priceFormatted: "₹1,450",
    rating: 4.9,
    reviews: 84,
    giVerified: true,
    inStock: 4,
    image: "https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg",
    description: "Crafted from quartz clay and hand-painted with cobalt oxide floral arabesques.",
    material: "Quartz Clay"
  },
  {
    id: 102,
    name: "Kondapalli Wooden Bullock Cart Doll",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Ramesh Kumar",
    location: "Kondapalli, Andhra Pradesh",
    price: 1850,
    priceFormatted: "₹1,850",
    rating: 4.8,
    reviews: 42,
    giVerified: true,
    inStock: 6,
    image: "https://i.pinimg.com/1200x/e4/d9/4c/e4d94c25276591f97b54926b32514335.jpg",
    description: "Hand-carved wooden craft.",
    material: "Softwood"
  },
  {
    id: 103,
    name: "Handwoven Srikakulam Kalamkari Silk Saree",
    category: "clothing-and-apparel",
    categoryName: "Clothing",
    artisan: "Govindappa Weavers",
    location: "Srikakulam, Andhra Pradesh",
    price: 6400,
    priceFormatted: "₹6,400",
    rating: 5.0,
    reviews: 29,
    giVerified: true,
    inStock: 2,
    image: "https://i.pinimg.com/736x/27/63/0b/27630be79e4129133916e849830243ae.jpg",
    description: "Handwoven textile with Kalamkari-inspired design.",
    material: "Silk"
  },
  {
    id: 104,
    name: "Terracotta Hand-Carved Diya Set",
    category: "religious-items",
    categoryName: "Religious Items",
    artisan: "Savitri Devi",
    location: "Nizamabad, Telangana",
    price: 650,
    priceFormatted: "₹650",
    rating: 4.9,
    reviews: 110,
    giVerified: true,
    inStock: 15,
    image: "https://i.pinimg.com/1200x/56/3b/48/563b488cd803c2755d06764c2a8b9466.jpg",
    description: "Handcrafted terracotta diya set.",
    material: "Terracotta"
  },
  {
    id: 105,
    name: "Channapatna Lacquerware Toy Play Set",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Syed Noor",
    location: "Channapatna, Karnataka",
    price: 980,
    priceFormatted: "₹980",
    rating: 4.7,
    reviews: 58,
    giVerified: true,
    inStock: 8,
    image: "https://i.pinimg.com/1200x/63/4b/bb/634bbb204ce5ed132f9449e7198ed59c.jpg",
    description: "Traditional handcrafted wooden toy.",
    material: "Wood"
  },
  {
    id: 106,
    name: "Dhokra Lost-Wax Bronze Tribal Idol",
    category: "religious-items",
    categoryName: "Religious Items",
    artisan: "Budhram Baghel",
    location: "Bastar, Chhattisgarh",
    price: 2900,
    priceFormatted: "₹2,900",
    rating: 5.0,
    reviews: 19,
    giVerified: true,
    inStock: 1,
    image: "https://i.pinimg.com/1200x/6d/4e/6b/6d4e6bbf1989df5b7f20d91ba174163f.jpg",
    description: "Traditional metal craft.",
    material: "Bronze"
  }
];

let sessionProducts = [];

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20 * 1024 * 1024) {
        reject(new Error("Request too large."));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Request body is not valid JSON."));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

function addProduct(product) {
  const category = CATEGORIES.find((c) => c.id === product.category);
  const price = Number(product.price) || 0;

  const newCraft = {
    id: `craft_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name: product.name || product.productAgent?.productName || "Untitled Artisan Product",
    category: product.category || product.productAgent?.category || "art-and-crafts",
    categoryName: category?.title || "Artisan Craft",
    price,
    priceFormatted: `₹${price.toLocaleString("en-IN")}`,
    image: product.image || null,
    artisan: product.artisan || "VANYA Artisan",
    location: product.location || product.productAgent?.placeOfOrigin || "India",
    description: product.description || product.productAgent?.shortDescription || "",
    material: product.material || product.productAgent?.material || null,
    inStock: Number(product.quantity) || 1,
    rating: 5.0,
    reviews: 1,
    specs: product.specs || product.productAgent || {},
    agentData: {
      productAgent: product.productAgent || null,
      priceAgent: product.priceAgent || null,
      marketAgent: product.marketAgent || null,
      createdAt: new Date().toISOString()
    }
  };

  sessionProducts.unshift(newCraft);
  return newCraft;
}

export function apiPlugin() {
  return {
    name: "vanya-api-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/")) return next();

        try {
          // Status check
          if (req.url === "/api/agents/status" && req.method === "GET") {
            return sendJson(res, 200, {
              success: true,
              groq: { configured: Boolean(process.env.GROQ_API_KEY), model: "openai/gpt-oss-120b (Primary)" },
              gemini: { configured: Boolean(process.env.GEMINI_API_KEY), model: "gemini-1.5-flash (Secondary)" }
            });
          }

          // Product Agent
          if (req.url === "/api/agents/product" && req.method === "POST") {
            const body = await parseBody(req);
            const result = await runProductAgent(body);
            return sendJson(res, 200, result);
          }

          // Price Agent
          if (req.url === "/api/agents/price" && req.method === "POST") {
            const body = await parseBody(req);
            const result = await runPriceAgent({ ...body, seedProducts: SEED_PRODUCTS });
            return sendJson(res, 200, result);
          }

          // Marketing Agent
          if (req.url === "/api/agents/marketing" && req.method === "POST") {
            const body = await parseBody(req);
            const result = await runMarketAgent(body);
            return sendJson(res, 200, result);
          }

          // Get Products
          if (req.url === "/api/products" && req.method === "GET") {
            return sendJson(res, 200, [...sessionProducts, ...SEED_PRODUCTS]);
          }

          // Publish Product
          if (req.url === "/api/products" && req.method === "POST") {
            const body = await parseBody(req);
            const created = addProduct(body);
            return sendJson(res, 201, created);
          }

          // Admin Metrics
          if (req.url === "/api/admin/metrics" && req.method === "GET") {
            const allProducts = [...sessionProducts, ...SEED_PRODUCTS];
            const sessionGMV = sessionProducts.reduce((sum, p) => sum + Number(p.price || 0), 0);
            return sendJson(res, 200, {
              gmvFormatted: `₹${(4285000 + sessionGMV).toLocaleString("en-IN")}`,
              totalArtisans: 1420 + sessionProducts.length,
              totalListings: allProducts.length,
              aiExecutions: 34810 + sessionProducts.length * 3,
              sessionProductsCount: sessionProducts.length,
              buyerConversations: 24190 + sessionProducts.length * 4
            });
          }

          next();
        } catch (error) {
          console.error("[VANYA API ERROR]", error);
          return sendJson(res, 500, { success: false, error: error.message || "VANYA Agent Error" });
        }
      });
    }
  };
}