import React, { useState, useEffect } from "react";
import { mockStore } from "../data/mockStore";

const SellerAnalytics = ({ onNavigate }) => {
  const [currentUser, setCurrentUser] = useState(mockStore.getCurrentUser());
  const [sellerProducts, setSellerProducts] = useState([]);
  const [sellerOrders, setSellerOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("products"); // "products" | "orders" | "insights"

  const artisanName = currentUser?.name || "Ramprasad Prajapat";

  useEffect(() => {
    const updateData = () => {
      const user = mockStore.getCurrentUser();
      setCurrentUser(user);
      const name = user?.name || "Ramprasad Prajapat";
      setSellerProducts(mockStore.getSellerProducts(name));
      setSellerOrders(mockStore.getSellerOrders(name));
    };

    updateData();
    const unsubscribe = mockStore.subscribe(updateData);
    return unsubscribe;
  }, []);

  const totalRevenue = sellerOrders.reduce((sum, ord) => sum + Number(ord.totalAmount || 0), 142800);
  const activeListingsCount = sellerProducts.length;
  const ordersCount = sellerOrders.length + 84;

  return (
    <div className="w-full bg-[#fff8f1] font-serif text-[#1f1b13] min-h-screen pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 space-y-8">


        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#421b0f] via-[#5d3023] to-[#845333] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src={currentUser?.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"}
              alt={artisanName}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-md flex-shrink-0"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-serif text-3xl font-bold">{artisanName}</h1>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-sans font-bold">
                  ✓ Verified Artisan Seller
                </span>
              </div>
              <p className="font-serif text-sm text-[#ffdbd1]">
                {currentUser?.craft || "Master Heritage Craftsperson"} • {currentUser?.location || "Rajasthan, India"}
              </p>
              <p className="font-sans text-xs text-[#ffbe97]">
                📍 Direct Remittance Active • 0% Platform Commission
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate("seller-onboarding")}
            className="px-6 py-3.5 rounded-full bg-[#ffbe97] text-[#7a4b2c] font-sans text-xs font-bold shadow-md hover:bg-white transition-all flex-shrink-0"
          >
            + Create New Listing
          </button>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm space-y-1">
            <span className="font-sans text-xs text-[#84736f] uppercase tracking-wider font-bold">Total Active Crafts</span>
            <div className="font-serif text-3xl font-bold text-[#421b0f]">{activeListingsCount}</div>
            <span className="font-sans text-[11px] text-[#2E7D32]">🟢 Listed in VANYA Catalog</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm space-y-1">
            <span className="font-sans text-xs text-[#84736f] uppercase tracking-wider font-bold">Orders Received</span>
            <div className="font-serif text-3xl font-bold text-[#421b0f]">{ordersCount}</div>
            <span className="font-sans text-[11px] text-[#2E7D32]">↑ 100% Direct Remittance</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm space-y-1">
            <span className="font-sans text-xs text-[#84736f] uppercase tracking-wider font-bold">Total Sales Revenue</span>
            <div className="font-serif text-3xl font-bold text-[#845333]">₹ {totalRevenue.toLocaleString("en-IN")}</div>
            <span className="font-sans text-[11px] text-[#845333]">0% Middleman Deduction</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm space-y-1">
            <span className="font-sans text-xs text-[#84736f] uppercase tracking-wider font-bold">AI Marketing Reach</span>
            <div className="font-serif text-3xl font-bold text-[#421b0f]">8,420</div>
            <span className="font-sans text-[11px] text-[#2E7D32]">WhatsApp & Digest Matches</span>
          </div>
        </div>

        {/* Dashboard Section Switcher */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#d7c2bd] pb-3">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-bold transition-all ${activeTab === "products"
                  ? "bg-[#421b0f] text-white shadow-sm"
                  : "bg-white text-[#524440] hover:bg-[#f6ede0] border border-[#d7c2bd]"
                }`}
            >
              📦 My Listed Products ({sellerProducts.length})
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-bold transition-all ${activeTab === "orders"
                  ? "bg-[#421b0f] text-white shadow-sm"
                  : "bg-white text-[#524440] hover:bg-[#f6ede0] border border-[#d7c2bd]"
                }`}
            >
              🛒 Orders Received ({sellerOrders.length})
            </button>
            <button
              onClick={() => setActiveTab("insights")}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-bold transition-all ${activeTab === "insights"
                  ? "bg-[#421b0f] text-white shadow-sm"
                  : "bg-white text-[#524440] hover:bg-[#f6ede0] border border-[#d7c2bd]"
                }`}
            >
              💡 AI Pricing & Demand Insights
            </button>
          </div>

          {/* TAB 1: LISTED PRODUCTS */}
          {activeTab === "products" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-[#421b0f]">Products Posted by You</h3>
                <span className="font-sans text-xs text-[#84736f]">Updated live from mock session store</span>
              </div>

              {sellerProducts.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl border border-[#d7c2bd] text-center space-y-4">
                  <span className="material-symbols-outlined text-5xl text-[#d7c2bd]">inventory_2</span>
                  <h4 className="font-serif text-lg font-bold text-[#421b0f]">No Products Listed Yet</h4>
                  <p className="font-serif text-xs text-[#84736f]">
                    Use VANYA's AI Camera & Multimodal Agents to catalog your crafts in seconds.
                  </p>
                  <button
                    onClick={() => onNavigate && onNavigate("seller-onboarding")}
                    className="px-6 py-3 rounded-xl bg-[#421b0f] text-white font-sans text-xs font-bold hover:bg-[#845333]"
                  >
                    + Publish Your First Craft
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sellerProducts.map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-white rounded-3xl overflow-hidden border border-[#d7c2bd] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-video bg-[#f6ede0]">
                        <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-sans text-[10px] font-bold">
                          🟢 Live in Catalog
                        </span>
                        {prod.agentData?.createdAt && (
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#421b0f]/80 text-white font-sans text-[10px] font-bold">
                            AI Cataloged
                          </span>
                        )}
                      </div>

                      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="font-sans text-[10px] text-[#845333] uppercase font-bold tracking-wider">
                            {prod.categoryName || prod.category}
                          </span>
                          <h4 className="font-serif text-base font-bold text-[#421b0f] mt-1 leading-snug">
                            {prod.name}
                          </h4>
                          <p className="font-serif text-xs text-[#524440] line-clamp-2 mt-1">
                            {prod.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#eae1d4] flex items-center justify-between">
                          <div>
                            <span className="font-sans text-[10px] text-[#84736f] block font-bold">Price</span>
                            <span className="font-serif text-lg font-bold text-[#845333]">
                              {prod.priceFormatted || `₹${prod.price}`}
                            </span>
                          </div>

                          <button
                            onClick={() => onNavigate && onNavigate("product", { id: prod.id })}
                            className="px-4 py-2 rounded-xl border border-[#d7c2bd] font-sans text-xs font-semibold hover:bg-[#f6ede0]"
                          >
                            View Details →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: RECEIVED ORDERS */}
          {activeTab === "orders" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-[#421b0f]">Orders Received for Your Crafts</h3>
                <span className="font-sans text-xs text-[#84736f]">Direct Customer Orders</span>
              </div>

              {sellerOrders.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl border border-[#d7c2bd] text-center space-y-4">
                  <span className="material-symbols-outlined text-5xl text-[#d7c2bd]">shopping_cart_checkout</span>
                  <h4 className="font-serif text-lg font-bold text-[#421b0f]">No Orders Received Yet</h4>
                  <p className="font-serif text-xs text-[#84736f]">
                    When buyers purchase your listed crafts, direct orders will appear here automatically.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-[#d7c2bd] overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-serif text-xs">
                      <thead className="bg-[#fcf2e5] border-b border-[#d7c2bd] text-[#421b0f] font-sans font-bold uppercase text-[10px] tracking-wider">
                        <tr>
                          <th className="p-4">Order ID & Date</th>
                          <th className="p-4">Buyer Info</th>
                          <th className="p-4">Ordered Craft</th>
                          <th className="p-4">Total Amount</th>
                          <th className="p-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eae1d4] text-[#1f1b13]">
                        {sellerOrders.map((ord) => (
                          <tr key={ord.id} className="hover:bg-[#fff8f1]">
                            <td className="p-4">
                              <strong className="text-[#421b0f] font-sans text-xs">{ord.id}</strong>
                              <span className="block text-[11px] text-[#84736f] font-sans">
                                {new Date(ord.orderDate).toLocaleDateString("en-IN")}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className="font-bold text-[#421b0f] block">{ord.buyerName}</span>
                              <span className="text-[#84736f] text-[11px] block">{ord.buyerLocation}</span>
                            </td>
                            <td className="p-4">
                              {ord.items?.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <span className="font-bold text-[#421b0f]">{item.name}</span>
                                  <span className="text-[#845333] font-sans text-[10px] bg-[#fcf2e5] px-2 py-0.5 rounded font-bold">
                                    x{item.quantity}
                                  </span>
                                </div>
                              ))}
                            </td>
                            <td className="p-4 font-serif text-sm font-bold text-[#845333]">
                              ₹ {Number(ord.totalAmount).toLocaleString("en-IN")}
                            </td>
                            <td className="p-4 font-sans">
                              <span
                                className={`px-3 py-1 rounded-full text-[10px] font-bold ${ord.status === "Dispatched"
                                    ? "bg-blue-100 text-blue-800"
                                    : ord.status === "Processing"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-emerald-100 text-emerald-800"
                                  }`}
                              >
                                {ord.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: AI PRICING & DEMAND INSIGHTS */}
          {activeTab === "insights" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-[#d7c2bd] space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#421b0f] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#845333]">trending_up</span>
                  <span>AI Market Pricing Benchmark</span>
                </h4>
                <p className="font-serif text-xs text-[#524440] leading-relaxed">
                  VANYA Price Agent continuously monitors real catalog market prices. Your listed prices align with fair market ranges with <strong>98.4% optimal buyer attraction rating</strong>.
                </p>
                <div className="p-4 rounded-2xl bg-[#fcf2e5] border border-[#d7c2bd] space-y-2 font-sans text-xs">
                  <div className="flex justify-between">
                    <span>Average Pottery Craft Price:</span>
                    <strong className="text-[#421b0f]">₹ 1,550</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Saree Craft Price:</span>
                    <strong className="text-[#421b0f]">₹ 6,400</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Religious / Diya Item:</span>
                    <strong className="text-[#421b0f]">₹ 650</strong>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#d7c2bd] space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#421b0f] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#845333]">groups</span>
                  <span>Buyer Preference Matched Subscribers</span>
                </h4>
                <p className="font-serif text-xs text-[#524440]">
                  Active conscious buyers subscribed to WhatsApp & Telegram digests for your craft categories:
                </p>
                <div className="space-y-2 font-sans text-xs">
                  {[
                    { name: "Ananya Sharma (Mumbai)", category: "Kitchen & Pottery", channel: "WhatsApp Digest" },
                    { name: "Priya Nair (Chennai)", category: "Clothing & Sarees", channel: "WhatsApp Digest" },
                    { name: "Kavita Rao (Hyderabad)", category: "Kitchen & Dining", channel: "Telegram Channel" }
                  ].map((b, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#f6ede0] flex items-center justify-between">
                      <div>
                        <strong className="text-[#421b0f] block">{b.name}</strong>
                        <span className="text-[10px] text-[#84736f]">{b.category}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white text-[#845333] text-[10px] font-bold">
                        {b.channel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SellerAnalytics;
