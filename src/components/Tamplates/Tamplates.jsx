import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Cart from '../Events/Cart/Cart'
export default function Tamplates() {
  return (
    <div>
      <NavBar/>
      
      <Outlet/>
      <Footer/>
      <Cart/>
    </div>
  )
}
