import React from "react";

const Logo = ({ onNavigate, className = "" }) => {
  return (
    <div 
      className={`card-logo ${className}`} 
      style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }} 
      onClick={() => onNavigate && onNavigate("home")}
    >
      <img
        src={"/Logo.png"}
        className="small-logo-mark"
        alt="Vanya Logo"
        style={{ height: "40px", width: "auto", objectFit: "contain" }}
      />
    </div>
  );
};

export default Logo;
