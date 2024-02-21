import React, { useState } from 'react'
import { FaEject, FaEnvelopeOpen, FaLevelDownAlt, FaSearch } from 'react-icons/fa'
import InputElements from '../../../InputBox/InputElements'
import AllData from '../../../AllData/AllData'
import { useAuth } from '../../../AuthContext/AuthContext'

export default function SideBar() {
    const [Auth,setAuth]=useAuth()
    const [formData,setFormData]= useState({
        text:'',
        range:0,
        type:""
    })
    const {publicevents} = AllData()
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
        const Arr = publicevents.filter(data=>{
            
            const nameArr = data.name.split(" ")
            const place = data.place.split(",")
            const UserArr = data.userName.split(" ")
            const price = parseInt(data.price)
            if(formData.text)
            {
            for(let i of nameArr)
            {
                if(text.toLowerCase()===i.toLowerCase() || text.toLowerCase()===data.name.toLowerCase())
                {
                    if(formData.range !==0)
                    {
                        if(price<=formData.range)
                        {
                            return data
                        }

                    }
                    else
                    {
                        return data
                    }
                    
                }
               
            }
            for(let i of place)
            {
                if(text.toLowerCase()===i.toLowerCase() || text.toLowerCase()===data.place.toLowerCase() )
                {
                    if(formData.range !==0)
                    {
                        if(price<=formData.range)
                        {
                            return data
                        }

                    }
                    else
                    {
                        return data
                    }
                }
               
            }
            for(let i of UserArr)
            {
                if(text.toLowerCase()===i.toLowerCase() || text.toLowerCase()===data.userName.toLowerCase())
                {
                    if(formData.range !==0)
                    {
                        if(price<=formData.range)
                        {
                            return data
                        }

                    }
                    else
                    {
                        return data
                    }
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
                publicEvents:Arr
            }
            return newObj
        })
       
       
        
    }
    
  return (
    <div className='lg:w-[38%] w-[100%]  bg-red-500 shadow-md p-5'>
      <div className="headers flex gap-3 place-items-center py-4">
            <span className='bg-white p-3 rounded-lg text-red-500 text-xl'>
                <FaSearch/>
            </span>
            <h1 className='text-xl font-bold text-white'>Find Your Events<span className='text-xl font-light'>/Manage your events</span></h1>

        </div>
        <div className="search">
            <input type="search" name="text" id="text" placeholder='Search Events' className='p-2 rounded-md lg:w-[90%] w-[100%] focus:outline-none focus:border focus:border-red-500 focus:shadow-sm' onChange={AddValue} />
        </div>
        <div className="filter-section">
            <h1 className='text-white text-xl font-bold my-3'>Filter By </h1>
            <div className="filters">
                <div className="input-range flex flex-col lg:w-[90%]">
                    <label htmlFor="range" className='text-white font-semibold'>Ticket Price(${formData.range}) </label>
                    <input type="range" name="range" id="range" min={0} max={1000} onChange={AddValue}/>
                </div>
                <div className="checkbox flex gap-2 my-2">
                    <input type="radio" name="type" id="Buisness" value="Buisness" className='w-5' />
                    <label htmlFor="Buisness" className='text-white'>Buisness</label>
                </div>
                <div className="checkbox flex gap-2 my-2">
                    <input type="radio" name="type" id="Politics" value="Politics" className='w-5' />
                    <label htmlFor="Politics" className='text-white'>Politics</label>
                </div>
                <div className="checkbox flex gap-2 my-2">
                    <input type="radio" name="type" id="Music" value="Music" className='w-5' />
                    <label htmlFor="Music" className='text-white'>Music</label>
                </div>
                <div className="checkbox flex gap-2 my-2">
                    <input type="radio" name="type" id="Other" value="Other"  className='w-5' />
                    <label htmlFor="Other" className='text-white'>Other</label>
                </div>
                <button onClick={Filter} className='lg:w-[90%] w-[100%] py-2 bg-white text-red-500 rounded-lg font-bold'>Search</button>
            </div>
        </div>
    </div>
  )
}
