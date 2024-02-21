import React, { useState } from 'react'
import { FaEject, FaEnvelopeOpen, FaLevelDownAlt, FaSearch } from 'react-icons/fa'

import AllData from '../../AllData/AllData'
import { useAuth } from '../../AuthContext/AuthContext'

export default function BlogSideBar() {
    const [Auth,setAuth]=useAuth()
    const [formData,setFormData]= useState({
        text:'',
    
    })
    const {Blogs} = AllData()
    function AddValue(event)
    {
        const {name,value}=event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    function Filter()
    {
        const text = formData.text
        const Arr = Blogs.filter(data=>{
            
            const nameArr = data.name.split(" ")
           
            const UserArr = data.userName.split(" ")
            const price = parseInt(data.price)
            if(formData.text)
            {
            for(let i of nameArr)
            {
                if(text.toLowerCase()===i.toLowerCase() || text.toLowerCase()===data.name.toLowerCase())
                {
                    return data
                    
                }
               
            }
          
            for(let i of UserArr)
            {
                if(text.toLowerCase()===i.toLowerCase() || text.toLowerCase()===data.userName.toLowerCase())
                {
                 return data
                }
               
            }
        }else
        {
            return data
        }
            
        })
        setAuth(prev=>{
            const newObj={
                ...prev,
                temp_blogs:Arr
            }
            return newObj
        })
       
       
        
    }
    
  return (
    <div className='lg:w-[38%] w-[100%] lg:h-[100vh] bg-red-500 shadow-md p-5'>
      <div className="headers flex gap-3 place-items-center py-4">
            <span className='bg-white p-3 rounded-lg text-red-500 text-xl'>
                <FaSearch/>
            </span>
            <h1 className='text-xl font-bold text-white'>Find Your Events<span className='text-xl font-light'>/Manage your events</span></h1>

        </div>
        <div className="search">
            <input type="search" name="text" id="text" placeholder='Search Events' className='p-2 rounded-md lg:w-[90%] w-[100%] focus:outline-none focus:border focus:border-red-500 focus:shadow-sm' onChange={AddValue} />
        </div>
        <div className="filter-section mt-2">
           
            <div className="filters">
              
           
                <button onClick={Filter} className='lg:w-[90%] w-[100%] py-2 bg-white text-red-500 rounded-lg font-bold'>Search</button>
            </div>
        </div>
    </div>
  )
}
