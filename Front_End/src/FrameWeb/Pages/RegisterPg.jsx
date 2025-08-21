//  export default RegisterPg;
import { useState } from "react";
import "../Assets/css/abc.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Base_Url from "../Component/api";

const RegisterPg = () => {
  const navigate = useNavigate();

  // This controls which form is active: 'signIn' or 'signUp'
  const [activePanel, setActivePanel] = useState("signIn");

  // Login form state
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  // Register form state
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    Profile: ""
  });

  const handleLoginChange = (e) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterChange = (e) => {
    setRegisterForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${Base_Url}/api/login`, loginForm)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          alert("Login successful");
          navigate("/home");
        }
      })
      .catch((err) => {
        console.error("Error", err);
        alert("Login failed");
      });
  };

  // Handle registration submit (optional logic — backend must support this)
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${Base_Url}/api/reg`, registerForm)
      .then((res) => {
        alert("Registration successful. Please log in.");
        setActivePanel("signIn");
      })
      .catch((err) => {
        console.error("Error", err);
        alert("Registration failed");
      });
  };

  return (
    <>
      <Header />
      <div
        className="m-5 d-flex flex-column justify-content-center align-items-center"
        
      >
        {/* Add 'right-panel-active' class conditionally */}
        <div
          className={`container1 rounded-3 container shadow-lg position-relative overflow-hidden mx-auto p-4 ${
            activePanel === "signUp" ? "right-panel-active" : ""
          }`}
		  style={{ maxWidth: "768px", minHeight: "550px" }}

          id="container"
        >
          {/* Sign Up Form */}
          <div className="form-container sign-up-container sign-div">
            <form onSubmit={handleRegisterSubmit}>
              <h1>Create Account</h1>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={registerForm.name}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="contact"
                name="contact"
                placeholder="contact"
                value={registerForm.contact}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="address"
                name="address"
                placeholder="address"
                value={registerForm.address}
                onChange={handleRegisterChange}
                required
              />
              <input
                className="reg-image"
                name="profile"
                type="file"
                accept=".jpg"
                value={registerForm.Profile}
                onChange={handleRegisterChange}
                //   required
              />

              <button type="submit">Sign Up</button>
            </form>
          </div>

          {/* Sign In Form */}
          <div className="form-container sign-in-container">
            <form onSubmit={handleLoginSubmit}>
              <h1>Sign in</h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
              />
              <button type="submit">Sign In</button>
            </form>
          </div>

          {/* Overlay Panels */}
          <div className="overlay-container">
            <div className="overlay">
              {/* Overlay for sign-in side */}
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us, please login with your personal
                  info
                </p>
                <button
                  className="ghost"
                  onClick={() => setActivePanel("signIn")}
                >
                  Sign In
                </button>
              </div>

              {/* Overlay for sign-up side */}
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="ghost"
                  onClick={() => setActivePanel("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPg;
