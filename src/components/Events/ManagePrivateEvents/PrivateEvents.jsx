import React from 'react'
import PrivateEventTop from './PrivateEventTop/PrivateEventTop'
import PrivateEventsBottom from './PrivateEventsBottom/PrivateEventsBottom'
import AllData from '../../AllData/AllData'

export default function PrivateEvents() {
    const {PrivateEvents}=AllData()
    
  return (
    <div className='private-event'>
      <PrivateEventTop/>
      <PrivateEventsBottom/>
    </div>
  )
}
