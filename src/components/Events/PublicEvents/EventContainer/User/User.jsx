import React from 'react'

import { Link } from 'react-router-dom'
import { useAuth } from '../../../../AuthContext/AuthContext'

export default function User() {
    const [Auth,setAuth]=useAuth()
    const user = Auth?.user
    const name = user?.fname
    const img = user?.img
  return (
    <div className='user'>
      <div className="account p-3 mt-3">
        <div className="data flex justify-between w-[100%] ">
          <div className="icon flex place-items-center gap-4">
            <img src={img} alt="" className='w-10 rounded-full h-10' />
            <div className="details">
            <h1 className='font-bold'>{name}</h1>
            <p className='text-sm'>User</p>
          </div>
          </div>
          
          <div className="btn">
            <Link>See Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
