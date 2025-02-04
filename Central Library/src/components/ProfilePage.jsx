import React from 'react'
import { Navbar } from './Navbar'
import './ProfilePage.css'
import { Historycard } from './Historycard'

export const ProfilePage = (props) => {
  return (
    <div className='profpage'>
      <Navbar page="profile" />
      <div className="historycont">
        <h2 className='historyheading'> Your Reading History</h2>
        <div className="history">
          <Historycard/>
          <Historycard/>
          <Historycard/>
          <Historycard/>
        </div>

      </div>
      <div className="infocont">
        <img src="src/assets/devcom.png" alt="DP" className="dp" />
        <div className="info">
          <div>Name</div>
          <div className="underline"></div>
          <div>Ldap</div>
          <div className="underline"></div>
          <div>Role</div>
          <div className="underline"></div>
          <div>Hostel</div>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  )
}
