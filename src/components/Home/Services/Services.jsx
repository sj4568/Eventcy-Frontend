import React from 'react'
import ServiceCard from './ServiceCard/ServiceCard'
import { FaCalendarAlt, FaLocationArrow, FaUser, FaUsers } from 'react-icons/fa'

export default function Services() {
  return (
    <div className='services w-screen  bg-slate-100 mt-3'>
      <div className="ser-container lg:w-screen lg:flex lg:justify-center lg:px-24 grid grid-cols-1 p-4 md:justify-between md:flex">
        <ServiceCard
        icon={<FaCalendarAlt/>}
        name="7/24 EVENT AVALIABLE"
        />
        <ServiceCard
        icon={<FaLocationArrow/>}
        name="Great Locarions"
        />
        <ServiceCard
        icon={<FaUsers/>}
        name="upto 1B+ Customers"
        />
        <ServiceCard
        icon={<FaUser/>}
        name="200+ event manager"
        />
      </div>
    </div>
  )
}
