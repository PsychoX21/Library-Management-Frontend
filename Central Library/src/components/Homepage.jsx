import React from 'react'
import { Navbar } from './Navbar'
import './Homepage.css';


export const Homepage = () => {
  return (
    <div>
      <Navbar page="home"/>
      <div className='homebody'></div>
    </div>
  )
}
