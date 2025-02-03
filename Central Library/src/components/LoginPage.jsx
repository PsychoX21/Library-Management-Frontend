import React from 'react';
import './LoginPage.css';
import { Intro } from "./Blocks.jsx"
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form Submission Logic Here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password</label>
      {/* <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /> */}
      <div className="password-wrapper">
        <input
          type={visible ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="password-toggle" onClick={() => setVisible(!visible)}>
          {visible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}

const LoginPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Triggers effect after mount
  }, []);

  return (
    <div className='auth-root-style'>
      <Intro height="85%" width="50%" margin="20px"/>

      <div className='right'>
        <img
        src="src/assets/iitblogo.png"
        alt="Library"
        className="auth-lib-image"
        />
        
        <div className={`login-main ${loaded ? "fade-in" : ""}`}>
          <div className="login-container">
            <div className="login-profile">
            <img
                src="src/assets/profile.jpg"
                alt="Profile"
                className="login-profile-pic"
            />
            </div>
            <LoginForm />
          </div>  
          <a href="/signup">Don’t have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
