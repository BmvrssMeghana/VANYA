import React, { useState, useEffect } from "react";
import { mockStore } from "../data/mockStore";

const SellerProfile = ({ onNavigate }) => {
  const [currentUser, setCurrentUser] = useState(mockStore.getCurrentUser());
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const update = () => {
      const user = mockStore.getCurrentUser();
      setCurrentUser(user);
      const artisanName = user?.name || "Ramprasad Prajapat";
      setProducts(mockStore.getSellerProducts(artisanName));
    };

    update();
    const unsubscribe = mockStore.subscribe(update);
    return unsubscribe;
  }, []);

  const name = currentUser?.name || "Ramprasad Prajapat";
  const location = currentUser?.location || "Jaipur, Rajasthan";
  const craft = currentUser?.craft || "Jaipur Blue Pottery";

  return (
    <div className="w-full bg-[#fff8f1] font-serif text-[#1f1b13] min-h-screen pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 space-y-8">
        
        {/* Header Navigation Tabs */}
        <div className="flex gap-6 border-b border-[#d7c2bd] pb-3">
          <button onClick={() => onNavigate && onNavigate("seller-profile")} className="font-serif font-bold text-[#845333] border-b-2 border-[#845333] pb-3 -mb-3.5 text-base">
            Artisan Profile & Listed Crafts
          </button>
          <button onClick={() => onNavigate && onNavigate("seller-analytics")} className="font-serif text-[#524440] hover:text-[#421b0f] text-base">
            Business Analytics & AI Growth
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-r from-[#421b0f] to-[#845333] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src={currentUser?.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-md"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-serif text-3xl font-bold">{name}</h1>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-sans font-bold">✓ Master Artisan (GI Verified)</span>
              </div>
              <p className="font-serif text-sm text-[#ffdbd1]">{craft} • Heritage Craftsperson</p>
              <p className="font-sans text-xs text-[#ffbe97]">📍 {location} • 4.9★ Rating (84 Reviews)</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate("seller-onboarding")}
            className="px-6 py-3.5 rounded-full bg-[#ffbe97] text-[#7a4b2c] font-sans text-xs font-bold shadow-md hover:bg-white transition-all flex-shrink-0"
          >
            + Sell a New Craft (AI Camera)
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-xs text-[#84736f] font-semibold">Active Listed Crafts</span>
            <div className="font-serif text-3xl font-bold text-[#421b0f] mt-1">{products.length}</div>
            <span className="font-sans text-[11px] text-[#2E7D32]">🟢 Reflected Live in Catalog</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-xs text-[#84736f] font-semibold">Craft Impressions</span>
            <div className="font-serif text-3xl font-bold text-[#421b0f] mt-1">4,820</div>
            <span className="font-sans text-[11px] text-[#2E7D32]">↑ 34% from WhatsApp</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-xs text-[#84736f] font-semibold">WhatsApp Inquiries</span>
            <div className="font-serif text-3xl font-bold text-[#845333] mt-1">186</div>
            <span className="font-sans text-[11px] text-[#845333]">100% Direct to Artisan</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-xs text-[#84736f] font-semibold">Direct Revenue</span>
            <div className="font-serif text-3xl font-bold text-[#421b0f] mt-1">₹ 1,42,800</div>
            <span className="font-sans text-[11px] text-[#2E7D32]">0% Commission Deducted</span>
          </div>
        </div>

        {/* Products Management Grid */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#421b0f]">My Listed Crafts ({products.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((prod) => (
              <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-[#d7c2bd] shadow-sm flex flex-col justify-between">
                <div className="relative aspect-video bg-[#f6ede0]">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-sans text-[10px] font-bold">
                    🟢 Live Store
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 gap-3">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#421b0f]">{prod.name}</h3>
                    <div className="font-serif text-lg font-bold text-[#845333] mt-1">{prod.priceFormatted || `₹${prod.price}`}</div>
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-[#eae1d4]">
                    <button onClick={() => onNavigate && onNavigate("product", { id: prod.id })} className="flex-1 py-1.5 rounded-lg border border-[#d7c2bd] font-sans text-xs font-semibold">View Live</button>
                    <button onClick={() => onNavigate && onNavigate("seller-onboarding")} className="flex-1 py-1.5 rounded-lg bg-[#421b0f] text-white font-sans text-xs font-semibold">Edit Listing</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SellerProfile;
