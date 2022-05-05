import React from 'react'
import './adComponent.css';
import { Ads } from "../../data";
import { Users } from "../../userData";

// Takes users as a parameter
export default function adComponent({ad}) {
  return (

    <div className="ad-container">
      <img className='right-bar-ad' src={ad.adPicture} alt="Ad" />

    </div>

    
  )
}

