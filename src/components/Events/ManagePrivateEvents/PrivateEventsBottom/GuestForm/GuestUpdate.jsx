import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import InputElements from '../../../../InputBox/InputElements'
import { Link, useNavigate } from 'react-router-dom'
import AllData from '../../../../AllData/AllData'
import { useAuth } from '../../../../AuthContext/AuthContext'

export default function GuestUpdate(props) {
    const navigate = useNavigate()
    const {guest} = AllData()
    const [Auth,setAuth]=useAuth()
    const current = Auth?.privateEvent
    const id = current?.rand_id
    const current_event = guest.filter(data=>data.id===id)[0]
    const c_id = current_event?current_event._id:""
    const data = current_event?current_event.guest:[]
    
    const Ar = data?data:[]
    
    const update = Auth?.update_guest
    const index = Ar.findIndex(data=>data.code===update.code)
   
    const [formData,setFormData]=useState({
        fname:update?.fname,
        email:update?.email,
        phone:update?.phone,
        
    })
    function AddValue(event)
    {
        const {name,value}=event.target
        setFormData({
            ...formData,
            [name]:value

        })
        
    }
    const [err,setErr]=useState("")
    const [color,setColor]=useState("")
    function SubmitData(event)
    {
        event.preventDefault()
     
        const {fname,email,phone}=formData
      
       
            if(fname && email && phone)
            {
                Ar[index]={
                    ...update,
                    ...formData,
                    status:update.status
                }
                let Arr = [...Ar]
                
                fetch(`https://eventcy-server-2.onrender.com/api/updateguest/${c_id}`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        ...current_event,
                        guest:Arr
                    })
                })
                setAuth(prev=>{
                    const newObj = {
                        ...prev,
                        temp_guests:Arr
                    }
                    localStorage.setItem("Auth",JSON.stringify(newObj))
                    return newObj
                })
                navigate("/events/privateevent")
                setErr("Guest Data insert sucessfully ")
                setColor("green")
                
            }
            else
            {
                setErr("Fill AllData")
                setColor("red")
            }
        }
       
    
    function ChangeState()
    {
        
        props.changeUpdate()
    }
    const classState=`events-form p-3 w-[100%]`
  return (
    <div className={classState}>
    <div className="form-container w-[100%] h-screen grid place-items-center">
      <div className="box w-auto flex flex-col">
      <div className="headers flex gap-3 place-items-center py-2">
          <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
              <FaUser/>
          </span>
          <h1 className='text-2xl font-bold'>Update Guest <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
      </div>
      <form action="" className="form p-2" onSubmit={SubmitData}>
     
      <InputElements title="Guest Name"
      name="fname"
      id="fname"
      type="text"
      onChange={AddValue}
      value={formData.fname}
      />
     
      <InputElements title="Guest Email Address"
      name="email"
      id="email"
      type="email"
      onChange={AddValue}
      value={formData.email}

      />
       <InputElements title="Guest Phone"
      name="phone"
      id="phone"
      type="text"
      onChange={AddValue}
      value={formData.phone}
      />
      <span className='w-[100%] flex justify-center' style={{color:color}}>{err}</span>
      <InputElements type="submit" value="Add" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
      <button className="text-white bg-red-500 p-2 hover:bg-blue-950 w-[100%]" onClick={ChangeState}>Close</button>
      
      </form>
      </div>
    </div>
  </div>
  )
}
