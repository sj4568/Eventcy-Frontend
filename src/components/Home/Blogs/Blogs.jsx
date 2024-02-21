import React, { useState } from 'react'
import { FaNewspaper, FaPage4 } from 'react-icons/fa'
import BlogsCard from './BlogsCard/BlogsCard'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
export default function Blogs() {
    const [size,setSize]=useState(1024)
    window.addEventListener('resize',()=>{
       setSize(window.innerWidth)
    })
  return (
    <div className='blogs p-4 pb-6'>
      <div className="headers flex gap-3 place-items-center p-4">
            <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
                <FaNewspaper/>
            </span>
            <h1 className='text-2xl font-bold'>Recent Blog Post <span className='text-xl font-light'>/Get new News</span></h1>
        </div>
        <div className="blog-container p-2 ">
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
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
               <SwiperSlide>
               <BlogsCard/>
               </SwiperSlide>
            </Swiper>
        </div>
        <div className="button w-screen grid place-items-center ">
            <Link to="/blogs" className="btn -ml-24 bg-red-500 text-white hover:border hover:border-red-500 ">See more Blogs</Link>
        </div>
    </div>
  )
}
