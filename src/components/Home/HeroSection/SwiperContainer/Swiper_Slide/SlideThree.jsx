import React from 'react'
import img from "../../../../../assets/images/welcome-hero/banner3.jpg"
export default function SlideThree() {
  return (
    <div className='hero h-screen w-screen'>
    <div className="h-screen relative w-screen">
      <div className="imgBox absolute w-screen h-screen bg-black  ">
        <img src={img} alt="" className='absolute w-screen h-screen object-cover'/>

      </div>
      <div className="layer absolute w-screen h-screen bg-black opacity-40"></div>
      <div className="textBox z-10 absolute w-screen h-screen grid place-items-center">
        <div className="opacity-100 grid place-items-center">
          <h1 className='text-white lg:text-5xl font-extrabold uppercase text-center text-3xl'>Your Any events we are with you</h1>
          <p className='text-white text-xl py-7 font-light text-center px-3'>Eventcy will support you in all events of your life.You can manage here your private or public events </p>
          
          <div className="button lg:flex lg:gap-9 lg:flex-row gap-2 flex flex-col">
          <button className='btn w-56 bg-red-500 text-white hover:bg-blue-950'>Invite People</button>
          <button className='btn w-56 bg-blue-950 text-white hover:bg-blue-900'>Enjoy Events</button>
        </div>
        </div>
       
    </div>
      
    </div>
   
  </div>
  )
}
