import React from 'react';
import './SignupPage.css';
import { Intro } from "./Blocks.jsx"

const SignupPage = () => {
  return (
    <div className="signup-main">
      <div className='left'>
        <img
        src="src/assets/iitblogo.png"
        alt="Library"
        className="lib-image"
        />
        <Intro height="50%" width="80%"/>
      </div>
      <div className="signup-container">
        <h2>Sign Up</h2>
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
