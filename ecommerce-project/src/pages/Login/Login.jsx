import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { LoginContext } from "../../App";
import { useNavigate } from "react-router";

const Login = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login Successful!");
      // Here you would typically handle the login logic
      setUserLoggedIn(true);
      localStorage.setItem("userLoggedIn", true);
      console.log("Login attempt:", { email, password });
      navigate("/home");
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot password functionality would be implemented here.");
  };

  const handleSignUp = () => {
    alert("Sign up functionality would be implemented here.");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome back</h1>
          <p>Please sign in to your account</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="forgot-link"
            >
              Forgot password?
            </button>
          </div>

          <button onClick={handleSubmit} className="login-button">
            Sign In
          </button>
        </form>

        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleSignUp}
              className="signup-button"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
