import React, { useEffect, useState } from 'react'
import dropdown from "bootstrap/js/dist/dropdown"
import { FaMailBulk } from "react-icons/fa"
import axios from 'axios'
import HeroSection from './HeroSection/HeroSection'
import FeaturesFastival from './FeaturesFastival/FeaturesFastival'
import Services from './Services/Services'
import Places from './Places/Places'
import Tesmonials from './Tesmonials/Tesmonials'
import Blogs from './Blogs/Blogs'
import TempEvent from './TempEvents/TempEvent'
import { useAuth } from '../AuthContext/AuthContext'
import AllData from '../AllData/AllData'



export default function Home() {
  const [Auth,setAuth]=useAuth()
  const { Users } = AllData()

  
  return (
        <div className="home">
          <HeroSection/>
          <FeaturesFastival/>
          <Services/>
          <Places/>
          <Tesmonials/>
          <Blogs/>
          <TempEvent/>
        </div>
  )
}
