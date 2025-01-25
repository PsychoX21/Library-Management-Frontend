import React from 'react';
import './LoginPage.css';
import { Intro } from "./Blocks.jsx"
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    document.body.classList.add("my-page-style");
    document.getElementById("root").classList.add("my-page-root");

    return () => {
      document.body.classList.remove("my-page-style");
      document.getElementById("root").classList.add("my-page-root");
    };
  }, []);
  return (
    <>
      <Intro height="85%" width="50%"/>

      <div className='right'>
        <img
        src="src/assets/iitblogo.png"
        alt="Library"
        className="library-image"
        />
        
        <div className="login-main">
          <div className="login-container">
            <div className="login-profile">
            <img
                src="src/assets/profile.jpg"
                alt="Profile"
                className="login-profile-pic"
            />
            </div>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
              <button type="submit">Login</button>
            </form>
          </div>  
          <a href="/signup">Don’t have an account? Sign up</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
