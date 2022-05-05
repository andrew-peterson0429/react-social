import React from 'react';
import './rightbar.css';
import { Users } from "../../userData";
import { Ads } from "../../data";
import OnlineTravellers from '../../components/onlineTravellers/OnlineTravellers';
import AdComponent from '../ad-component/AdComponent';
import Facebook from '../../components/images/facebook.png'
import Github from '../../components/images/github.png'
import Twitter from '../../components/images/twitter.png'
import { Link } from "react-router-dom"

// Takes prop profile sent by profile page
export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return (
      <>
      <div className="notification-container">

        <img className='notification-img' src="/assets/notification.png" alt="heart" />
        <span className="notification-txt"><b>Recent travel deals</b> and <b>2 other</b> notifications</span>

      </div>

      <h4 className='right-bar-title'>Online Fellow Travellers</h4>

      <ul className='right-bar-traveller-list'>

      {/* For each user return online travelers component and passes in user with user id as key*/}
      {Users.map(u => (
        <OnlineTravellers key={u.id} user={u}/>
      ))}

      </ul>

      {Ads.map(a => (
        <AdComponent key={a.id} ad={a}/>
      ))}
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='right-bar-title'>Traveler Information</h4>
        <div className="right-bar-info">
          
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Nationality:</span>
            <span className="right-bar-info-value">United States</span>
          </div>

          <div className="right-bar-info-item">
            <span className="right-bar-info-key">From:</span>
            <span className="right-bar-info-value">Utah</span>
          </div>

          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Favorite Destination:</span>
            <span className="right-bar-info-value">San Diego</span>
          </div>

          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Occupation:</span>
            <span className="right-bar-info-value">Code Master</span>
          </div>

          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Coding Languages:</span>
            <span className="right-bar-info-value">All of them</span>
          </div>

          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Socials: </span>
            <a href='https://github.com/landonconover' className="right-bar-info-value"><img src={Github} alt="social icon" className="right-bar-icon" /></a>
            <span className="right-bar-info-value"><img src={Facebook} alt="social icon" className="right-bar-icon" /></span>
            <span className="right-bar-info-value"><img src={Twitter} alt="social icon" className="right-bar-icon" /></span>
          </div>
          

        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="right-bar-wrapper"></div>
      {/* If there is prop profile add ProfileRightBar, if not add HomeRightBar */}
      {profile ? <ProfileRightBar/> : <HomeRightBar/>}
    </div>
  )

}
  
