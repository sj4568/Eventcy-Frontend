import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import {Navigation,Autoplay} from "swiper/modules"
import Swiper_Slide from './Swiper_Slide/Swiper_Slide'
import SwiperCore from 'swiper'
import SlideTwo from './Swiper_Slide/SlideTwo'
import SlideThree from './Swiper_Slide/SlideThree'
import SlideFour from './Swiper_Slide/SlideFour'
export default function SwiperContainer() {
  SwiperCore.use([Autoplay])

  return (
    <div>
      <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      
      loop={true}
      autoplay={{
        delay:5000
      }}
    >
      <SwiperSlide>
        <Swiper_Slide/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideTwo/>
      </SwiperSlide>
      
      
      <SwiperSlide>
      <SlideThree/>
      </SwiperSlide>
      <SwiperSlide>
      <SlideFour/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
