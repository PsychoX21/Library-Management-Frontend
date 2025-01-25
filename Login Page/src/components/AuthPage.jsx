import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import { Intro } from "./Blocks.jsx"

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Intro height="85%" width="50%"/>

      <div className='right'>
        <img
        src="src/assets/iitblogo.png"
        alt="Library"
        className="library-image"
        />
        
        <div className="auth-main">

          <h1>Welcome</h1>
          
          <div className="auth-container">
            <div className="profile">
              <img
                src="src/assets/profile.jpg"
                alt="Profile"
                className="profile-pic"
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
