import React, { useState } from 'react'
import InputElements from '../../InputBox/InputElements'
import { FaInfo } from 'react-icons/fa'
import { useAuth } from '../../AuthContext/AuthContext'
import EventList from '../EventList/EventList'
import { useNavigate } from 'react-router-dom'
import AllData from '../../AllData/AllData'

export default function EventsForm() {
  const navigate = useNavigate()
  const {PrivateEvents} = AllData()
  const [Auth,setAuth]=useAuth()
  const id = Auth?.user._id
  const [formData,setFormData]=useState({
    id:id,
    fname:"",
    email:"",
    phone:"",
    event_type:"",
    event_name:"",
    g_num:""
    
  })
  
  const [err,setErr]=useState("")
  const [color,setColor]=useState("")
  function AddValue(event)
  {
    const {name,value}=event.target
    setFormData(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
  function SubmitData(event)
  {
    event.preventDefault()
    const rand_id = Math.floor(Math.random()*100000000)
    const {fname,email,event_name,event_type,g_num} = formData
    if(fname && email && event_name && event_type && g_num)
    {
      fetch("https://eventcy-server-2.onrender.com/api/saveprivateevents",{
        headers:{
          "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify({
          ...formData,
          rand_id
        })
      })
      fetch("https://eventcy-server-2.onrender.com/api/createguest",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          id:rand_id,
          guest:[]
        })
      })
      setAuth(prev=>{
        const newObj={
          ...prev,
          temp_events:[...PrivateEvents,{...formData,rand_id}]
        }
        
        console.log(newObj);
        localStorage.setItem("Auth",JSON.stringify(newObj))
        return newObj
      })
     
      
      setErr("Successfully created events")
      setColor("green")
      navigate("/events")

    }
    else
    {
      setErr("Please Fill Data")
      setColor("red")
      
    }
  }
  return (
    <div className='events-form p-3'>
      <div className="form-container w-[100%] flex flex-col lg:flex-row justify-center gap-3">
        <div className="box w-auto flex flex-col">
        <div className="headers flex gap-3 place-items-center py-2">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaInfo/>
            </span>
            <h1 className='text-2xl font-bold'> Create a Events <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
        </div>
        <form action="" className="form p-2" onSubmit={SubmitData}>
        <InputElements title="Events Owner name"
        name="fname"
        id="fname"
        type="text"

        onChange={AddValue}
        />
        <InputElements title="Email Address"
        name="email"
        id="email"
        type="email"
        onChange={AddValue}
        />
        <InputElements title="Phone Number"
        name="phone"
        id="phone"
        type="text"
        onChange={AddValue}
        />
        <InputElements title="Event Name"
        name="event_name"
        id="event_name"
        type="text"
        onChange={AddValue}
        />
        <div className="select">
        <label htmlFor='event-type' className='font-bold relative px-3 before:absolute before:w-2 before:h-[100%] before:bg-red-500 before:left-0'>Which kind of event</label>
        <select name="event_type" className='focus:outline-none' onChange={AddValue}id="event-type">
          <option className='focus:bg-red-500' value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="conferrence">Conferrence</option>
          <option value="other">Other</option>
        </select>
        </div>
        <div className="guest-num">
          <InputElements title="Amount of Guest" type="text"
          id="guest"
          name="g_num"
          onChange={AddValue}
          />
        
        </div>
        <span className='flex w-[100%] justify-center' style={{color:color}}>{err}</span>
        <InputElements type="submit" value="Create Event" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
        </form>
        </div>
        <EventList/>
      </div>
    </div>
  )
}
