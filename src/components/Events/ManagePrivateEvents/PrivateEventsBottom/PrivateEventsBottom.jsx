import React, { useState } from 'react'
import { FaEdit, FaInfoCircle, FaInstagram, FaUser, FaUserCheck, FaUserPlus } from 'react-icons/fa'
import GuestBox from './GuestBox/GuestBox'
import GuestForm from './GuestForm/GuestForm'
import AllData from '../../../AllData/AllData'
import { useAuth } from '../../../AuthContext/AuthContext'
import GuestUpdate from './GuestForm/GuestUpdate'
import { useNavigate } from 'react-router-dom'

export default function PrivateEventsBottom() {
    const navigate = useNavigate()
    const [Auth,setAuth]=useAuth()
    const events = Auth?.privateEvent
    const id = events?.rand_id
    const [form,setForm]=useState("hidden")
    const {guest} = AllData()
    const guests = guest.filter(data=>data.id===id)[0]
    const data =Auth?Auth.temp_guests:[]
    const guestData = Auth?.temp_guest
    const Data = guestData.filter(data=>data.id===id)[0]
    const Final = Data?.guest
    console.log(Data);
    function ChangeVaule()
    {
        navigate("/addguest")
    }
    
    const arr =data?data.map(dat=>{
        return<GuestBox
        name={dat.fname}
        email={dat.email}
        phone={dat.phone}
        code={dat.code}
        status={dat.status}
        group={Data?._id}
        
    
        />
    }):[]
   
  return (
    <div className='private-bottom h-screen overflow-scroll'>
      <div className="header w-[100%] p-3 flex justify-center place-items-center text-4xl shadow-lg text-red-500 font-bold">Guest Invitation
      <button className='text-sm flex place-items-center gap-1 absolute right-6' onClick={ChangeVaule}><FaUserPlus/>Add Guest</button>
      </div>
      <div className="guest flex flex-col gap-0">
      <div className='flex lg:justify-around lg:px-4 lg:py-3 px-2 py-2 justify-between text-sm bg-red-500 text-white lg:text-lg font-bold'>
        <div className='flex place-items-center gap-1 w-[100%] justify-center'><span><FaUser/></span>Guest Name</div>
        <div className='flex place-items-center gap-1 w-[100%] justify-center'><span><FaUserCheck/></span>Status</div>
        <div className='flex place-items-center gap-1 w-[100%] justify-center'><span><FaInfoCircle/></span>Information</div>
        <div className='flex place-items-center gap-1 w-[100%] justify-center'><span><FaInstagram/></span>Social</div>
        <div className='flex place-items-center gap-1 w-[100%] justify-center'><span><FaEdit/></span>Action</div>
      </div>
      {arr}
      </div>
  
      
    </div>
  )
}
