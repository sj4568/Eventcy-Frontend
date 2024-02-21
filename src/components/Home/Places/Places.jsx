import React, { useEffect, useState } from 'react'
import { FaPlaceOfWorship } from 'react-icons/fa'
import {Swiper,SwiperSlide} from "swiper/react"
import PlaceCard from './PlaceCard/PlaceCard'
import { Autoplay } from 'swiper/modules'

import img7 from "../../../assets/images/explore/e4.jpg"
import data from './Placedata'
import { useAuth } from '../../AuthContext/AuthContext'
export default function Places() {
  const [size,setSize]=useState(1024)
 window.addEventListener('resize',()=>{
    setSize(window.innerWidth)
 })
 const [Auth,setAuth]=useAuth()
 const siz = Auth.page

const arr = data.map(dat=>{
    return( <SwiperSlide>
        <PlaceCard
        name={dat.name}
        img={dat.img}
        starnum={dat.starnum}
        halfstar={dat.halfstar}
        
        />
    </SwiperSlide>)
})
  return (
    <div className='services p-4'>
       <div className="headers flex gap-3 place-items-center p-4 px-7">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaPlaceOfWorship/>
            </span>
            <h1 className='text-2xl font-bold'>Book Place <span className='text-xl font-light'>/Book your place in little cost</span></h1>
        </div>
        <div className="place-container w-[100%] flex gap-3 overflow-hidde">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={size>1000?4:size<650?1:2} 
           autoplay={
            {
                delay:2000
            }
           }
         
   
            loop={true}
            
            >
               {arr}
            </Swiper>
        </div>
        <div className="button w-screen mt-3 flex justify-center p-0">
            <button className='bg-red-500 text-white px-3 py-2 hover:bg-blue-950 -ml-16 rounded-lg'>See More place</button>
        </div>
    </div>
  )
}
