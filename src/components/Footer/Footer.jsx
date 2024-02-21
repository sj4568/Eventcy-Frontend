import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer grid lg:grid-cols-4 grid-cols-1 p-7 bg-red-500'>
      <div className="logo-sec">
        <h1 className='text-3xl font-extrabold text-white pb-2'>Eventcy</h1>
        <p className='text-white opacity-60'>Lets Chenge the Time</p>
      </div>
      <div className="events flex flex-col gap-2">
        <h3 className='text-2xl text-white'>Events</h3>
        <Link className="nav-link">Host Events</Link>
        <Link className="nav-link">Show Events</Link>
        <Link className="nav-link">Manage Events</Link>
      </div>
      <div className="blog events flex flex-col gap-2">
        <h3 className='text-2xl text-white'>Blogs</h3>
        <Link className="nav-link">Create Blog</Link>
        <Link className="nav-link">Whatch Blogs</Link>
        <Link className="nav-link">Manage Blogs</Link>
      </div>
      <div className="contect flex flex-col place-items-center gap-3 pt-3">
        <input type="email" name="" placeholder='Email Address' id="" className='px-4 py-2 rounded-lg' />
        <button className='bg-white px-16 rounded-lg text-red-500 font-semibold py-2'>Send Email</button>
      </div>
    </div>
  )
}
