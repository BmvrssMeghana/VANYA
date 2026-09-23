import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import SellerOnboarding from "./pages/SellerOnboarding";
import SellerProfile from "./pages/SellerProfile";
import SellerAnalytics from "./pages/SellerAnalytics";
import Admin from "./pages/Admin";
import { mockStore } from "./data/mockStore";

function App() {
  const [route, setRoute] = useState(() => {
    const path = window.location.pathname;
    if (path === "/login") return "login";
    if (path === "/shop") return "shop";
    if (path === "/admin") return "admin";
    if (path === "/seller" || path === "/seller-onboarding" || path === "/sell") return "seller-onboarding";
    if (path === "/seller/profile") return "seller-profile";
    if (path === "/seller/analytics") return "seller-analytics";
    return "home";
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [navParams, setNavParams] = useState({});
  const [cart, setCart] = useState(mockStore.getCart());
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const updateCart = () => setCart(mockStore.getCart());
    updateCart();
    const unsubscribe = mockStore.subscribe(updateCart);
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/login") setRoute("login");
      else if (path === "/shop") setRoute("shop");
      else if (path === "/admin") setRoute("admin");
      else if (path === "/seller" || path === "/seller-onboarding" || path === "/sell") setRoute("seller-onboarding");
      else if (path === "/seller/profile") setRoute("seller-profile");
      else if (path === "/seller/analytics") setRoute("seller-analytics");
      else setRoute("home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (newRoute, params = {}) => {
    setRoute(newRoute);
    setNavParams(params);
    let path = "/";
    if (newRoute === "login") path = "/login";
    else if (newRoute === "shop") path = "/shop";
    else if (newRoute === "admin") path = "/admin";
    else if (newRoute === "seller-onboarding") path = "/seller";
    else if (newRoute === "seller-profile") path = "/seller/profile";
    else if (newRoute === "seller-analytics") path = "/seller/analytics";
    else if (newRoute === "product") path = `/product?id=${params.id || 101}`;

    window.history.pushState({}, "", path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    navigate("product", { id: product.id });
  };

  const handleAddToCart = (product) => {
    mockStore.addToCart(product);
    setCartOpen(true);
  };

  // Full Screen Standalone Pages
  if (route === "login") {
    return <Login onNavigate={navigate} />;
  }

  if (route === "admin") {
    return <Admin onNavigate={navigate} />;
  }

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fff8f1]">
      <Navbar
        activePage={route}
        onNavigate={navigate}
        cartCount={cartItemsCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
      />

      <div className="flex-grow">
        {route === "home" && (
          <Home onNavigate={navigate} onSelectProduct={handleSelectProduct} />
        )}

        {route === "shop" && (
          <Shop
            onNavigate={navigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            initialCategory={navParams.category || "all"}
            initialSearch={navParams.search || ""}
          />
        )}

        {route === "product" && (
          <ProductDetail
            product={selectedProduct}
            productId={navParams.id}
            onNavigate={navigate}
            onAddToCart={handleAddToCart}
          />
        )}

        {route === "seller-onboarding" && (
          <SellerOnboarding onNavigate={navigate} />
        )}

        {route === "seller-profile" && (
          <SellerProfile onNavigate={navigate} />
        )}

        {route === "seller-analytics" && (
          <SellerAnalytics onNavigate={navigate} />
        )}
      </div>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onNavigate={navigate}
      />

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
