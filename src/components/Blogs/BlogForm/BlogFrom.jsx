import React, { useState } from 'react'
import img from "../../../assets/images/blog/b1.jpg"
import { FaInfo, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import InputElements from '../../InputBox/InputElements'
import { useAuth } from '../../AuthContext/AuthContext'
import axios from 'axios'

export default function BlogForm() {
    const navigate = useNavigate()
    
    const [image,setImage]=useState("")
    
    const [formData,setFormData]=useState({
        name:"",
        des:"",
     
 
        
    })
    const [Auth,setAuth]=useAuth()
    const user = Auth?.user
    const events = Auth?.publicEvents
    const user_name = user?.fname
    const user_img = user?.img
    const id = user?._id
    const [err,setErr]=useState("")
    const [color,setColor]=useState("")
    const blog = Auth?.temp_blogs
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
        const {name,des} = formData
        if(name && des)
        {

        const Data = {
            ...formData,
            userName:user_name,
            userImg:user_img,
            postedTime:Dat.toDateString(),
            blogImg:image,
            userId:id,
            like:0,
            comment:[],
            share:0

        }
        fetch("https://eventcy-server-2.onrender.com/api/createblogs",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(Data)
        })
        setAuth(prev=>{
            const newObj = {
                ...prev,
                temp_blogs:[...blog,Data]
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
        navigate("/blogs")
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
    <div className='events-form p-3 flex justify-center place-items-center w-[100%]'>
      <div className="form-container lg:w-[40%] grid place-items-center">
        <div className="box w-auto flex flex-col">
        <div className="headers flex gap-3 place-items-center py-2">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaUser/>
            </span>
            <h1 className='text-2xl font-bold'> Create Blogs <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
        </div>
        <form action="" className="form p-2" onSubmit={SubmitData}>
       
        <InputElements title="Blog Name"
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
        <div className="img w-[100%]">
            <img src={image} className='' alt="" />
        </div>
        <div className="text">
        <label htmlFor="" className='text-lg font-bold px-2'>Descreption</label>
        <textarea name="des" id="des" rows={4} className='w-[100%] bg-gray-100 p-2' placeholder='Messege' onChange={AddValue}>

        </textarea>
        </div>
        <span className='flex w-[100%] justify-center' style={{color:color}}>{err}</span>
        <InputElements type="submit" value="Create Blog" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
      
        </form>
        </div>
      </div>
    </div>
  )
}
