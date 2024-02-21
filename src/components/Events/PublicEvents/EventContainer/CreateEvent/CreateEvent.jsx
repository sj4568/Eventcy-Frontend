import React, { useState } from 'react'

import { FaInfo, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import AllData from '../../../../AllData/AllData'
import InputElements from '../../../../InputBox/InputElements'
import { useAuth } from '../../../../AuthContext/AuthContext'
import axios from 'axios'

export default function CreateEvent() {
    const navigate = useNavigate()
    
    const [image,setImage]=useState("")
    
    const [formData,setFormData]=useState({
        name:"",
        date:"",
        time:"",
        price:"",
        des:"",
        eventType:"",
        place:''
 
        
    })
    const [Auth,setAuth]=useAuth()
    const user = Auth?.user
    const events = Auth?.publicEvents
    const user_name = user?.fname
    const user_img = user?.img
    const id = user?._id
    const [err,setErr]=useState("")
    const [color,setColor]=useState("")
    function AddValue(event)
    {
        const {name,value,files}=event.target
        setFormData({
            ...formData,
            [name]:value
        })
        const preset_key = "en3kmlux"
        const cloud_name="dkrbqjtdc"
        const formdata = new FormData()
        formdata.append("file",files[0])
        formdata.append("upload_preset",preset_key)
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formdata)
        .then(res=>setImage(res.data.secure_url))
        .catch(err=>console.log(err))
       
    }
    function SubmitData(event)
    {
        event.preventDefault()
        const Dat = new Date()
        const {name,date,time,price,des,eventType} = formData
        if(name && date && time && price && des && eventType)
        {

        const Data = {
            ...formData,
            userName:user_name,
            userImg:user_img,
            postedTime:Dat.toDateString(),
            eventImg:image,
            status:"open now",
            id

        }
        fetch("https://eventcy-server-2.onrender.com/api/createpublicevent",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(Data)
        })
        setAuth(prev=>{
            const newObj = {
                ...prev,
                publicEvents:[...events,Data]
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
        navigate("/publicevents")
        setErr("Event Created Successfully ")
        setColor("green")
    }
    else
    {
        setErr("Please fil All data")
        setColor("red")

    }
    }
  return (
    <div className='events-form p-3'>
      <div className="form-container w-[100%] grid place-items-center">
        <div className="box w-auto flex flex-col">
        <div className="headers flex gap-3 place-items-center py-2">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaUser/>
            </span>
            <h1 className='text-2xl font-bold'> Create Event <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
        </div>
        <form action="" className="form p-2" onSubmit={SubmitData}>
       
        <InputElements title="Event Name"
        name="name"
        id="name"
        type="text"
        onChange={AddValue}
        />
       
        <InputElements title="Event Picture"
        name="img"
        id="img"
        type="file"
        onChange={AddValue}
        />
        <div className="im flex justify-between">
        <InputElements title="Event Date"
        name="date"
        id="date"
        type="date"
        onChange={AddValue}
        />
         <InputElements title="Event Time"
        name="time"
        id="time"
        type="time"
        onChange={AddValue}
        />
       
        </div>
        <InputElements title="Ticket Price"
        name="price"
        id="price"
        type="text"
        onChange={AddValue}
        />
        <InputElements title="Event Place"
        name="place"
        id="place"
        type="text"
        onChange={AddValue}
        />
        <div className="select flex gap-3">
            <label htmlFor="events-type">Events Type</label>
            <select name="eventType" id="events-type" onChange={AddValue}>
                <option value="Music">Music</option>
                <option value="Politics">Politics</option>
                <option value="Buisness">Buisness</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="text">
        <label htmlFor="" className='text-lg font-bold px-2'>Descreption</label>
        <textarea name="des" id="des" rows={4} className='w-[100%] bg-gray-100 p-2' placeholder='Messege' onChange={AddValue}>

        </textarea>
        </div>
        <span className='flex w-[100%] justify-center' style={{color:color}}>{err}</span>
        <InputElements type="submit" value="Create Event" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
      
        </form>
        </div>
      </div>
    </div>
  )
}
