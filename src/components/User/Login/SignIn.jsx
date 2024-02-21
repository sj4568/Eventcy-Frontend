import React, { useEffect, useState } from 'react'
import InputElements from '../../InputBox/InputElements'
import { FaInfo, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import AllData from '../../AllData/AllData'
import { useAuth } from '../../AuthContext/AuthContext'
import toast, { Toaster } from 'react-hot-toast'

export default function SignIn() {
  const {Users } = AllData()
    const navigate = useNavigate()
    const [formData,setFormData]=useState({
        email:"",
        pass1:""
        
    })
    const [Auth,setAuth]=useAuth()
 const users = Auth?.all_user
  function setData()
  {
    setAuth(prev => {
      const newObj = {
        ...prev,
        all_user:Users
      }
      localStorage.setItem("Auth", JSON.stringify(newObj))
      return newObj
    })
  }
  useEffect(() => { 
    setData()
  },[Users])
    const [err,setErr]=useState("")
    const [color,setColor]=useState("")
    function AddValue(event)
    {
        const {name,value}=event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    function SubmitData(event)
    {
        event.preventDefault()
        const {email,pass1}=formData
        if(email && pass1 )
        {
            const found = users.some(data=>data.email===email)
            if(found)
            {
                const user = users.filter(data=>data.email===email)
                const data = user[0]
          if(data.email===email && data.pass1===pass1)
          {
           
            setAuth(prev=>{
                const newObj={
                    ...prev,
                  user: data,
                    all_user:Users
                }
                localStorage.setItem("Auth",JSON.stringify(newObj))
                return newObj
            })
        
         
            console.log(Auth);
            setErr("Signin Successfully")
            
            setColor('green')
            navigate("/")
            
          }
          
          else
          {
            setErr("Password are not matched")
            setColor("red")
          }
        }
        else
        {
            setErr("Account dosent Exist")
            setColor("red")
        }
        }
        else
        {
          setErr("Please Fill all the data")
          setColor("red")
        }
    }
  return (
    <div className='events-form p-3'>
      <div className="form-container w-[100%] h-screen grid place-items-center">
        <div className="box w-auto flex flex-col">
        <div className="headers flex gap-3 place-items-center py-2">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaUser/>
            </span>
            <h1 className='text-2xl font-bold'> Log In Here <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
        </div>
        <form action="" className="form p-2" onSubmit={SubmitData}>
       
        <InputElements title="Email Address"
        name="email"
        id="email"
        type="email"
        onChange={AddValue}
        />
       
        <InputElements title="Password"
        name="pass1"
        id="pass1"
        type="password"
        onChange={AddValue}
        />
     
        <span className='flex w-[100%] justify-center' style={{color:color}}>{err}</span>
        <InputElements type="submit" value="Log In" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
        <span>If you have already an account <Link to="/signup" className='text-blue-500'>Sign Up </Link> Here</span>
        </form>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}
