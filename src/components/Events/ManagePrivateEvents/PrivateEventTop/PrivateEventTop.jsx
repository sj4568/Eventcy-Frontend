import React from 'react'
import { FaInfo, FaInfoCircle, FaMailBulk, FaPhone, FaTrash, FaUser, FaUserAlt, FaUserCheck, FaUsers, FaVoicemail } from 'react-icons/fa'
import AllData from '../../../AllData/AllData'
import { useAuth } from '../../../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Prev } from 'react-bootstrap/esm/PageItem'

export default function PrivateEventTop() {
    const navigate = useNavigate()
    const {PrivateEvents,guest} = AllData()
    const Data = PrivateEvents?PrivateEvents:[]
    const [Auth,setAuth]=useAuth()
    const user = Auth?.user
    const id = user?._id
    const Events = Auth?.privateEvent
    const Event = Events?Events:[]
    const guestId = Event.rand_id
    const guestData = guest.filter(data=>data.id===guestId)[0]
    const GuestId = guestData?guestData._id:""
    const eventList = Auth?.temp_events
    function DeleteEvents()
    {
        console.log(Event._id);
        const state = confirm("Are you sure delete this event")
        if(state)
        {
        fetch(`https://eventcy-server-2.onrender.com/api/deleteevent/${Event._id}`,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"DELETE"
        })
        fetch(`http://localhost:3700/api/deleteguestdata/${GuestId}`,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"DELETE"
        })
        const index = eventList.findIndex(data=>data._id===Event._id)
        eventList.splice(index,1)
        setAuth(prev=>{
            const newObj = {
                ...prev,
                temp_events:eventList,
              
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
       
        navigate("/events")
        }

    }
  return (
    
    <div className='top p-6'>
         <div className="headers flex gap-3 place-items-center py-4">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaInfoCircle/>
            </span>
            <h1 className='text-2xl font-bold w-[100%] flex flex-col lg:flex-row'>{Event.event_name}<span className='text-xl font-light'>/Manage your events</span> <button  onClick={DeleteEvents} className='flex mt-2 lg:-mt-2 lg:ml-8 place-items-center text-sm bg-red-500 text-white px-3 py-2 rounded-lg '><span><FaTrash/></span>Close Event</button></h1>
        </div>
        <div className="details-box grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2">
            <div className='flex flex-col gap-3'>
                <div className='flex place-items-center gap-2'>
                    <span className='p-2 bg-red-500 text-white rounded-lg'><FaUserAlt/></span>
                    <span className='text-lg font-bold'>Owner Name :</span>
                    <span>{Event.fname}</span>
                </div>
                <div className='flex place-items-center gap-2'>
                    <span className='p-2 bg-red-500 text-white rounded-lg'><FaUserCheck/></span>
                    <span className='text-lg font-bold'>Ref. Name :</span>
                    <span>Name</span>
                </div>
                
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex place-items-center gap-2'>
                    <span className='p-2 bg-red-500 text-white rounded-lg'><FaPhone/></span>
                    <span className='text-lg font-bold'>Owner Phone:</span>
                    <span>{Event.phone}</span>
                </div>
                <div className='flex place-items-center gap-2'>
                    <span className='p-2 bg-red-500 text-white rounded-lg'><FaMailBulk/></span>
                    <span className='text-lg font-bold'>Owner Email:</span>
                    <span>{Event.email}</span>
                </div>
                
            </div>
            
            <div className='flex flex-col gap-3'>
                <div className='flex place-items-center gap-2'>
                    <span className='p-2 bg-red-500 text-white rounded-lg'><FaInfo/></span>
                    <span className='text-lg font-bold'>Event Name :</span>
                    <span>{Event.event_name}</span>
                </div>
                <div className='flex place-items-center gap-2'>
                    <span className='p-2 bg-red-500 text-white rounded-lg'><FaUsers/></span>
                    <span className='text-lg font-bold'>Events Guest Number:</span>
                    <span>{Event.g_num}</span>
                </div>
                
            </div>
            
            
        </div>
        
      
    </div>
  )
}
