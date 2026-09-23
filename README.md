# VANYA — Autonomous Agentic AI Digital Commerce for Artisans

> **“Removing the burden of becoming an e-commerce expert from the artisan.”**

VANYA is a state-of-the-art, AI-powered digital commerce platform created to empower rural and traditional Indian artisans. Artisans can photograph or record a voice description of their craft, and VANYA's multi-agent AI system automatically extracts attributes, calculates fair market pricing based on active catalog data, synthesizes multi-channel promotional copy, and matches conscious buyers.

---

## 🌟 Key Features & Agentic Architecture

VANYA features a 3-Agent pipeline reasoning over input data to produce structured catalog outputs:

```
[ Photo / Voice Input ] 
       │
       ▼
 🤖 1. PRODUCT AGENT (Multimodal Vision Engine - Gemini 2.5 Flash / Groq LLM)
       │  • Analyzes raw image pixels for craft subcategory, materials, dimensions, colors & origin
       │  • Enforces mandatory vs optional field matrix by craft category (Sarees, Pottery, Bamboo, Dolls)
       ▼
 🤖 2. PRICE AGENT (Marketplace Benchmarking Engine)
       │  • Queries live marketplace catalog items for identical/similar craft categories
       │  • Suggests Fair Market Range & midpoint with zero-middleman 100% direct remittance
       ▼
 🤖 3. MARKETING AGENT (Multi-Channel Promotion & Buyer Digest Matcher)
       │  • Synthesizes SEO tags, Instagram hooks, WhatsApp broadcasts, and Telegram alerts
       │  • Matches subscriber preference profiles (location, budget, craft type)
       ▼
 [ Seller Approval Gate ] ➔ [ Live Marketplace Catalog & Instant Seller Analytics Reflection ]
```

---

## 🚀 Core Platform Capabilities

### 1. 📸 Multimodal Product Intelligence (Product Agent)
* **Real Pixel Vision**: Uses Google Gemini Multimodal Vision API (`gemini-2.5-flash`) to perform real visual analysis of uploaded/captured craft photos.
* **Category Schema Enforcement**: Dynamically adapts schema rules for:
  * **Sarees**: Material, weave technique, length/width dimensions, primary colors.
  * **Pottery & Ceramics**: Terracotta/quartz clay composition, dimensions, weight, capacity.
  * **Bamboo Baskets**: Natural fibers, weaving technique, dimensions, care notes.
  * **Dolls & Toys**: Softwood/woodturn craft, height, cultural story lineage.

### 2. 💎 Fair Market Valuation (Price Agent)
* **Real Marketplace Benchmarking**: Dynamically calculates price guidance derived strictly from active marketplace catalog items in the same craft category.
* **Transparent Valuation**: Provides bulleted AI reasoning explaining why the range was selected.

### 3. 📣 Multi-Channel Syndication (Marketing Agent)
* **Tailored Platform Copy**: Generates customized copy for VANYA Storefront SEO, Instagram captions, WhatsApp Interest Broadcasts, and Telegram digest channels.
* **Buyer Preference Matching**: Cross-references craft categories and price points against active buyer profiles.

### 4. 🛒 Buyer Experience & Direct Artisan Cart
* **Catalog Exploration**: Filter by craft category, price range, regional artisan cluster, or search query.
* **Functional Cart & Checkout**: Slide-over cart drawer with quantity adjustments, direct remittance indicators, and simulated order placement.

### 5. 📊 Seller Business Analytics Dashboard
* **Real-time Stats**: Track total active listed crafts, direct sales revenue, orders received, and AI marketing reach.
* **Order Management**: Monitor customer orders with buyer locations, ordered items, payment status, and dispatch timelines.
* **AI Market Insights**: Dynamic pricing recommendations and buyer digest subscriber activity.

### 6. 🔐 Dual-Role Authentication System
* Switch between **Buyer** and **Artisan Vendor** modes.
* Quick 1-Click Demo Logins for instant testing.
* Role-based access control protecting listing creation for verified sellers.

---
## Architecture Diagram
<img width="958" height="1600" alt="image" src="https://github.com/user-attachments/assets/1d91eb1a-5169-4494-a0e8-91615012bcb0" />

---

## 🛠 Tech Stack

* **Frontend**: React 18, TailwindCSS, Vite
* **Backend Engine**: Node.js Express API Middleware (`server/apiPlugin.js`)
* **Primary LLM & Reasoning**: Groq API (`openai/gpt-oss-120b`) for fast text/voice reasoning
* **Multimodal Vision**: Google Gemini API (`gemini-2.5-flash`) for real pixel image extraction
* **State Management**: Reactive Session Store with `localStorage` persistence

---

## 📁 Repository Structure

```
VANYA/
├── server/
│   ├── agents/
│   │   ├── productAgent.js   # Multimodal Gemini Vision + Groq Product Intelligence
│   │   ├── priceAgent.js     # Catalog-benchmarked Fair Valuation Engine
│   │   └── marketAgent.js    # Multi-channel Promotional & Digest Synthesizer
│   └── apiPlugin.js          # Vite Server Express Plugin for /api/agents/* & /api/products
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation Header with role dropdown & cart badge
│   │   ├── CartDrawer.jsx    # Slide-over Artisan Cart & Checkout Modal
│   │   └── Footer.jsx        # Platform Footer
│   ├── data/
│   │   ├── mockData.js       # Seed craft catalog, artisans, and buyers data
│   │   └── mockStore.js      # Centralized session store with reactive subscribers
│   ├── pages/
│   │   ├── Home.jsx             # Hero section & craft story showcase
│   │   ├── Shop.jsx             # Filterable handcrafted marketplace catalog
│   │   ├── ProductDetail.jsx    # Provenance detail & direct WhatsApp order
│   │   ├── SellerOnboarding.jsx # 4-Step AI Camera onboarding workflow
│   │   ├── SellerProfile.jsx    # Artisan profile & listed items
│   │   ├── SellerAnalytics.jsx  # Business analytics & customer orders log
│   │   ├── Admin.jsx            # Platform GMV & metric insights
│   │   └── Login.jsx            # Dual-role authentication & demo login
│   ├── App.jsx               # Main React Application router & state wrapper
│   └── index.css             # TailwindCSS design system & tokens
├── .env                      # API Keys configuration (GROQ_API_KEY, GEMINI_API_KEY)
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚦 Quick Start Guide

### 1. Prerequisites
Ensure Node.js (v18+) is installed on your system.

### 2. Installation
```bash
# Clone repository
git clone https://github.com/BmvrssMeghana/VANYA.git
cd VANYA

# Install dependencies
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
GROQ_API_KEY=your_groq_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Running Locally
```bash
# Start development server
npm run dev
```
Open **http://localhost:5173/** in your browser.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for details.
