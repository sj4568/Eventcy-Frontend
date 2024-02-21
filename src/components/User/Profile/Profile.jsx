import React from 'react'
import img from "../../../assets/images/blog/b1.jpg"
import InfoCard from './InfoCard'
import { FaEdit, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa'
import UserDetails from './UserDetails/UserDetails'
import { useAuth } from '../../AuthContext/AuthContext'
import { Link } from 'react-router-dom'
export default function Profile() {
  const [Auth, setAuth] = useAuth()
  const user = Auth?.user
  function Update()
  {
    
  }
  return (
    <div className='profile-container w-[100%]'>
      <div className="profile-box w-[100%]">
        <div className="cover w-[100%] h-[30vh] bg-gray-300"></div>
        <div className="profile relative flex lg:w-[100%] w-[100%] px-5 lg:gap-5 flex-col lg:flex-row">
          <div className="profile-pic bg-red-500 lg:w-[300px] w-[200px] h-[200px] md:w-[300px] md:h-[300px]  relative -top-32 rounded-full   lg:h-[300px] overflow-hidden border-5 border-red-500 shadow-xl ">
            <img src={user ?user.img:""} alt="" className="img absolute top-0 left-0 w-[100%] h-[100%] object-cover" />
          </div>
          <div className="details flex flex-col -mt-32 lg:mt-0 pb-4">
            <h1 className='lg:text-5xl text-3xl  py-3 font-bold'>{user ? user.fname : "" }</h1>
            <div className="contect-info flex justify-start flex-col place-items-start py-3">
              <InfoCard
                icon={<FaMailBulk />}
                text={user ? user.email : ""}
                
              />
              <InfoCard
                icon={<FaPhone />}
                text={user ? user.phone :""}
              />
             

            </div>
            <div className="button flex gap-4">
              <Link className='flex justify-center place-items-center gap-2 px-4 py-2 bg-red-500 rounded-md text-white' to="/">
                <FaHome />
                Home
              </Link>
                 <Link className='flex justify-center place-items-center gap-2 px-4 py-2 bg-blue-500 rounded-md text-white' to="/updateuser">
                <FaEdit/>
                Update
              </Link>
              
              
            </div>
            
        </div>
        </div>
        
      </div>
      <UserDetails/>
    </div>
  )
}
