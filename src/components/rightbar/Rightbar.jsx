import React from 'react';
import './rightbar.css';
import { Users } from "../../userData";
import OnlineTravellers from '../../components/onlineTravellers/OnlineTravellers';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="right-bar-wrapper">

        <div className="birthday-container">

          <img className='birthday-img' src="/assets/heart.png" alt="heart" />
          <span className="birthday-txt"><b>Paul Cheney</b> and <b>3 others</b> have a birthday today</span>

        </div>

        <img className='right-bar-ad' src="/assets/uvu-ad.jpg" alt="Ad for UVU" />

        <h4 className='right-bar-title'>Online Fellow Travellers</h4>

        <ul className='right-bar-traveller-list'>

          {/* For each user return online travellers component and passes in user with user id as key*/}
          {Users.map(u => (
            <OnlineTravellers key={u.id} user={u}/>
          ))}

        </ul>

      </div>
    </div>
  )
}
