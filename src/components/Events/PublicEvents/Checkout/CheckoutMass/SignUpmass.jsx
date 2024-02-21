import React, { useEffect } from 'react'
import { FaBackward, FaCheck, FaHome, FaKey } from 'react-icons/fa'
import { useAuth } from '../../../../AuthContext/AuthContext'
import { Link } from 'react-router-dom'
import AllData from '../../../../AllData/AllData'

export default function SignUpMass() {
  const [Auth, setAuth] = useAuth()
  const {Users } = AllData()
  const data = Auth?.all_user
  function setData()
  {
    setAuth(prev => {
      const newObj = {
        ...prev,
        all_user:Users
      }
      localStorage.setItem("Auth", JSON.stringify(newObj))
      return newObj
    })
  }
  useEffect(() => { 
    setData()
  },[Users])
  return (
    <div className='mass w-full h-screen flex justify-center place-items-center'>
      <div className="text-container w-[90%] lg:w-[70%] h-[90vh] shadow-lg flex justify-center place-items-center flex-col">
        <div className="check bg-green-600 p-8 rounded-full text-white">
            <span className='text-6xl'><FaCheck/></span>
        </div>
        <div className="text p-3">
            <h1 className='flex text-center flex-col justify-center place-items-center font-medium text-2xl'>Your Account created <span className='text-green-600 text-4xl'>Successfully</span></h1>
        </div>
        <div className="button flex gap-3">
            <Link to="/" className='px-3 py-2 bg-blue-600 flex gap-2 place-items-center text-white rounded-lg'><FaHome/> Home</Link>
            <Link to="/signin" className='px-3 py-2 bg-red-600 flex gap-2 place-items-center text-white rounded-lg'><FaKey/>Sign In</Link>
        </div>
      </div>
    </div>
  )
}
