import React from "react";
import Logo from "../components/Logo";
import { CATEGORIES, PRODUCTS } from "../data/mockData";
import { mockStore } from "../data/mockStore";

const Home = ({ onNavigate, onSelectProduct }) => {
  return (
    <div className="w-full bg-[#fff8f1] font-serif text-[#1f1b13] antialiased">
      <main class="w-full pt-28 bg-[#421b0f]">
        <div class="flex flex-col w-full overflow-hidden">

          {/* 1. HERO SECTION */}
          <section class="relative px-4 md:px-8 lg:px-12 pt-5 pb-10 overflow-hidden">
            <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Text Composition (7 cols) */}
              <div class="lg:col-span-7 flex flex-col items-start gap-6 z-10">

                {/* Headline */}
                <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#D9B49D] tracking-tight leading-[1.08] max-w-2xl font-bold">
                  Honor the Living Hands that Shape <span class="text-[#F2E9DC] italic font-normal">Timeless Traditions</span>
                </h1>

                {/* Editorial Subtitle */}
                <p class="font-serif text-lg text-[#D9B49D] max-w-xl leading-relaxed">
                  A mindful marketplace connecting generational Indian master artisans directly with conscious patrons. Photographed, priced fairly, and presented globally through autonomous artisan AI agents.
                </p>

                {/* CTAs & Micro-Proof */}
                <div class="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                  <button
                    onClick={() => onNavigate && onNavigate("shop")}
                    class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#895737] text-white font-sans text-sm font-semibold shadow-md hover:bg-[#845333] transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Explore Crafts</span>
                    <span class="material-symbols-outlined text-[18px]">east</span>
                  </button>

                  <button
                    onClick={() => {
                      const user = mockStore.getCurrentUser();
                      if (!user) {
                        if (onNavigate) onNavigate("login");
                      } else if (user.role === "buyer") {
                        alert("You are logged in as a Buyer. Please switch to an Artisan Vendor account to sell crafts.");
                        mockStore.loginDemoUser("seller");
                        if (onNavigate) onNavigate("seller-onboarding");
                      } else {
                        if (onNavigate) onNavigate("seller-onboarding");
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#f6ede0] text-[#421b0f] font-sans text-sm font-semibold shadow-sm hover:bg-[#eae1d4] transition-all border border-[#d7c2bd]"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#845333]">photo_camera</span>
                    <span>Sell Your Craft</span>
                  </button>
                </div>

                {/* Trust Metric Strip */}
                <div class="flex items-center gap-8 pt-4">
                  <div class="flex flex-col">
                    <span class="font-serif text-2xl text-[#D9B49D] font-bold">10,400+</span>
                    <span class="font-sans text-[10px] text-[#D9B49D] uppercase tracking-wider font-semibold">Generational Masters</span>
                  </div>
                  <div class="w-px h-8 bg-[#d7c2bd]"></div>
                  <div class="flex flex-col">
                    <span class="font-serif text-2xl text-[#D9B49D] font-bold">100%</span>
                    <span class="font-sans text-[10px] text-[#D9B49D] uppercase tracking-wider font-semibold">Direct Payouts</span>
                  </div>
                  <div class="w-px h-8 bg-[#d7c2bd]"></div>
                  <div class="flex flex-col">
                    <span class="font-serif text-2xl text-[#D9B49D] font-bold">28 States</span>
                    <span class="font-sans text-[10px] text-[#D9B49D] uppercase tracking-wider font-semibold">GI Certified Crafts</span>
                  </div>
                </div>

              </div>

              {/* Asymmetrical Visual Mosaic (5 cols) */}
              <div class="lg:col-span-5 relative w-full pt-4 lg:pt-0">
                <div class="relative grid grid-cols-12 gap-4 items-end">

                  {/* Card 1: Handcrafted Terracotta Urn */}
                  <div class="col-span-7 relative group rounded-3xl overflow-hidden shadow-xl bg-[#f6ede0]">
                    <div class="aspect-[3/4] w-full overflow-hidden">
                      <img
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        alt="Terracotta Urn"
                        src="https://i.pinimg.com/736x/81/05/88/8105887c3bc6621e71d02a6092e28803.jpg"
                      />
                    </div>

                  </div>

                  {/* Stacked Cards */}
                  <div class="col-span-5 flex flex-col gap-4">
                    <div class="relative rounded-2xl overflow-hidden shadow-md bg-[#f6ede0] group">
                      <div class="aspect-square w-full overflow-hidden">
                        <img
                          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          alt="Embroidery"
                          src="https://i.pinimg.com/1200x/99/02/37/990237e27d1ab02f2919677fc485866e.jpg"
                        />
                      </div>
                    </div>

                    <div class="relative rounded-2xl overflow-hidden shadow-md bg-[#f6ede0] group">
                      <div class="aspect-[4/3] w-full overflow-hidden">
                        <img
                          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          alt="Pottery"
                          src="https://i.pinimg.com/1200x/9b/f4/0c/9bf40c7d324f1c483ad2d9286240d4f1.jpg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Pill Badges */}
                  <div class="absolute -bottom-4 left-4 z-20 px-4 py-2.5 rounded-2xl bg-white text-[#421b0f] shadow-xl flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#845333]"></span>
                    <span class="font-sans text-xs font-semibold">100% Direct to Artisan</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 2. CATEGORY DISCOVERY (4 Large Cards) */}
          <section class="px-4 md:px-8 lg:px-10 py-8 bg-[#fcf2e5]">
            <div class="max-w-[1440px] mx-auto flex flex-col gap-8">
              <div class="flex flex-col md:flex-row md:items-end justify-between gap-3">
                <button
                  onClick={() => onNavigate && onNavigate("shop")}
                  class="inline-flex items-center gap-1 font-sans text-sm text-[#421b0f] font-bold hover:text-[#845333] transition-colors"
                >
                  <h2 class="font-serif text-3xl md:text-4xl text-[#421b0f] font-bold">Shop all</h2>
                  <span class="material-symbols-outlined text-[40px]">east</span>
                </button>
              </div>

              {/* 4 Category Cards Grid */}
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map((cat, idx) => (
                  <article
                    key={cat.id}
                    onClick={() => onNavigate && onNavigate("shop", { category: cat.id })}
                    class="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    <div class="relative aspect-[4/5] overflow-hidden bg-[#f6ede0]">
                      <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={cat.image} alt={cat.title} />
                      <div class="absolute inset-0 bg-gradient-to-t from-[#421b0f]/80 via-transparent to-transparent"></div>
                      <div class="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[#421b0f] font-sans text-xs font-semibold">
                        {cat.count}+ Heirlooms
                      </div>
                      <div class="absolute bottom-4 left-4 right-4 text-white">
                        <span class="font-sans text-xs uppercase tracking-wider text-[#ffbe97] font-semibold">{cat.tags}</span>
                        <h3 class="font-serif text-2xl font-bold text-white">{cat.title}</h3>
                      </div>
                    </div>
                    <div class="p-5 flex flex-col justify-between flex-1 gap-4">
                      <p class="font-serif text-sm text-[#524440] leading-snug">{cat.description}</p>
                      <div class="pt-2 flex items-center justify-between border-t border-[#eae1d4]">
                        <span class="font-sans text-s text-[#845333] font-bold">0{idx + 1}</span>
                        <span class="inline-flex items-center gap-1 font-sans text-s text-[#421b0f] font-bold group-hover:text-[#845333] transition-colors">
                          <span>Explore</span>
                          <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>


          {/* 4. FEATURED PRODUCTS GRID */}
          <section class="px-4 md:px-8 lg:px-12 py-10 bg-[#fcf2e5]">
            <div class="max-w-[1440px] mx-auto flex flex-col gap-8">
              <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 class="font-serif text-3xl md:text-4xl text-[#421b0f] font-bold">Featured Masterpieces</h2>
                  <p class="font-serif text-base text-[#524440]">Direct from certified generational lineages.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS.map((product) => (
                  <article
                    key={product.id}
                    class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div class="relative overflow-hidden aspect-square bg-[#f6ede0]">
                      <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.image} alt={product.name} />
                      <button class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#524440] hover:text-[#421b0f]">
                        <span class="material-symbols-outlined text-[18px]">favorite</span>
                      </button>
                      <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md flex items-center gap-1 text-[#845333] font-sans text-xs font-semibold">
                        <span class="material-symbols-outlined text-[14px]">verified</span>
                        <span>Verified Artisan</span>
                      </div>
                    </div>

                    <div class="p-5 flex flex-col flex-1 justify-between gap-4">
                      <div>
                        <span class="font-sans text-xs text-[#524440] block mb-1">{product.artisan} • {product.location}</span>
                        <h3 class="font-serif text-xl font-bold text-[#421b0f] group-hover:text-[#845333] transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      <div class="flex items-center justify-between pt-2 border-t border-[#eae1d4]">
                        <div>
                          <div class="font-serif text-xl text-[#421b0f] font-bold">{product.priceFormatted}</div>
                        </div>
                        <button
                          onClick={() => onSelectProduct ? onSelectProduct(product) : onNavigate("product", { id: product.id })}
                          class="px-4 py-2 rounded-xl bg-[#421b0f] text-white font-sans text-s font-semibold hover:bg-[#845333] transition-colors"
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. SELLER CTA */}
          <section class="mx-4 md:mx-8 lg:mx-12 my-12 p-8 md:p-12 bg-[#421b0f] text-white rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="space-y-2 max-w-xl">
              <span class="font-sans text-xs text-[#ffbe97] uppercase tracking-widest font-semibold">ARE YOU AN ARTISAN?</span>
              <h2 class="font-serif text-3xl md:text-4xl font-bold">Your Craft Deserves to Be Discovered.</h2>
              <p class="font-serif text-sm text-[#ffdbd1]">Take a photo. Tell your story. Let VANYA's 3 AI Agents handle the rest.</p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("seller-onboarding")}
              class="px-8 py-3.5 rounded-full bg-white text-[#421b0f] font-sans text-sm font-bold shadow-lg hover:bg-[#ffbe97] transition-all transform hover:scale-105 flex-shrink-0"
            >
              Start Selling Your Craft →
            </button>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Home;
