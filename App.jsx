import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [route, setRoute] = useState(() => {
    return window.location.pathname === "/login" ? "login" : "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname === "/login" ? "login" : "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (newRoute) => {
    setRoute(newRoute);
    const path = newRoute === "login" ? "/login" : "/";
    window.history.pushState({}, "", path);
  };

  if (route === "login") {
    return <Login onNavigate={navigate} />;
  }

  return <Home onNavigate={navigate} />;
}

export default App;
