import React, { useState } from 'react'
import { FaMailBulk, FaMailchimp } from 'react-icons/fa'
import TesmoinalsCard from './TesmonalsCard/TesmoinalsCard'
import {Swiper,SwiperSlide} from "swiper/react"
import { Autoplay } from 'swiper/modules'
import data from './TesmonialsData'
export default function Tesmonials() {
    const [size,setSize]=useState(1024)
    window.addEventListener('resize',()=>{
       setSize(window.innerWidth)
    })
    const arr = data.map(dat=>{
        return <SwiperSlide>
            <TesmoinalsCard
            name={dat.name}
            img={dat.img}
            role={dat.role}
            des={dat.des}
            />
        </SwiperSlide>
    })
  return (
    <div className='tesmonials p-4'>
      <div className="headers flex gap-3 place-items-center p-4 px-7">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaMailBulk/>
            </span>
            <h1 className='text-2xl font-bold'>Tesmonials<span className='text-xl font-light'>/What people are says</span></h1>
        </div>
        <div className="tes-container p-7">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={size>650?2:1} 
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
    </div>
  )
}
