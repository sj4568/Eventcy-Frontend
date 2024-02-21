import React from 'react'
import img from "../../../../assets/images/clients/c1.png"
import { Link } from 'react-router-dom'
import User from './User/User'
import { FaPlus } from 'react-icons/fa'
import EventCard from './EventCard/EventCard'
import AllData from '../../../AllData/AllData'
import { useAuth } from '../../../AuthContext/AuthContext'
export default function EventContainer() {
  const {publicevents} = AllData()
  const [Auth,setAuth]=useAuth()
  const data = Auth?Auth.publicEvents:publicevents
  const Arr = data.map(dat=>{
    return <EventCard
      data={dat}
    />
  })
  return (
    <div className='lg:w-[60%] w-[100%] lg:h-screen overflow-scroll'>
      <div className="user shadow-md">
        <User/>
        <div className="create">
          <div className="link w-[100%] flex justify-center py-2 border border-red-500">
            <Link className='flex place-items-center gap-2 text-red-500' to="/createevent"><FaPlus/>Post a Event</Link>
          </div>
        </div>
      </div>
      <div className="event-container overflow-scroll flex flex-col gap-3 pt-2 p-3">
       {Arr}
      </div>
    </div>
  )
}
