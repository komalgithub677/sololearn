import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle login with axios
  const handleLogin = async (email: string, password: string): Promise<void> => {
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      const { userId, user } = response.data;
      localStorage.setItem("userId", userId);
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign-in failed!");
    } finally {
      setIsLoading(false);
    }
  };

  // Form submission handler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  // Handle guest login
  const handleGuestLogin = () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ name: "Guest", email: "guest@example.com" })
    );
    navigate("/hero");
  };

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: auto;
          }
          .signUpcontainer {
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center; /* Ensure vertical centering */
            background: linear-gradient(to bottom right, #0f172a, #1e3a8a, #1e40af);
            padding: 1rem;
            box-sizing: border-box; /* Prevent padding from adding to width/height */
          }
          .card {
            background: rgba(30, 58, 138, 0.3);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            padding: 2rem;
            width: 100%;
            max-width: 400px;
            text-align: center;
          }
          .title {
            color: white;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .input-group {
            text-align: left;
            margin-bottom: 1rem;
          }
          .input-group label {
            color: #ccc;
            font-weight: 500;
            display: block;
            margin-bottom: 0.3rem;
          }
          .input-group input {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
          }
          .input-group input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 5px #3b82f6;
          }
          .password-group {
            position: relative;
          }
          .toggle-password {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-10%); /* Adjusted to center vertically */
            background: none;
            border: none;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.2rem;
          }
          .signup-btn {
            width: 100%;
            padding: 0.8rem;
            background: #2563eb;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 1rem;
          }
          .signup-btn:hover {
            background: #1e40af;
          }
          .divider {
            position: relative;
            text-align: center;
            margin: 1.5rem 0;
          }
          .divider span {
            background: #1e3a8a;
            padding: 0 10px;
            color: white;
            font-size: 0.9rem;
            position: relative;
            z-index: 1;
          }
          .divider::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            z-index: 0;
          }
          .social-btn {
            width: 100%;
            padding: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            margin-bottom: 0.5rem;
            transition: 0.2s;
          }
          .social-btn .icon {
            margin-right: 10px;
            font-size: 1.2rem;
          }
          .google {
            background: white;
            color: #333;
          }
          .google:hover {
            background: #f3f4f6;
          }
          .apple {
            background: black;
            color: white;
          }
          .apple:hover {
            background: #222;
          }
          .footer-text {
            color: white;
            font-size: 0.9rem;
            margin-top: 1rem;
          }
          .footer-text a {
            color: #60a5fa;
          }
          .footer-text a:hover {
            color: #3b82f6;
          }
        `}
      </style>
      <div className="signUpcontainer">
        {/* Login Card */}
        <div className="card">
          <h1 className="title">Log In</h1>

          {error && (
            <p className="text-red-400 text-center font-poppins text-base mb-4">{error}</p>
          )}

          <form onSubmit={submitHandler} className="flex flex-col space-y-4">
            <div className="input-group">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group password-group">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <button
              type="submit"
              className={`signup-btn ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Logging In..." : "Log in"}
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={handleGuestLogin}
              className="social-btn google"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="icon w-5 h-5"
              />
              Continue with Google
            </button>
            <button
              onClick={handleGuestLogin}
              className="social-btn apple"
            >
              <svg className="icon w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.48 1.28 0 2.35.85 3.27.81.99-.04 1.73-.81 3.04-.81 1.32 0 2.63.98 3.56 2.66-.14.09-2.13 1.29-2.12 3.83 0 2.42 1.56 3.22 2.24 3.36zm-3.75-14.39c-.68.84-1.8 1.56-2.96 1.47-.16-1.18.54-2.34 1.22-3.06.78-.83 2.04-1.47 3.08-1.47.04 1.18-.34 2.25-1.34 3.06z"/>
              </svg>
              Continue with Apple
            </button>
          </div>

          <div className="footer-text">
            Already have an account?{" "}
            <a href="/SignUp">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;