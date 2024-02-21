import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useAuth } from '../../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'
import AllData from '../../AllData/AllData'

export default function List(props) {
    const navigate = useNavigate()
    const data = props.data
    const rand_id = data.rand_id
    const {guest} = AllData()
   const [Auth,setAuth]=useAuth()
   const temp_data = Auth?.temp_data
    const c_guest = temp_data?temp_data.filter(data=>data.id===rand_id)[0]:{}
    console.log(guest);
    const guests = c_guest?c_guest.guest:[]
    console.log(guests);
    
    function LateNavigate()
    {
      setTimeout(()=>{
        navigate("/events/privateevent")
      },1000)
    }
    function eventData()
    {
        setAuth(prev=>{
            const newObj ={
                ...prev,
                privateEvent:data,
                temp_guest:guest,
                temp_guests:guests
            }
            console.log(guest);
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
        
        LateNavigate()
        
    }
  return (
    <div className="list w-[100%] bg-red-500 p-3 rounded-lg flex justify-between place-items-center group" onClick={eventData}>
    <h1 className='text-white text-2xl font-bold'>{data.event_name}</h1>
    <span className='text-white text-xl hidden group-hover:block transition ease-in-out duration-300'><FaArrowRight/></span>
</div>
  )
}
