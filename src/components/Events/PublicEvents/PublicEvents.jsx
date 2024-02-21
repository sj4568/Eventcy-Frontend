import React from 'react'
import SideBar from './SideBar/SideBar'
import EventContainer from './EventContainer/EventContainer'

export default function PublicEvents() {
  return (
    <div className='flex w-[100%]  gap-3 flex-col lg:flex-row'>
      <SideBar/>
      <EventContainer/>
    </div>
  )
}
