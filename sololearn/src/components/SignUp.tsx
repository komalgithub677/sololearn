import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useGoogleLogin } from "@react-oauth/google";
import Navbar from "./Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Fetch user details using the access token
        const userInfo = await fetch("http://localhost:3000/api/signup", {
          method: "POST",
        });

        const userData = await userInfo.json();

        // Navigate to home page after login
        navigate("/");
      } catch (error) {
        alert("Sign Up Failed");
      }
    },
    onError: () => console.log("Login Failed"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Sent to Backend:", formData);
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(); // Await JSON parsing

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("Navigating to home page...");
        navigate("/", { replace: true }); // Uncomment if navigation is needed
      } else {
        alert(data.message || "Sign-in failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5000/api/signup", { // Corrected URL
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await response.json();

  //     if (response.ok) {
  //       alert("Signup successful! Please log in.");
  //       navigate("/loginmain"); // Redirect to login page
  //     } else {
  //       alert(data.message || "Signup failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
      <>
      <style>
  {`
  body{
    margin-top: -70px
  }
  `}
</style>
    <div className="signUpcontainer">
      
      <div className="card">
        <h2 className="title">Sign Up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>

        {/* OR Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Social Buttons */}
        <button className="social-btn google" onClick={() => login()}>
          <FcGoogle className="icon" /> Continue with Google
        </button>

        <button className="social-btn apple">
          <BsApple className="icon" /> Continue with Apple
        </button>

        {/* Footer */}
        <p className="footer-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <p className="terms-text">
          By signing up you agree to our <a href="#">Terms of Use</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignUp;
