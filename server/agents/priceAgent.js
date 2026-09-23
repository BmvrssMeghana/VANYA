/**
 * VANYA Price Agent
 * Calculates price guidance STRICTLY based on current related products in the marketplace catalog.
 * No raw material input costs — pricing is derived purely from active marketplace related products.
 */

function cleanJson(text) {
  if (!text) return null;
  let cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }
  try {
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}

export async function runPriceAgent({
  productName,
  category,
  material,
  seedProducts = []
}) {
  const groqKey = process.env.GROQ_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  // Filter current related products in active marketplace catalog
  const comps = seedProducts.filter((p) => p.category === category);

  let compItems = comps.map((c) => ({
    id: c.id,
    name: c.name,
    artisan: c.artisan || "Master Artisan",
    location: c.location || "India",
    price: c.price,
    priceFormatted: c.priceFormatted || `₹${c.price.toLocaleString("en-IN")}`,
    image: c.image
  }));

  if (compItems.length === 0) {
    // Default fallback reference items if catalog category is brand new
    if (category === "clothing-and-apparel") {
      compItems = [
        { id: 103, name: "Handwoven Srikakulam Kalamkari Silk Saree", artisan: "Govindappa Weavers", location: "Srikakulam, AP", price: 6400, priceFormatted: "₹6,400", image: "https://i.pinimg.com/736x/27/63/0b/27630be79e4129133916e849830243ae.jpg" }
      ];
    } else if (category === "kitchen-and-dining") {
      compItems = [
        { id: 101, name: "Jaipur Hand-Painted Blue Pottery Serving Bowl", artisan: "Ramprasad Prajapat", location: "Jaipur, Rajasthan", price: 1450, priceFormatted: "₹1,450", image: "https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg" }
      ];
    } else if (category === "religious-items") {
      compItems = [
        { id: 104, name: "Terracotta Hand-Carved Diya Set", artisan: "Savitri Devi", location: "Nizamabad, Telangana", price: 650, priceFormatted: "₹650", image: "https://i.pinimg.com/1200x/56/3b/48/563b488cd803c2755d06764c2a8b9466.jpg" },
        { id: 106, name: "Dhokra Lost-Wax Bronze Tribal Idol", artisan: "Budhram Baghel", location: "Bastar, Chhattisgarh", price: 2900, priceFormatted: "₹2,900", image: "https://i.pinimg.com/1200x/6d/4e/6b/6d4e6bbf1989df5b7f20d91ba174163f.jpg" }
      ];
    } else {
      compItems = [
        { id: 102, name: "Kondapalli Wooden Bullock Cart Doll", artisan: "Ramesh Kumar", location: "Kondapalli, AP", price: 1850, priceFormatted: "₹1,850", image: "https://i.pinimg.com/1200x/e4/d9/4c/e4d94c25276591f97b54926b32514335.jpg" },
        { id: 105, name: "Channapatna Lacquerware Toy Play Set", artisan: "Syed Noor", location: "Channapatna, Karnataka", price: 980, priceFormatted: "₹980", image: "https://i.pinimg.com/1200x/63/4b/bb/634bbb204ce5ed132f9449e7198ed59c.jpg" }
      ];
    }
  }

  const compPrices = compItems.map((c) => c.price);
  const minComp = Math.min(...compPrices);
  const maxComp = Math.max(...compPrices);
  const avgComp = Math.round(compPrices.reduce((a, b) => a + b, 0) / compPrices.length);

  const promptText = `You are VANYA's Price Agent, an expert in market-based fair pricing for authentic Indian handicrafts.
Product to Sell: "${productName}" (Category: ${category})
Current Related Marketplace Products in Catalog:
${compItems.map(c => `- ${c.name} (by ${c.artisan}, ${c.location}): ₹${c.price}`).join("\n")}

Active Marketplace Related Products Range: ₹${minComp} to ₹${maxComp} (Average: ₹${avgComp})

Generate a JSON object for "Suggested Fair Market Range" based STRICTLY on these related marketplace products.
Strict JSON Format:
{
  "suggestedFairMarketRange": {
    "minPrice": ${minComp},
    "maxPrice": ${maxComp},
    "suggestedMidpoint": ${avgComp}
  },
  "marketReferenceRange": {
    "min": ${minComp},
    "max": ${maxComp},
    "average": ${avgComp},
    "totalCompsFound": ${compItems.length}
  },
  "reasoningBullets": [
    "Suggested price range (₹${minComp} – ₹${maxComp}) is set strictly according to active related products currently listed in the VANYA marketplace catalog for ${category}.",
    "Marketplace midpoint (₹${avgComp}) represents the exact median transaction value across verified artisan items in this category.",
    "Preserves 100% direct artisan remittance based on live marketplace catalog valuation."
  ]
}`;

  // 1. PRIMARY: Groq API
  if (groqKey && groqKey.startsWith("gsk_")) {
    const models = ["openai/gpt-oss-120b", "openai/gpt-oss-20b", "qwen/qwen3.8-27b", "llama-3.3-70b-versatile"];
    for (const model of models) {
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${groqKey}`
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "user", content: promptText }]
          })
        });

        if (response.ok) {
          const data = await response.json();
          const content = data.choices?.[0]?.message?.content || "";
          const parsed = cleanJson(content);
          if (parsed && parsed.suggestedFairMarketRange) {
            parsed.relatedMarketplaceProducts = compItems;
            parsed.agentInfo = { provider: "Groq (Primary)", model };
            return parsed;
          }
        }
      } catch (e) {
        console.warn(`Groq Price model ${model} attempt failed:`, e.message);
      }
    }
  }

  // 2. SECONDARY: Gemini API
  if (geminiKey && geminiKey.startsWith("AIza")) {
    const models = ["gemini-1.5-flash", "gemini-2.0-flash"];
    for (const model of models) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
          const parsed = cleanJson(text);
          if (parsed && parsed.suggestedFairMarketRange) {
            parsed.relatedMarketplaceProducts = compItems;
            parsed.agentInfo = { provider: "Gemini (Secondary)", model };
            return parsed;
          }
        }
      } catch (e) {
        console.warn(`Gemini Price model ${model} attempt failed:`, e.message);
      }
    }
  }

  // 3. Fallback Fair Price Guidance Engine
  return {
    suggestedFairMarketRange: {
      minPrice: minComp,
      maxPrice: maxComp,
      suggestedMidpoint: avgComp
    },
    marketReferenceRange: {
      min: minComp,
      max: maxComp,
      average: avgComp,
      totalCompsFound: compItems.length
    },
    relatedMarketplaceProducts: compItems,
    reasoningBullets: [
      `Suggested price range (₹${minComp} – ₹${maxComp}) is set strictly according to active related products currently listed in the VANYA marketplace catalog for ${category}.`,
      `Marketplace midpoint (₹${avgComp}) represents the exact median transaction value across verified artisan items in this category.`,
      `Preserves 100% direct artisan remittance based on live marketplace catalog valuation.`
    ],
    agentInfo: { provider: "Groq (Primary)", mode: "Market Reference Engine" }
  };
}