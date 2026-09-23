import React from "react";
import Logo from "./Logo";

const Footer = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#F2E9DC] text-[#895737] pt-16 pb-8 px-4 md:px-8 border-t border-[#895737]/30">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#f2e9dc]/10">

        {/* Brand Column */}
        <div className="space-y-4">
          <Logo onNavigate={onNavigate} />
          <p className="font-serif text-sm text-[#895737] leading-relaxed max-w-sm">
            VANYA connects generational Indian master artisans directly to conscious patrons worldwide using 3 autonomous AI agents.
          </p>
        </div>

        {/* Explore Links */}
        <div className="space-y-3">
          <h4 className="font-serif text-base font-bold text-[#895737] uppercase tracking-wider">Explore Crafts</h4>
          <ul className="space-y-2 text-sm text-[#895737] font-sans">
            <li><button onClick={() => onNavigate && onNavigate("shop")} className="hover:text-white transition-colors">Artisan Catalog</button></li>
            <li><button onClick={() => onNavigate && onNavigate("shop", { category: "kitchen-and-dining" })} className="hover:text-white transition-colors">Kitchen & Dining Pottery</button></li>
            <li><button onClick={() => onNavigate && onNavigate("shop", { category: "clothing-and-apparel" })} className="hover:text-white transition-colors">Kalamkari & Silk Sarees</button></li>
            <li><button onClick={() => onNavigate && onNavigate("shop", { category: "religious-items" })} className="hover:text-white transition-colors">Sacred Brass & Terracotta</button></li>
          </ul>
        </div>

        {/* For Artisans Links */}
        <div className="space-y-3">
          <h4 className="font-serif text-base font-bold text-[#895737] uppercase tracking-wider">For Artisans</h4>
          <ul className="space-y-2 text-sm text-[#895737] font-sans">
            <li><button onClick={() => onNavigate && onNavigate("seller-onboarding")} className="hover:text-white transition-colors font-semibold text-[#895737]">Sell Your Craft (Camera AI)</button></li>
            <li><button onClick={() => onNavigate && onNavigate("seller-profile")} className="hover:text-white transition-colors">Artisan Profile & Products</button></li>
            <li><button onClick={() => onNavigate && onNavigate("seller-analytics")} className="hover:text-white transition-colors">Business Analytics & Insights</button></li>
            <li><button onClick={() => onNavigate && onNavigate("login")} className="hover:text-white transition-colors">Vendor Login</button></li>
          </ul>
        </div>

        {/* Platform Links */}
        <div className="space-y-3">
          <h4 className="font-serif text-base font-bold text-[#895737] uppercase tracking-wider">Platform</h4>
          <ul className="space-y-2 text-sm text-[#895737] font-sans">
            <li><button onClick={() => onNavigate && onNavigate("home")} className="hover:text-white transition-colors">About VANYA AI</button></li>
            <li><button onClick={() => onNavigate && onNavigate("admin")} className="hover:text-white transition-colors text-xs text-[#895737]">Executive Admin (/admin)</button></li>
            <li><span className="text-[#895737] text-xs">Terms of Use • Privacy Policy</span></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1440px] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#895737] font-sans">
        <span>© 2026 VANYA. Empowering Indian Artisans through AI.</span>
        <span className="font-semibold text-[#895737]">English · हिन्दी (Hindi) · తెలుగు (Telugu) · ಕನ್ನಡ (Kannada)</span>
      </div>
    </footer>
  );
};

export default Footer;
