import React from 'react'
import img from "../../../../../assets/images/welcome-hero/banner4.jpg"
export default function SlideFour() {
  return (
    <div className='hero h-screen w-screen'>
    <div className="h-screen relative w-screen">
      <div className="imgBox absolute w-screen h-screen bg-black  ">
        <img src={img} alt="" className='absolute w-screen h-screen object-cover'/>

      </div>
      <div className="layer absolute w-screen h-screen bg-black opacity-40"></div>
      <div className="textBox z-10 absolute w-screen h-screen grid place-items-center">
        <div className="opacity-100 grid place-items-center">
          <h1 className='text-white text-5xl font-extrabold uppercase text-center'>We are events proffetionals</h1>
          <p className='text-white text-2xl py-7 font-light text-center'>Eventcy will manage your events proffetionally  </p>
          
          <div className="button lg:flex lg:gap-0 lg:flex-row gap-2 flex flex-col ">
          <input type="text" className='px-16 rounded-lg py-2 lg:rounded-r-none ' placeholder='Search'/>
          <button className='btn lg:w-24 bg-blue-950 text-white lg:rounded-r-lg lg:rounded-l-none w-100'>Search</button>
        </div>
        </div>
       
    </div>
      
    </div>
   
  </div>
  )
}
