import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowForSignIn() {
  return (
    <div className='w-screen h-screen flex place-items-center justify-center'>
      <div className="p-6 bg-red-500 text-white text-xl">Please <Link className='p-2 bg-white text-red-500' to="/signin">Sign In</Link> or <Link to="/signup" className='p-2 bg-white text-red-500'>Sign Up </Link> for contoniue or <Link to="/" className='p-2 bg-white text-red-500'>Home</Link></div>
    </div>
  )
}
