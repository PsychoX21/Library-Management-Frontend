import React from 'react'
import './ProfilePage.css'

export const Historycard = () => {
  return (
    <div className="historycard">
      <div className="bookimg"><img src="src/assets/bookimg.png" alt="BOOKimg" />
      </div>
      <div className="bookinfo">
        <div>Book Name</div>
        <div>Check-in-Date</div>
        <div>Availaibility</div>
      </div>
    </div>
  )
}
