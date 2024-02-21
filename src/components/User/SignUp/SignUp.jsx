import React, { useState } from 'react'
import InputElements from '../../InputBox/InputElements'
import { FaInfo, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import AllData from '../../AllData/AllData'
import axios from 'axios'
import { toast } from 'react-toast'

export default function SignUp() {
  const navigate = useNavigate()
  const [image,setImage]=useState("")
    const [formData,setFormData]=useState({
        fname:"",
        email:"",
        phone:"",
        pass1:"",
        pass2:"",
        
    })
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
    const {Users} =AllData()
    function SubmitData(event)
    {
        event.preventDefault()
        const {fname,email,phone,pass1,pass2}=formData
        if(fname && email && phone && pass1 && pass2 )
        {
          if(pass1===pass2)
          {
            const found = Users.some(data=>data.email===email)
            if(found)
            {
              setErr("Account Already Exist")
              setColor("red")
            }
            else{
              const obj = {...formData,img:image}
            fetch("https://eventcy-server-2.onrender.com/api/saveuser",{
              headers:{
                "Content-Type":"application/json"
              },
              method:"POST",
              body:JSON.stringify(obj)
            })
            setErr("SignUp Successfully")
            setColor('green')
            console.log(obj);
            navigate("/signupmass")
          }
                    
          }
          
          else
          {
            setErr("Password are not matched")
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
      <div className="form-container w-[100%] grid place-items-center">
        <div className="box w-auto flex flex-col">
        <div className="headers flex gap-3 place-items-center py-2">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaUser/>
            </span>
            <h1 className='text-2xl font-bold'> Create an Account  <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
        </div>
        <form action="" className="form p-2" onSubmit={SubmitData}>
        <InputElements title="Full Name"
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
        <InputElements title="Profile Image"
        name="img"
        id="img"
        type="file"
        onChange={AddValue}
        />
        <InputElements title="Phone Number"
        name="phone"
        id="phone"
        type="text"
        onChange={AddValue}
        />
        <InputElements title="Password"
        name="pass1"
        id="pass1"
        type="password"
        onChange={AddValue}
        />
        <InputElements title="Confirmed Password"
        name="pass2"
        id="pass2"
        type="password"
        onChange={AddValue}
        />
        <span className='flex w-[100%] justify-center' style={{color:color}}>{err}</span>
        <InputElements type="submit" value="Sign Up" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
        <span>If you have already an account <Link to="/signin" className='text-blue-500'>Sign In </Link> Here</span>
        </form>
        </div>
      </div>
    </div>
  )
}
