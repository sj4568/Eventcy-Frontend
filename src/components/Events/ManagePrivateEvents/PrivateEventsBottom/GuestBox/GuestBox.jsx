import React, { useEffect, useState } from 'react'
import { FaCommentAlt, FaEdit, FaMailBulk, FaPhone, FaTrashAlt, FaWhatsapp } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import AllData from '../../../../AllData/AllData'
import { useAuth } from '../../../../AuthContext/AuthContext'
import GuestUpdate from '../GuestForm/GuestUpdate'

export default function GuestBox(props) {
    const navigate = useNavigate()
   const {guest} = AllData()
   const [Auth,setAuth] = useAuth()
   const events = Auth?.privateEvent
   const events_name = events?.event_name
  
   const current = Auth?.privateEvent
   const id = current?.rand_id
   const Fname = events?.fname
   const email = events?.email
   const temp = guest.filter(data=>data._id===props.group)[0]
   const G_index = guest.findIndex(data=>data.id===id)

   const Temp_guest = temp?temp.guest:[]
   const user = Temp_guest.filter(data=>data.code===props.code)[0]
 ;
   const index =Temp_guest? Temp_guest.findIndex(data=>data.code===props.code):0
  console.log(props);
   
   function Email(event)
   {
    event.preventDefault()
    Temp_guest[index]={
    ...user,
    status:"Accept"
   }
   const value = `<form action='https://eventcy-server-2.onrender.com/api/authguest/${props.group}' method="post" style="display: flex; flex-direction: column; width: 100%; height: auto; place-items: center;">
   <h1 >${props.name} </h1>your are has been invited for ${events_name} from ${Fname}
   <input type='text' name='data' value='${JSON.stringify({...temp,guest:Temp_guest})}' style='display:none'>
   <button>Accept</button>
</form>`
console.log(value);
    
    window.Email.send({
    Host : "smtp.elasticemail.com",
    Username : "masom3456@gmail.com",
    Password : "D9FE4B7BEC4DFE5CF2CC99297225362D05A7",
    To :`${props.email}`,
    From :`masom3456@gmail.com`,
    Subject : "This is the subject",
    Body : value
    }).then(
    message => alert("Email Send Successfully")
    );
   }
   function del()
   {
    Temp_guest.splice(index,1)
    fetch(`https://eventcy-server-2.onrender.com/api/updateguest/${props.group}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({...temp,guest:Temp_guest})
    })
    console.log(Temp_guest);
    setAuth(prev=>{
        guest[G_index]={...temp,guest:Temp_guest}
        const newObj={
            ...prev,
            temp_guest:guest,
            temp_guests:Temp_guest
        }
        localStorage.setItem("Auth",JSON.stringify(newObj))
        return newObj
    })
    
    alert("Data delete successfully")
   }
   function ChangeState()
   {
    props.change()
   }
   const [color,setColor]=useState("")
    useEffect(()=>{
        if(props.status=="Accept")
        {
            setColor("green")
        }
        else
        {
            setColor("red")
        }
    },[])
    function late()
    {
        setTimeout(()=>{
             navigate("/updateguest")

        },500)
    }
    function Update()
    {
        setAuth(prev=>{
            const newObj = {
                ...prev,
                update_guest:user
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
       
        late()

    }
    const call =`tel:${props.phone}`
  return (
    <div className='flex justify-around lg:px-4 lg:py-3 px-2 py bg-white text-[10px] lg:text-sm font-semibold lg:text-[14px]'>
        <div className='flex place-items-center gap-1 w-[100%] justify-center '>{props.name}</div>
        <div className='flex place-items-center gap-1 w-[100%] justify-center ' style={{color:color}}>{props.status}</div>
        <div className='flex place-items-center gap-0 text-md w-[100%] justify-center flex-col'>
            <div className=''>{props.phone}</div>
            <div className='hidden lg:block'>{props.email}</div>
        </div>
        <div className='flex place-items-center gap-1 w-[100%] justify-center '>
              <a className='p-1 bg-red-500 text-white rounded-md' href={call}><FaPhone/></a>
            <Link className='p-1 bg-red-500 text-white rounded-md' onClick={Email}><FaMailBulk/></Link>
            <Link className='p-1 bg-red-500 text-white rounded-md'><FaCommentAlt/></Link>
        </div>
        <div className='flex place-items-center gap-1 w-[100%] justify-center '>
            <button className='p-1 bg-red-500 text-white rounded-md' onClick={Update}><FaEdit/></button>
            <button className='p-1 bg-red-500 text-white rounded-md' onClick={del}><FaTrashAlt/></button>
        </div>
        
      </div>
  )
}
