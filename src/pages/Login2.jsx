import React from 'react'
import '../app.css';
import Facebook from '../components/images/facebook.png'
import Google from '../components/images/google.png'
import Github from '../components/images/github.png'


export default function login() {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  return (
    <div className='login'>

      <h1 className="login-title">Choose Your Login Method</h1>

      <div className="login-wrapper">
        
        <div className="login-left">
          <div className="login-btn google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          
          <div className="login-btn facebook">
            <img src={Facebook} alt="" className="icon" />
            FaceBook
          </div>
          
          <div className="login-btn github">
            <img src={Github} alt="" className="icon" />
            GitHub
          </div>
        </div>

        <div className="login-center">
          <div className="login-line" />
          <div className='login-or'>OR</div>
        </div>
        
        <div className="login-right">
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Password' />
          <button className="login-submit">Login</button>
        </div>
      </div>
    </div>
  )
}
