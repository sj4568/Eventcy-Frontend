import React, { useEffect, useState } from 'react'
import img from "../../../../../../../assets/images/blog/b1.jpg"
import AllData from '../../../../../../AllData/AllData'
import { useAuth } from '../../../../../../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'
export default function OrderContainer(props) {
    const data =props.data
    const {Users} = AllData()
    const user = Users.filter(dat=>dat._id===data.id)[0]
    console.log(user);
    const [Auth, setAuth] = useAuth()
    const navigate = useNavigate()
    const [color,setColor]=useState("")
    const [status,setStatus]=useState(data.status)
    useEffect(()=>{
    setColor(prev=>{
    if(status==="Accept")
    {
        return "green"
    }
    else
    {
        return "red"
    }
    })
    },[])
    function Cancel()
    {
        fetch(`https://eventcy-server-2.onrender.com/api/deleteorder/${props.id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        setStatus("Cencel")
    }
    function GetTicket()
    {
        setAuth(prev => {
            const newObj = {
                ...prev,
                temp_ticket:props
            }
            localStorage.setItem("Auth", JSON.stringify(newObj))
            return newObj
        })
        navigate("/ticket")
        

    }
  return (
    <div className='p-4 shadow-md rounded-md'>
     <div className="header flex justify-between mb-4">
        <div className="eventData flex gap-1">
       <div className="imgBox relative ">
        <img src={data.img} alt="img" className='h-14 w-20 object-cover'/>
       </div>
       <div className="textBox">
        <h1 className='text-lg font-semibold'>{data.eventName}</h1>
        <p className='text-sm font-extralight'>{user?.fname}</p>
       </div>
       </div>
       <div className="amount">
       <div className="amount">
        <span className='text-sm font-bold'>Amount: <span>{data.amount}</span>x<span>${data.price}</span></span>
       </div>
       <span className='text-sm font-semibold'>Net Price : ${data.netPrice}</span>
       </div>
     </div>
     <div className="status">
        <h1 className='text-xl'>Status : <span style={{color:color}}>{data.status}</span></h1>
     </div>
     <div className="methods flex flex-col mt-4">
        <span className='font-extralight'>Phone <span className=''>{data.method.method}</span></span>
        <span className='font-extralight'>Transiction Number {data.method.t_number}</span>
     </div>
     {data.status !== "Accept" &&<div className="button-section flex gap-3 mt-4">
        <button className='px-3 py-2 rounded-lg bg-blue-600 text-white'>Update Order</button>
         <button className='px-3 py-2 rounded-lg bg-red-600 text-white' onClick={Cancel}>Cencel Order</button>
     </div>
}
{
    data.status ==="Accept" && <div className="button-section flex gap-3 mt-4">
      
                  <button className='px-3 py-2 rounded-lg bg-red-600 text-white'>Delete Order</button>
                  <button className='px-3 py-2 rounded-lg bg-green-600 text-white' onClick={GetTicket}>Get Ticket</button>
     </div>
}
    </div>
  )
}
