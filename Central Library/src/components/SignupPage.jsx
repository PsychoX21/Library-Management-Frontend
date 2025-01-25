import React from 'react';
import './SignupPage.css';
import { Intro } from "./Blocks.jsx"
import { useEffect } from "react";

const SignupPage = () => {
  useEffect(() => {
    document.body.classList.add("my-page-style");
    document.getElementById("root").classList.add("my-page-root");

    return () => {
      document.body.classList.remove("my-page-style");
      document.getElementById("root").classList.add("my-page-root");
    };
  }, []);
  return (
    <div className="signup-main">
      <div className='left'>
        <img
        src="src/assets/iitblogo.png"
        alt="Library"
        className="lib-image"
        />
        <Intro height="70%" width="100%"/>
      </div>
      <div className="signup-container">
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Create a password" required />
          <button type="submit">Sign Up</button>
        </form>
        <a href="/login">Already have an account? Login</a>
      </div>
    </div>
  );
};

export default SignupPage;
