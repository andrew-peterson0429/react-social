import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({user}) {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
  }

  return (
    <div className='navbar'>
      <span className='logo'><Link className='link' to="/">Travelers Social</Link>
      </span> {
        user ? (

        
        <ul className="list">
        <li className="list-item">
          <img src={user.photos[0].value} alt="" className="profile-img" />
        </li>
        <li className="list-item">{user.displayName}</li>
        <li className="list-item" onClick={logout}>Logout</li>
      </ul>
        ) : (<Link className='link' to="/login">Login</Link>)}
    </div>
  )
}
