import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import { Intro } from "./Blocks.jsx"
import { useEffect } from "react";

const AuthPage = () => {
  useEffect(() => {
    document.body.classList.add("auth-body-style");
    document.getElementById("root").classList.add("auth-root-style");

    return () => {
      document.body.classList.remove("auth-body-style");
      document.getElementById("root").classList.remove("auth-root-style");
    };
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <Intro height="85%" width="50%" margin="20px"/>

      <div className='right'>
        <img
        src="src/assets/iitblogo.png"
        alt="Library"
        className="auth-lib-image"
        />
        
        <div className="auth-main">

          <h1>Welcome</h1>
          
          <div className="auth-container">
            <div className="profile">
              <img
                src="src/assets/profile.jpg"
                alt="Profile"
                className="auth-profpic"
              />
            </div>
            <div className="button-container">
              <button onClick={() => navigate('/login')} className="auth-button">
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="auth-button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
