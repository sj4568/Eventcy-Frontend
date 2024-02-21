import React, { useState } from 'react'

import { FaFile } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../../AuthContext/AuthContext'
export default function ProfileEventCard(prop) {
  const props = prop.data
    const [Auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const [status,setStatus]=useState("")
    function AddValue(event)
    {
        const { name, value } = event.target
        setStatus(value)
        
    }
    function changeStatus()
    {
        const newObj = {
            ...props,
            status
        }
        console.log(newObj);
        fetch(`https://eventcy-server-2.onrender.com/api/updatepublicevent/${props._id}`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newObj)
            
        })
      
      
  }
  function EventDelete()
  {
    const sure = confirm("Are you sure delete this event ?")
    if (sure) {
      fetch(`http://localhost:3700/api/deletepublicevent/${props._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      alert("Successfully deleted")
    }
    
  }
    const color = props.status==="open now"?"green":"red"
    const disa = props.status==="open now"?"":" pointer-events-none bg-gray-400 text-white"
    const buttonClass = `border p-1 mt-2 px-3 text-md text-slate-600 rounded-lg hover:bg-red-500 transition ease-in-out duration-500 hover:text-white ${disa}`
    function ShowBox()
    {
        setAuth(prev=>{
            const newObj = {
                ...prev,
                temp_event:props
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
        navigate("/showevent")
    }
  return (
    <div>
      <div>
       
      <div className="card flex flex-row gap-4 p-2 h-60 border-none group relative f-card overflow-hidden">
        <div className="imgBox w-56 relative overflow-hidden">
            <img src={props.eventImg} alt="" className='h-[100%] rounded-lg object-cover group-hover:scale-150 transition ease-out duration-300'/>
        </div>
        <div className="textBox">
            <div className="name text-md font-bold hover:text-red-500">{props?.name}</div>
            <div className="date flex text-sm font-semibold text-slate-600 lg:py-2 lg:place-items-center"> <FaFile/> {props.time} on {props.date} at {props.place}</div>
                      <div className="tickets text-red-500 font-bold pb-1 lg:py-3">Tickets from ${props.price} <span style={{ color: color }}>{props.status}  </span></div>
            <div className="des text-slate-600 font-light text-sm lg:text-lg ">{props.des}</div>
            <div className="flex gap-2">
              <button className={buttonClass} onClick={ShowBox}>Tickets & Details</button>
             
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
