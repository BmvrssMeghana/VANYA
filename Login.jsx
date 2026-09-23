import React, { useState } from "react";
import "./Login.css";

const Login = ({ onNavigate }) => {
    // =========================================================
    // CHANGE THIS URL TO YOUR BACKGROUND IMAGE
    // =========================================================
    const BACKGROUND_IMAGE =
        "/Mood Board.png";

    // Buyer / Seller
    const [role, setRole] = useState("buyer");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            role,
            email,
            password,
        });

        // Connect your authentication API here
    };

    const isBuyer = role === "buyer";

    return (
        <div
            className="login-page"
            style={{
                backgroundImage: `
          linear-gradient(
            rgba(93, 48, 35, 0.72),
            rgba(93, 48, 35, 0.72)
          ),
          url("${BACKGROUND_IMAGE}")
        `,
            }}
        >



            <div className="login-card">

                {/* Logo */}
                <div className="card-logo" style={{ cursor: "pointer" }} onClick={() => onNavigate && onNavigate("home")}>
                    <img
                        src={"/public/Logo.png"}
                        className="small-logo-mark"
                        alt="Vanya Logo"
                    />
                </div>

                {/* Heading */}
                <h1>
                    {isBuyer ? "Welcome back!" : "Welcome back!"}
                </h1>

                <p className="login-subtitle">
                    {isBuyer
                        ? "Discover something made with hands and heart."
                        : "Turn your craft into a story the world can discover."}
                </p>

                {/* =================================================
            BUYER / SELLER TOGGLE
        ================================================= */}
                <div className="role-switch">

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
                        Vendor
                    </button>

                </div>

                {/* =================================================
            LOGIN FORM
        ================================================= */}
                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Email or Phone</label>

                        <input
                            type="text"
                            placeholder={
                                isBuyer
                                    ? "Enter your email or phone"
                                    : "Enter your artisan account"
                            }
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="forgot-password">
                        <button type="button">
                            Forgot password?
                        </button>
                    </div>
                </form>


                {/* =================================================
            GOOGLE LOGIN
        ================================================= */}
                <button className="google-btn" type="button">
                    <span className="google-icon">G</span>
                    Continue with Google
                </button>

                {/* =================================================
            SIGNUP
        ================================================= */}
                <p className="signup-text">
                    {isBuyer
                        ? "New to VANYA?"
                        : "Ready to share your craft?"}

                    <button type="button">
                        Create an account
                    </button>
                </p>

            </div>
        </div>
    );
};

export default Login;