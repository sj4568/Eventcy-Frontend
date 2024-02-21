import React from 'react'
import { FaArrowRight, FaList } from 'react-icons/fa'
import AllData from '../../AllData/AllData'
import { useAuth } from '../../AuthContext/AuthContext'
import List from './List'

export default function EventList() {
    const {PrivateEvents} = AllData()
    const [Auth,setAuth] = useAuth()
    const user = Auth?.user
    const id = user?._id
    const events = PrivateEvents.filter(data=>data.id===id)
    const temp = Auth?.temp_events
    const Data = temp.filter(data=>{
     if(data.id===id)
     {
      return data
     }
    })
    const final = Data?Data:events
    console.log(Data);
    const arr = final.map(data=>{
        return<List data={data}/>
    })
  return (
    <div className='w-auto'>
     <div className="headers flex gap-3 place-items-center py-2">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaList/>
            </span>
            <h1 className='text-2xl font-bold'> Your Event List <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
        </div>
        <div className="eventList flex flex-col gap-2">
           {arr}
        </div>
    </div>
  )
}
