import React, { useState } from 'react'
import InputElements from '../../../../../InputBox/InputElements'
import { useAuth } from '../../../../../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'
export default function Paypal(props) {
  const [Auth,setAuth]=useAuth()
  const user = Auth?.user
  const cartData = Auth?.cart
  const [err,setErr]=useState("")
  const [temp,setTemp]=useState({})
  const navigate = useNavigate()
 const [formData,setFormData]=useState({
        type:"",
        method:"",
        t_number:""
    })
    function AddValue(event)
    {
        const {name,value} = event.target
        setFormData({
            ...formData,
            [name]:value
        })
       
    }
   function SubmitData(event)
    {
        event.preventDefault()
       
        const {method,t_number} = formData
        if(method && t_number)
        {
        const newObj =
        {
            ...temp,
            userId:user._id,
            status:"Waitting",
            method:{
                ...formData
            }
        }
      
        fetch('https://eventcy-server-2.onrender.com/api/createorder',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                order:newObj
            })
        })
          const index = cartData.findIndex(data=>data.code===temp.code)
        cartData.splice(index,1)
        setAuth(prev=>{
            const newobj={
                ...prev,
                cart:cartData
            }
            localStorage.setItem("Auth",JSON.stringify(newobj))
            return newobj
        })
        navigate("/mass")
        console.log(newObj);
        setErr("Order Submit Successfully")
        }
        else
        {
            setErr("Please fill All Data")
        }
    }
  return (
    <div>
      <form onSubmit={SubmitData}>
            <div className="title">
                <h1 className='text-white'>{props.event.eventName} paypal email is {props.phone}</h1>
            </div>
            <InputElements placeholder="Your Paypal email" type="email" name="method" onChange={AddValue} />
            <InputElements placeholder="Transection Number " type="text" name="t_number" onChange={AddValue}/>
            <span className='w-[100%] flex justify-center text-white font-medium'>{err}</span>
             <div className="button w-[100%] flex justify-center place-items-center">
                
        <button className='py-2 px-7 text-red-500 bg-white rounded-lg text-center' onClick={()=>setTemp(props.event)}>Buy</button>
        </div>
        </form>
    </div>
  )
}
