import React from 'react'
import FeaturesCard from './FeaturesCard/FeaturesCard'
import { FaLocationArrow } from 'react-icons/fa'
import Data from "./FeaturesCardData"
import EventCard from "../../Events/PublicEvents/EventContainer/EventCard/EventCard"
import { Link } from 'react-router-dom'
export default function FeaturesFastival() {
  const arr = Data.map(data=>{
    return <EventCard
      data={data}
    />
  })
  return (
    <div className='features-fastivals sm:p-9'>
        <div className="headers flex gap-3 place-items-center p-4">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaLocationArrow/>
            </span>
            <h1 className='text-2xl font-bold'>Features Fastivals <span className='text-xl font-light'>/we have some fastival for you</span></h1>
        </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
       {arr}
      </div>
      <div className="btn-sec grid place-items-center mt-4">
      <Link to="/publicevents" className='bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-blue-950 transition ease-in-out duration-500'>See All Events</Link>
      </div>
      
    </div>
  )
}
