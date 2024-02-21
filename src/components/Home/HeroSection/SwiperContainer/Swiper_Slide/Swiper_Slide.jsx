import React, { useState } from 'react'
import img from "../../../../../assets/images/welcome-hero/banner.jpg"
import { Link } from 'react-router-dom'
export default function Swiper_Slide() {
  const [minutes,setMinutes]=useState(24)
  const [hours,setHours]=useState(50)
  const [secends,setSecends]=useState(60)
  const date = new Date()
  const menutes = date.getMinutes()
  const hour = date.getHours()
  const sec = date.getSeconds()
  
  setTimeout(()=>{
    setSecends(prev=>{
      let temp = 60-sec
     
      ;
      return temp
    })
    setHours(60-hour)
    setMinutes(60-menutes)
  },1000)

  return (
   
      <div className='hero h-screen w-screen'>
      <div className="h-screen relative w-screen">
        <div className="imgBox absolute w-screen h-screen bg-black  ">
          <img src={img} alt="" className='absolute w-screen h-screen object-cover'/>

        </div>
        <div className="layer absolute w-screen h-screen bg-black opacity-40"></div>
        <div className="textBox z-10 absolute w-screen h-screen grid place-items-center">
          <div className="opacity-100 grid place-items-center">
            <h1 className='text-white text-5xl font-extrabold uppercase text-center'>Big Fastibals Are Comeing</h1>
            <p className='text-white text-3xl lg:text-4xl py-7 font-light'>15 December at 2:00 - 21:00 </p>
            <div className="count-down flex justify-between rounded-sm">
              <div className='border-2 border-white sm:w-16 lg:w-32  h-auto relative flex flex-col rounded-l-lg'>
                <div className="text-white lg:text-3xl text-2xl px-3 font-bold grid place-items-center py-2 border border-white">
                  {hours}
                </div>
                <div className='text-white lg:text-3xl texy-2xl p-1 grid place-items-center'>
                  Hours
                </div>
              </div>
              <div className='border-2 border-white sm:w-16 lg:w-32 h-auto relative flex flex-col'>
                <div className="text-white lg:text-3xl text-2xl px-3 font-bold grid place-items-center py-2 border border-white">
                  {minutes}
                </div>
                <div className='text-white lg:text-3xl p-1 grid place-items-center'>
                  mintues
                </div>
              </div>
              <div className='border-2 border-white sm:w-16 lg:w-32 h-auto relative flex flex-col rounded-r-lg'>
                <div className="text-white lg:text-3xl text-2xl px-3 font-bold grid place-items-center py-2 border border-white ">
                  {secends}
                </div>
                <div className='text-white lg:text-3xl p-1 grid place-items-center pr-6'>
                  Secends
                </div>
              </div>
            </div>
            <div className="button">
            <Link to="/signup" className='btn w-56 bg-red-500 text-white mt-5 hover:bg-blue-950'>Resister</Link>
          </div>
          </div>
         
      </div>
        
      </div>
     
    </div>
   
  )
}
