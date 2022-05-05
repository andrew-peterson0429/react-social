import React from 'react';
import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import ProfileFeed from '../../components/profile-feed/ProfileFeed';


export default function Profile() {
  return (
    <>
    <Topbar/>
      <div className="profile">

        <Leftbar/>
        <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img className='profile-cover-img' src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Picture" />
                    <img className='profile-user-img' src="https://avatars.githubusercontent.com/u/1420371?v=4" alt="Profile Picture" />
                </div>
                <div className="profile-info">
                    <h4 className='profile-info-name'>Landon Conover</h4>
                    <p className='profile-info-description'>Avid coder and soap box star.</p>
                </div>
            </div>
            <div className="profile-right-bottom">
                <ProfileFeed/>
                <Rightbar profile/>
            </div>

        </div>

      </div>
    </>
  )
}
