import React from 'react'
import img from "../../../../../assets/images/welcome-hero/banner2.jpg"
import { Link } from 'react-router-dom'
export default function SlideTwo() {
  return (
    <div className='hero h-screen w-screen'>
    <div className="h-screen relative w-screen">
      <div className="imgBox absolute w-screen h-screen bg-black  ">
        <img src={img} alt="" className='absolute w-screen h-screen object-cover'/>

      </div>
      <div className="layer absolute w-screen h-screen bg-black opacity-40"></div>
      <div className="textBox z-10 absolute w-screen h-screen grid place-items-center">
        <div className="opacity-100 grid place-items-center">
          <h1 className='text-white text-4xl font-extrabold uppercase text-center'>Grow Up Your community By manageing events</h1>
          <p className='text-white text-2xl py-7 font-light text-center px-3'>Increase your buissness and community by manage your buissnass by Eventcy </p>
          
          <div className="button lg:flex lg:gap-9 lg:flex-row gap-2 flex flex-col">
          <Link to="/createevent" className='btn w-56 bg-red-500 text-white hover:bg-blue-950'>Host Events</Link>
          <Link to="/publicevents" className='btn w-56 bg-blue-950 text-white hover:bg-blue-600'>Join Events</Link>
        </div>
        </div>
       
    </div>
      
    </div>
   
  </div>
  )
}
