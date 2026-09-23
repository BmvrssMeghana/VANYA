import React, { useState } from "react";
import { mockStore } from "../data/mockStore";
import "../../Login.css";

const Login = ({ onNavigate }) => {
  const BACKGROUND_IMAGE = "/Mood Board.png";

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [role, setRole] = useState("buyer"); // "buyer" | "seller"

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [craft, setCraft] = useState("");

  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const isBuyer = role === "buyer";

  // Handle Quick Demo Login
  const handleQuickDemoLogin = (demoRole) => {
    const user = mockStore.loginDemoUser(demoRole);
    setSuccessMsg(`Welcome, ${user.name}! Logged in as ${demoRole === "seller" ? "Artisan Vendor" : "Buyer"}.`);
    setTimeout(() => {
      if (demoRole === "seller") {
        if (onNavigate) onNavigate("seller-analytics");
      } else {
        if (onNavigate) onNavigate("shop");
      }
    }, 800);
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg("Please provide your email and password.");
      return;
    }

    if (mode === "signup" && !name) {
      setErrorMsg("Please provide your full name.");
      return;
    }

    let userObj;
    if (mode === "signup") {
      userObj = {
        id: `${role}_${Date.now()}`,
        name,
        email,
        role,
        location: location || (role === "seller" ? "Jaipur, Rajasthan" : "Mumbai, India"),
        craft: craft || (role === "seller" ? "Handcrafted Heritage" : undefined),
        rating: role === "seller" ? 5.0 : undefined,
        giVerified: role === "seller"
      };
    } else {
      userObj = {
        id: `${role}_${Date.now()}`,
        name: email.split("@")[0].toUpperCase() || (isBuyer ? "Conscious Buyer" : "Master Artisan"),
        email,
        role,
        location: isBuyer ? "Hyderabad, Telangana" : "Jaipur, Rajasthan",
        craft: isBuyer ? undefined : "Jaipur Blue Pottery",
        rating: isBuyer ? undefined : 4.9,
        giVerified: !isBuyer
      };
    }

    mockStore.setCurrentUser(userObj);
    setSuccessMsg(`Welcome back, ${userObj.name}! Redirecting...`);

    setTimeout(() => {
      if (role === "seller") {
        if (onNavigate) onNavigate("seller-analytics");
      } else {
        if (onNavigate) onNavigate("shop");
      }
    }, 800);
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(93, 48, 35, 0.76),
            rgba(93, 48, 35, 0.76)
          ),
          url("${BACKGROUND_IMAGE}")
        `
      }}
    >
      <div className="login-card" style={{ maxWidth: "480px" }}>
        
        {/* Card Logo */}
        <div className="card-logo" style={{ cursor: "pointer" }} onClick={() => onNavigate && onNavigate("home")}>
          <img src="/Logo.png" className="small-logo-mark" alt="Vanya Logo" />
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
          {mode === "login" ? (isBuyer ? "Welcome back, Buyer!" : "Welcome back, Artisan!") : "Create VANYA Account"}
        </h1>

        <p className="login-subtitle" style={{ fontSize: "14px", marginTop: "6px", marginBottom: "20px" }}>
          {isBuyer
            ? "Discover authentic handmade craft lineage directly from generational artisans."
            : "Turn your craft into a global story with autonomous AI agents."}
        </p>

        {/* ROLE SWITCH TOGGLE */}
        <div className="role-switch" style={{ marginBottom: "20px" }}>
          <button
            className={isBuyer ? "active" : ""}
            onClick={() => setRole("buyer")}
            type="button"
          >
            Buyer
          </button>

          <button
            className={!isBuyer ? "active" : ""}
            onClick={() => setRole("seller")}
            type="button"
          >
            Artisan Vendor
          </button>
        </div>

        {/* QUICK DEMO LOGIN BUTTONS */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button
            type="button"
            onClick={() => handleQuickDemoLogin("buyer")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "12px",
              border: "1px solid #d7c2bd",
              background: isBuyer ? "#5d3023" : "#ffffff",
              color: isBuyer ? "#ffffff" : "#5d3023",
              fontSize: "12px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            ⚡ Demo Login (Buyer)
          </button>
          <button
            type="button"
            onClick={() => handleQuickDemoLogin("seller")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "12px",
              border: "1px solid #d7c2bd",
              background: !isBuyer ? "#5d3023" : "#ffffff",
              color: !isBuyer ? "#ffffff" : "#5d3023",
              fontSize: "12px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            ⚡ Demo Login (Vendor)
          </button>
        </div>

        {errorMsg && (
          <div style={{ background: "#FFEBEE", color: "#C62828", padding: "10px", borderRadius: "10px", fontSize: "12px", marginBottom: "15px", fontWeight: "600" }}>
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div style={{ background: "#E8F5E9", color: "#2E7D32", padding: "10px", borderRadius: "10px", fontSize: "12px", marginBottom: "15px", fontWeight: "600" }}>
            ✓ {successMsg}
          </div>
        )}

        {/* LOGIN / SIGNUP FORM */}
        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          {mode === "signup" && (
            <div className="input-group">
              <label>{isBuyer ? "Full Name" : "Artisan / Craftsperson Name"}</label>
              <input
                type="text"
                placeholder={isBuyer ? "e.g. Aarav Sharma" : "e.g. Ramprasad Prajapat"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="input-group">
            <label>Email Address or Phone</label>
            <input
              type="text"
              placeholder={isBuyer ? "e.g. buyer@vanya.demo" : "e.g. artisan@vanya.demo"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {mode === "signup" && (
            <div className="input-group">
              <label>{isBuyer ? "Delivery Location / City" : "Artisan Cluster / Location"}</label>
              <input
                type="text"
                placeholder={isBuyer ? "e.g. Hyderabad, Telangana" : "e.g. Jaipur, Rajasthan"}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          )}

          {mode === "signup" && !isBuyer && (
            <div className="input-group">
              <label>Specialized Craft Lineage</label>
              <input
                type="text"
                placeholder="e.g. Jaipur Blue Pottery, Kalamkari Silk, Terracotta"
                value={craft}
                onChange={(e) => setCraft(e.target.value)}
              />
            </div>
          )}

          <button className="continue-btn" type="submit" style={{ marginTop: "15px" }}>
            {mode === "login" ? `Continue as ${isBuyer ? "Buyer" : "Artisan Vendor"}` : `Create ${isBuyer ? "Buyer" : "Vendor"} Account`}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="divider" style={{ margin: "20px 0" }}>
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        {/* GOOGLE LOGIN */}
        <button className="google-btn" type="button" onClick={() => handleQuickDemoLogin(role)}>
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        {/* SIGNUP / LOGIN MODE TOGGLE */}
        <p className="signup-text" style={{ marginTop: "20px" }}>
          {mode === "login"
            ? (isBuyer ? "New to VANYA?" : "New Artisan Vendor?")
            : "Already have an account?"}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setErrorMsg(null);
            }}
            style={{ fontWeight: "700", marginLeft: "6px" }}
          >
            {mode === "login" ? "Create an account" : "Sign In instead"}
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;
