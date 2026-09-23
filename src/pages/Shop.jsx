import React, { useState, useEffect } from "react";
import { mockStore } from "../data/mockStore";
import { CATEGORIES } from "../data/mockData";

const Shop = ({ onNavigate, onSelectProduct, onAddToCart, initialCategory = "all", initialSearch = "" }) => {
  const [products, setProducts] = useState(mockStore.getProducts());
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  useEffect(() => {
    const unsubscribe = mockStore.subscribe(() => {
      setProducts(mockStore.getProducts());
    });
    return unsubscribe;
  }, []);

  // Filtering Logic
  const filteredProducts = products.filter((product) => {
    // Category match
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }

    // Search query match
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = product.name?.toLowerCase().includes(q);
      const matchArtisan = product.artisan?.toLowerCase().includes(q);
      const matchLocation = product.location?.toLowerCase().includes(q);
      const matchDesc = product.description?.toLowerCase().includes(q);

      if (!matchName && !matchArtisan && !matchLocation && !matchDesc) {
        return false;
      }
    }

    // Price range match
    if (selectedPriceRange === "under-1000" && product.price >= 1000) return false;
    if (selectedPriceRange === "1000-3000" && (product.price < 1000 || product.price > 3000)) return false;
    if (selectedPriceRange === "3000-plus" && product.price < 3000) return false;

    // Region match
    if (selectedRegion !== "all" && !product.location?.toLowerCase().includes(selectedRegion.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="w-full bg-[#fff8f1] font-serif text-[#1f1b13] min-h-screen pt-20">

      {/* 1. Header & Breadcrumb */}
      <section className="w-full bg-[#fcf2e5] px-4 md:px-8 lg:px-10 pt-8 pb-10 border-b border-[#d7c2bd]/40">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <h1 className="font-serif text-4xl sm:text-5xl text-[#421b0f] font-bold tracking-tight">
                The Handcrafted Catalog
              </h1>
              <p className="font-serif text-lg text-[#524440] italic">
                “Every object holds a lineage. Explore authenticated handmade treasures directly from regional artisan clusters.”
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[#845333] font-sans text-xs">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-[#d7c2bd]">
                <span className="material-symbols-outlined text-[16px] text-[#845333]">verified_user</span>
                <span>100% Direct Fair Value</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4 w-full bg-white p-2 md:p-3 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-3 border border-[#d7c2bd]">
            <div className="flex items-center gap-2 flex-1 w-full px-2">
              <span className="material-symbols-outlined text-[#845333] text-[24px]">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by craft, artisan name, material (Terracotta, Kalamkari, Brass)..."
                className="w-full bg-transparent font-serif text-sm text-[#1f1b13] placeholder:text-[#84736f] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button
                onClick={() => setSearchQuery("")}
                className="px-3 py-1 bg-[#f6ede0] rounded-full font-sans text-xs text-[#524440] hover:bg-[#eae1d4]"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="sticky top-20 z-40 bg-[#fff8f1]/95 backdrop-blur-md px-4 md:px-8 lg:px-12 py-4 border-b border-[#d7c2bd]/40">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            {/* Category Chips */}
            <div className="flex items-center justify-center gap-3 overflow-x-auto pb-1 scrollbar-none min-w-0 flex-1">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-5 py-2.5 rounded-full font-sans text-sm font-semibold flex-shrink-0 transition-all ${
                  selectedCategory === "all" ? "bg-[#421b0f] text-white shadow-sm" : "bg-[#f6ede0] text-[#1f1b13] hover:bg-[#eae1d4]"
                }`}
              >
                All Crafts ({products.length})
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-sans text-sm font-semibold flex-shrink-0 transition-all ${
                    selectedCategory === cat.id ? "bg-[#421b0f] text-white shadow-sm" : "bg-[#f6ede0] text-[#1f1b13] hover:bg-[#eae1d4]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Region + Price Filters */}
            <div className="flex items-center justify-center lg:justify-end gap-3 lg:ml-auto flex-shrink-0">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-[#fcf2e5] hover:bg-[#f6ede0] text-[#1f1b13] font-sans text-sm font-semibold px-4 py-2.5 rounded-full border border-[#d7c2bd] focus:outline-none cursor-pointer"
              >
                <option value="all">Region: All India</option>
                <option value="Rajasthan">Rajasthan (Jaipur)</option>
                <option value="Telangana">Telangana (Nizamabad)</option>
                <option value="Andhra Pradesh">Andhra Pradesh (Srikakulam)</option>
                <option value="Karnataka">Karnataka (Channapatna)</option>
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-[#fcf2e5] hover:bg-[#f6ede0] text-[#1f1b13] font-sans text-sm font-semibold px-4 py-2.5 rounded-full border border-[#d7c2bd] focus:outline-none cursor-pointer"
              >
                <option value="all">Price: All Fair Ranges</option>
                <option value="under-1000">Under ₹1,000</option>
                <option value="1000-3000">₹1,000 – ₹3,000</option>
                <option value="3000-plus">₹3,000+</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#d7c2bd] p-8">
            <span className="material-symbols-outlined text-4xl text-[#845333] mb-2">search_off</span>
            <h3 className="font-serif text-2xl font-bold text-[#421b0f]">No Masterpieces Found</h3>
            <p className="font-serif text-sm text-[#524440] mt-1">Try clearing your filters or searching for different artisan keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setSelectedPriceRange("all");
                setSelectedRegion("all");
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#421b0f] text-white font-sans text-xs font-semibold hover:bg-[#845333]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between border border-[#d7c2bd]/40"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-[#f6ede0]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md font-sans text-[10px] uppercase font-bold text-[#845333]">
                      {product.categoryName}
                    </span>
                    {product.agentData && (
                      <span className="px-2 py-0.5 rounded-full bg-[#2E7D32] text-white font-sans text-[9px] font-bold">
                        🤖 AI Agent Published
                      </span>
                    )}
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#524440] hover:text-[#421b0f]">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>

                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() =>
                        onSelectProduct
                          ? onSelectProduct(product)
                          : onNavigate("product", { id: product.id })
                      }
                      className="w-full py-2.5 rounded-xl bg-[#421b0f] text-white font-sans text-xs font-semibold shadow-md hover:bg-[#845333] transition-colors flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      View Provenance & Buy
                    </button>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#524440] font-sans text-xs pb-1">
                      <span>Crafted by {product.artisan}</span>
                      <span className="text-[#845333] font-medium">• {product.location}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#421b0f] group-hover:text-[#845333] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="font-serif text-xs text-[#524440] line-clamp-2 mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-end justify-between border-t border-[#eae1d4]">
                    <div>
                      <span className="font-serif text-lg text-[#421b0f] font-bold">
                        {product.priceFormatted}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onAddToCart) onAddToCart(product);
                          else mockStore.addToCart(product);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#845333] text-white font-sans text-xs font-semibold hover:bg-[#421b0f] flex items-center gap-1"
                        title="Add to Cart"
                      >
                        <span className="material-symbols-outlined text-[14px]">local_mall</span>
                        <span>Add</span>
                      </button>
                      <button
                        onClick={() =>
                          onSelectProduct
                            ? onSelectProduct(product)
                            : onNavigate("product", { id: product.id })
                        }
                        className="px-3 py-1.5 rounded-lg bg-[#421b0f] text-white font-sans text-xs font-semibold hover:bg-[#845333]"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Shop;