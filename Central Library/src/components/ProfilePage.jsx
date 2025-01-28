import React from 'react'
import { Navbar } from './Navbar'
import './ProfilePage.css'

export const ProfilePage = () => {
  return (
    <div className='profpage'>
      <Navbar page="profile"/>
      <div className="historycont">
        <h2 className='historyheading'> Your Reading History</h2>
      </div>
      <div className="infocont">

      </div>
    </div>
  )
}
