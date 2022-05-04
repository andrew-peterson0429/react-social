import React from 'react';
import './profile-feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from "../../userData";

export default function Feed() {
  return (
    <div className='feed'>
      Profile feed
      <div className="feed-wrapper">
        <Share />
        {Posts.filter(p => p.userId === 1).map((p) => (
          <Post key={p.id} post={p}/>
        ))}

        {/* {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))} */}

        
    
      </div>

    </div>
  )
}
