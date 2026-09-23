import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { mockStore } from "../data/mockStore";

const Navbar = ({ activePage = "home", onNavigate, cartCount = 0, wishlistCount = 0, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(mockStore.getCurrentUser());
  const [sellerAlertOpen, setSellerAlertOpen] = useState(false);

  useEffect(() => {
    const update = () => setCurrentUser(mockStore.getCurrentUser());
    const unsubscribe = mockStore.subscribe(update);
    return unsubscribe;
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("shop", { search: searchQuery });
    }
  };

  const handleSellClick = () => {
    if (!currentUser) {
      if (onNavigate) onNavigate("login");
      return;
    }
    if (currentUser.role === "buyer") {
      setSellerAlertOpen(true);
      return;
    }
    if (onNavigate) onNavigate("seller-onboarding");
  };

  const handleLogout = () => {
    mockStore.logoutUser();
    setUserDropdownOpen(false);
    if (onNavigate) onNavigate("home");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Main Navigation Header */}
      <header className="w-full bg-[#fff8f1]/95 backdrop-blur-xl border-b border-[#d7c2bd]/40">
        <div className="h-20 max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo Section */}
          <div
            className="flex items-center justify-center h-full flex-shrink-0 cursor-pointer pt-7"
            onClick={() => onNavigate && onNavigate("home")}
          >
            <Logo onNavigate={onNavigate} />
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6 font-serif text-sm font-semibold text-[#524440]">
            <button
              onClick={() => onNavigate && onNavigate("home")}
              className={`hover:text-[#421b0f] transition-colors ${activePage === "home" ? "text-[#421b0f] font-bold border-b-2 border-[#845333] pb-1" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate && onNavigate("shop")}
              className={`hover:text-[#421b0f] transition-colors ${activePage === "shop" ? "text-[#421b0f] font-bold border-b-2 border-[#845333] pb-1" : ""}`}
            >
              Shop Catalog
            </button>
            
            {/* Sell your craft with restriction */}
            <button
              onClick={handleSellClick}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-bold transition-all ${
                activePage === "seller-onboarding"
                  ? "bg-[#421b0f] text-white"
                  : "bg-[#fcf2e5] text-[#845333] hover:bg-[#ffbe97]/40 border border-[#d7c2bd]"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span>Sell Your Craft</span>
            </button>

            {currentUser?.role === "seller" && (
              <button
                onClick={() => onNavigate && onNavigate("seller-analytics")}
                className={`hover:text-[#421b0f] transition-colors ${activePage === "seller-analytics" ? "text-[#421b0f] font-bold border-b-2 border-[#845333] pb-1" : ""}`}
              >
                Seller Analytics
              </button>
            )}
          </nav>

          {/* Search, Language, Cart & User Account */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center bg-[#ffffff] rounded-full px-3 py-1.5 ring-1 ring-[#84736f]/30 focus-within:ring-[#845333] transition-all w-44 lg:w-52"
            >
              <span className="material-symbols-outlined text-[#84736f] text-[18px] mr-1.5">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crafts..."
                className="w-full bg-transparent text-xs text-[#1f1b13] placeholder:text-[#84736f] focus:outline-none font-sans"
              />
            </form>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full text-[#524440] hover:text-[#421b0f] hover:bg-[#f6ede0] transition-colors"
              aria-label="Shopping Cart"
            >
              <span className="material-symbols-outlined text-[24px]">local_mall</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#845333] text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account / Login Button */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fcf2e5] border border-[#d7c2bd] hover:bg-[#f6ede0] transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#421b0f] text-white text-xs font-sans font-bold flex items-center justify-center">
                    {currentUser.name?.charAt(0) || "U"}
                  </div>
                  <span className="font-sans text-xs font-bold text-[#421b0f] max-w-[90px] truncate hidden sm:inline-block">
                    {currentUser.name?.split(" ")[0]}
                  </span>
                  <span className="text-[10px] font-sans font-bold px-1.5 py-0.5 rounded bg-[#421b0f] text-white uppercase hidden sm:inline-block">
                    {currentUser.role}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#84736f]">expand_more</span>
                </button>

                {/* User Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#d7c2bd] py-2 z-50 font-sans text-xs space-y-1">
                    <div className="px-4 py-2 border-b border-[#f6ede0]">
                      <strong className="block text-[#421b0f] truncate">{currentUser.name}</strong>
                      <span className="text-[#84736f] text-[11px] block truncate">{currentUser.email}</span>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-[#fcf2e5] text-[#845333]">
                        {currentUser.role === "seller" ? "Master Artisan Vendor" : "Conscious Buyer"}
                      </span>
                    </div>

                    {currentUser.role === "seller" ? (
                      <>
                        <button
                          onClick={() => { setUserDropdownOpen(false); onNavigate("seller-analytics"); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#f6ede0] text-[#421b0f] font-semibold flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[16px]">analytics</span>
                          Seller Analytics & Orders
                        </button>
                        <button
                          onClick={() => { setUserDropdownOpen(false); onNavigate("seller-profile"); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#f6ede0] text-[#421b0f] flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[16px]">person</span>
                          Artisan Profile
                        </button>
                        <button
                          onClick={() => { setUserDropdownOpen(false); onNavigate("seller-onboarding"); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#f6ede0] text-[#845333] font-bold flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                          List New Craft
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => { setUserDropdownOpen(false); onNavigate("shop"); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#f6ede0] text-[#421b0f] font-semibold flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[16px]">storefront</span>
                          Explore Handcrafted Catalog
                        </button>
                      </>
                    )}

                    <div className="border-t border-[#f6ede0] pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-700 font-semibold flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[16px]">logout</span>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => onNavigate && onNavigate("login")}
                className="hidden sm:inline-block font-sans text-xs text-[#524440] hover:text-[#421b0f] font-bold px-4 py-2 rounded-full border border-[#d7c2bd] bg-[#fcf2e5] hover:bg-[#f6ede0] transition-colors"
              >
                Sign In / Register
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#421b0f] hover:bg-[#f6ede0]"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#fff8f1] border-b border-[#d7c2bd] px-4 py-4 space-y-2 shadow-lg animate-fadeIn font-sans text-xs">
            <button
              onClick={() => { onNavigate("home"); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-[#421b0f] hover:bg-[#f6ede0]"
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate("shop"); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-[#421b0f] hover:bg-[#f6ede0]"
            >
              Shop Handcrafted Catalog
            </button>
            <button
              onClick={() => { handleSellClick(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-[#845333] hover:bg-[#ffbe97]/40 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              Sell Your Craft (Artisan AI)
            </button>

            {currentUser?.role === "seller" && (
              <button
                onClick={() => { onNavigate("seller-analytics"); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg font-semibold text-[#421b0f] hover:bg-[#f6ede0]"
              >
                Seller Analytics & Orders
              </button>
            )}

            {currentUser ? (
              <button
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg font-semibold text-red-700 hover:bg-red-50"
              >
                Sign Out ({currentUser.name})
              </button>
            ) : (
              <button
                onClick={() => { onNavigate("login"); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg font-semibold text-[#421b0f] hover:bg-[#f6ede0]"
              >
                Sign In / Register
              </button>
            )}
          </div>
        )}
      </header>

      {/* Buyer Access Alert Modal */}
      {sellerAlertOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl animate-pop">
            <span className="text-4xl">⚠️</span>
            <h3 className="font-serif text-xl font-bold text-[#421b0f]">Artisan Vendor Access Only</h3>
            <p className="font-serif text-xs text-[#524440] leading-relaxed">
              You are currently logged in as a <strong>Buyer ({currentUser?.name})</strong>. Only registered Artisan Vendors can list crafts for sale.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setSellerAlertOpen(false);
                  mockStore.loginDemoUser("seller");
                  if (onNavigate) onNavigate("seller-onboarding");
                }}
                className="w-full py-3 rounded-xl bg-[#421b0f] text-white font-sans text-xs font-bold hover:bg-[#845333]"
              >
                Switch to Artisan Vendor Account
              </button>
              <button
                onClick={() => setSellerAlertOpen(false)}
                className="w-full py-2.5 rounded-xl border border-[#d7c2bd] text-[#524440] font-sans text-xs font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
