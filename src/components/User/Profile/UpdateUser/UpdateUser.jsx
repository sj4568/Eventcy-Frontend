import React, { useState } from 'react'
import InputElements from '../../../InputBox/InputElements'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../AuthContext/AuthContext'
import axios from 'axios'
export default function UpdateUser() {
    const [Auth,setAuth]=useAuth()
    const user = Auth?.user
    const [color, setColor] = useState("")
    const [err, setErr] = useState("")
    const [pro,setPro]=useState(user.img)
    const [formData,setFormData]=useState({
        fname:user.fname,
        email:user.email,
        phone: user.phone,
        
    })
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
         .then(res=>setPro(res.data.secure_url))
         .catch(err=>console.log(err))
    }
    function SubmitData(event)
    {
        event.preventDefault()
        const {fname,email,phone} = formData
        if(fname && email && phone)
        {
            const Obj =
            {
                ...user,
                ...formData,
                img:pro
            }
            fetch(`https://eventcy-server-2.onrender.com/api/updateuser/${user._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(Obj)
            })
           
            setAuth(prev=>{
                const newObj ={
                    ...prev,
                    user:Obj
                }
                localStorage.setItem("Auth",JSON.stringify(newObj))
                return newObj
            })
            console.log(pro);
            setErr("Update successfully")
            setColor("green")
        }
        else
        {
            setErr("Fill All Data")
            setColor("red")
        }
    }
    
  return (
    <div>
       <div className='events-form p-3'>
      <div className="form-container w-[100%]  grid place-items-center">
        <div className="box w-auto flex flex-col justify-center place-items-center">
        <div className="headers flex gap-3 place-items-center py-2">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaUser/>
            </span>
            <h1 className='text-2xl font-bold'> Update User <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
        </div>
        <form action="" className="form p-2" onSubmit={SubmitData}>
        <InputElements
        title="Full Name"
        name="fname"
        id="fname"
        type="text"
        onChange={AddValue}
        value={formData.fname}
        />
       
        <InputElements title="Email Address"
        name="email"
        id="email"
        type="email"
        onChange={AddValue}
        value={formData.email}
        />
        <InputElements
            title="Phone"
            name="phone"
            id="phone"
            type="text"
            onChange={AddValue}
            value={formData.phone}
                          />
            <div className="imgBox w-[300px] flex justify-center place-items-center  h-[300px]">
             <img src={pro} alt="" className='w-full h-full rounded-full ' />                 
            </div>
             <InputElements
            title="profile pic"
            name="file"
            id="file"
            type="file"
            onChange={AddValue}
            
        />

        <span className='flex w-[100%] justify-center' style={{color:color}}>{err}</span>
        <InputElements type="submit" value="Update" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
      
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}
