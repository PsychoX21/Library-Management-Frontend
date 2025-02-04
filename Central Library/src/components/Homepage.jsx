import React from 'react'
import { Navbar } from './Navbar'
import './Homepage.css';
import logo from "../assets/iitblogo.png"
import search from "../assets/search.png"
import ellipse from "../assets/Ellipse.png"
import { useNavigate } from 'react-router-dom';


export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className='homebody'>
      <Navbar page="home" />
      <div className='announcement'>
        <h3 className='annhead'>Announcement</h3>
        <p className='update'>Update</p>
      </div>
      <div className="ellipses">
        <img src={ellipse} alt="" className="ellipse1" />
        <img src={ellipse} alt="" className="ellipse2" />
        <img src={ellipse} alt="" className="ellipse3" />
        <img src={ellipse} alt="" className="ellipse4" />
        <img src={ellipse} alt="" className="ellipse5" />
        <img src={ellipse} alt="" className="ellipse6" />
        <img src={ellipse} alt="" className="ellipse7" />
      </div>
      <div className="line upline"></div>
      <img src={logo} alt="" className="logo" />
      <div className='line lowline'></div>
      <div className="welcometext">
        <h1 className='clib' >Central Library</h1>
        <h2 className=''>Welcomes You</h2>
      </div>
      <div className="timing">
        <h2>Timings</h2>
        <p>Mon-Fri</p>
        <p>0900 Hrs to 2300 Hrs</p>
        <p>Sat-Sun</p>
        <p>1000 Hrs to 1700 Hrs</p>
      </div>
      <div className="buttons">
      <button className="find" onClick={() => navigate('/search')}>
        <img src={search} alt="" className="search" />
        Find a Book
      </button>
      <button className="map" onClick={() => navigate('/map')}>Locate on Map</button>
      </div>
    </div>
  )
}
