import React from 'react'
import BlogSideBar from './BlogSideBar/BlogSideBar'
import BlogsContainer from './BlogsContainer/BlogsContainer'

export default function Blog() {
  return (
    <div className='blog lg:flex gap-3'>
      <BlogSideBar/>
      <BlogsContainer/>
    </div>
  )
}
