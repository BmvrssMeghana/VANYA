import React, { useState } from "react";
import { PRODUCTS } from "../data/mockData";

const ProductDetail = ({ product: initialProduct, productId, onNavigate, onAddToCart }) => {
  // Find product from props or id
  const targetId = initialProduct ? initialProduct.id : (productId || 101);
  const product = PRODUCTS.find((p) => p.id === targetId) || PRODUCTS[0];

  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(product);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I am interested in purchasing "${product.name}" (Price: ${product.priceFormatted}) crafted by ${product.artisan} on VANYA.`
  );

  return (
    <div className="w-full bg-[#fff8f1] font-serif text-[#1f1b13] min-h-screen pt-28 pb-20">
      
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#421b0f] text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[#ffbe97]">check_circle</span>
          <span className="font-sans text-xs font-semibold">Added to your Artisan Cart!</span>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs text-[#524440] mb-6">
          <button onClick={() => onNavigate && onNavigate("home")} className="hover:text-[#421b0f]">Home</button>
          <span className="text-[#84736f]">/</span>
          <button onClick={() => onNavigate && onNavigate("shop")} className="hover:text-[#421b0f]">Catalog</button>
          <span className="text-[#84736f]">/</span>
          <span className="text-[#845333] font-semibold">{product.name}</span>
        </nav>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-[#f6ede0] aspect-[4/3] shadow-md border border-[#d7c2bd]/40">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.giVerified && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm font-sans text-xs font-bold text-[#845333] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  GI Certified Authentic Craft
                </div>
              )}
            </div>
          </div>

          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 bg-white p-8 rounded-3xl border border-[#d7c2bd]/40 shadow-sm">
            
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#845333] font-bold">
                {product.categoryName} • {product.location}
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#421b0f] mt-1 leading-snug">
                {product.name}
              </h1>
              <p className="font-sans text-xs text-[#524440] mt-2">
                Preserved & Sold directly by <strong className="text-[#421b0f]">{product.artisan}</strong>
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-[#fcf2e5] border border-[#d7c2bd] flex justify-between items-center">
              <div>
                <span className="font-sans text-[10px] text-[#84736f] uppercase tracking-wider block font-bold">Fair Price Guide</span>
                <span className="font-serif text-3xl font-bold text-[#421b0f]">{product.priceFormatted}</span>
              </div>
              <div className="text-right font-sans text-xs text-[#845333] font-semibold">
                <span>0% Commission</span>
                <span className="block text-[10px] text-[#524440]">100% Direct Remittance</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-serif text-sm text-[#524440] leading-relaxed">
              {product.description}
            </p>

            {/* Specification Matrix */}
            <div className="space-y-2 pt-2 border-t border-[#eae1d4]">
              <h4 className="font-sans text-xs uppercase tracking-wider text-[#845333] font-bold mb-3">Authenticity Specs</h4>
              {Object.entries(product.specs || {}).map(([key, val]) => (
                <div key={key} className="flex justify-between text-xs py-1 border-b border-[#f6ede0]">
                  <span className="text-[#84736f] font-sans">{key}</span>
                  <span className="text-[#1f1b13] font-serif font-semibold">{val}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-2xl bg-[#421b0f] text-white font-sans text-sm font-semibold shadow-md hover:bg-[#845333] transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">local_mall</span>
                Acquire & Add to Cart
              </button>

              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-sans text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-center"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Order Direct on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
