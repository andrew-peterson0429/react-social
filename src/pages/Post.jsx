import React from 'react'
import { useLocation } from 'react-router-dom';
import { posts } from "../data";

export default function Post() {

    const location = useLocation()
    // Create path by taking pathname and spliting it at / and taking the 2 index
    const path = location.pathname.split("/")[2]

    // if path's id equals path, reaches post
    const post = posts.find(p => p.id.toString() === path)

  return (

    <div className='post'>
        <img src={post.img} alt="" className="post-img" />
        <h1 className="post-title">{post.title}</h1>
        <p className="post-desc">{post.desc}</p>
        <p className="post-long-desc">{post.longDesc}</p>
    </div>
  )
}
