import React from 'react';
import './SignupPage.css';
import { Intro, ProfilePhoto } from "./Blocks.jsx"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const SignUp = () => {
  const [slide, setSlide] = useState(0);
  const [formData, setFormData] = useState({
    profilePhoto: "src/assets/profiles/1.jpg",
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    referral: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (slide === 0 && !formData.email.endsWith("@iitb.ac.in")) {
      alert("Email must be of type @iitb.ac.in");
    } else {
      setSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setSlide((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
      <div className="form-container">
        <AnimatePresence mode="wait">
          {slide === 0 && (
            <motion.div
              key="slide1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="form-step"
            >
              <h2 className="heading">Step 1</h2>
              <div className="input-group">
                <ProfilePhoto
                  profilePhoto={formData.profilePhoto}
                  setProfilePhoto={(photo) => setFormData({ ...formData, profilePhoto: photo })}
                />
              </div>
              <div className="input-group">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder='Enter your name'
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="label">LDAP ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder='Enter your email'
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder='Create a password'
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <button
                onClick={handleNext}
                className="btn btn-next"
              >
                Next
              </button>
            </motion.div>
          )}

          {slide === 1 && (
            <motion.div
              key="slide2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="form-step"
            >
              <h2 className="heading">Step 2</h2>
              <div className="input-group">
                <label className="label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="label">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="input-group">
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder='Enter your phone number without +91'
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="label">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  placeholder='Enter your address like room number, hostel number, etc.'
                  onChange={handleInputChange}
                  className="input-field"
                  rows="2"
                ></textarea>
              </div>
              <div className="input-group">
                <label className="label">Referral Code</label>
                <input
                  type="text"
                  name="referral"
                  value={formData.referral}
                  placeholder='For Admin Access'
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="button-group">
                <button
                  onClick={handlePrev}
                  className="btn btn-back"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn btn-submit"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <a href="/login">Already have an account? Login</a>
      </div>
  );
};

const SignupPage = () => {
  return (
    <div className='auth-root-style'>
      <div className="signup-main">
        <img
          src="src/assets/iitblogo.png"
          alt="Library"
          className="lib-image-signup"
        />
        <div className='left'>
          <Intro height="60%" width="95%" margin="0px"/>
        </div>
        <SignUp />
      </div>
    </div>  
  );
};

export default SignupPage;
