import React from 'react'
import { FaBackward, FaCheck, FaCross, FaHome, FaRobot } from 'react-icons/fa'

import { Link } from 'react-router-dom'

export default function PageNotFound() {
  
  return (
    <div className='mass w-full h-screen flex justify-center place-items-center'>
      <div className="text-container w-[90%] lg:w-[70%] h-[90vh] shadow-lg flex justify-center place-items-center flex-col">
        <div className="check bg-red-600 p-8 rounded-full text-white">
            <span className='text-6xl'><FaRobot/></span>
        </div>
        <div className="text p-3">
            <h1 className='flex text-center flex-col justify-center place-items-center font-medium text-2xl'> <span className='text-red-600 text-4xl'>404</span>Page Not Found go back</h1>
        </div>
        <div className="button flex gap-3">
            <Link to="/" className='px-3 py-2 bg-blue-600 flex gap-2 place-items-center text-white rounded-lg'><FaHome/> Home</Link>
        </div>
      </div>
    </div>
  )
}