import React, { useState } from 'react'
import { FaArrowAltCircleDown, FaCartArrowDown, FaSearch } from 'react-icons/fa'
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from '../AuthContext/AuthContext'
import AllData from '../AllData/AllData'
import logo from "../../assets/images/Logo/Eventcy_logo.png"
export default function NavBar() {
  const [Auth,setAuth]=useAuth()
  const navaigate = useNavigate()
  const {PrivateEvents,publicevents,Blogs,guest,Users} = AllData()
  const Data = publicevents ? publicevents : []
  
  function searchbar()
  {
    document.getElementById("search").classList.toggle("w-lg")
    document.getElementById("search").classList.remove("w-0")
  }
  window.addEventListener('scroll',()=>{
    document.getElementById('nav-bottom').classList.toggle('fixed',scrollY>0)
  })
  const [extend,setExtend]=useState('h-20')
  const [hidden,setHidden]=useState('hidden')
  function setBlogs()
  {
    setAuth(prev=>{
      const newObj = {
        ...prev,
        temp_blogs:Blogs
      }
      localStorage.setItem("Auth",JSON.stringify(newObj))
      return newObj
    })
    navaigate("/blogs")
    
  }
  function AddUser() {
    setAuth(prev => { 
      const newObj = {
        ...prev,
        all_user:Users
      }
      localStorage.setItem("Auth", JSON.stringify(newObj))
      return newObj
    })
  }
  function Click()
  {
    setExtend(prev=>{
      if(prev=="h-20")
      {
        return "h-auto"
      }
      else
      {
        return "h-20"
      }
      
    })
    setHidden(prev=>{
      if(prev=="hidden")
      {
        return "flex"
      }
      else
      {
        return "hidden"
      }
      
    })
    
  }
  function LogOut()
  {
    localStorage.removeItem("Auth")
    setAuth({
      ...Auth,
      user:null
    })
    navaigate("/")
  }
  function AddData()
  {
    setAuth(prev=>{
      const newObj={
        ...prev,
        temp_events:PrivateEvents,
        temp_data:guest
      }
      console.log(PrivateEvents);
      
      console.log(newObj);
      localStorage.setItem("Auth",JSON.stringify(newObj))
      return newObj
    })
    
    navaigate("/events")
    
  }
  function PublicEventsData()
  {
    setAuth(prev=>{
      const newObj = {
        ...prev,
        publicEvents:publicevents.reverse()
      }
      localStorage.setItem("Auth",JSON.stringify(newObj))
      return newObj
    })
    navaigate("/publicevents")
    
  }
  function showCart()
  {
   setAuth({
    ...Auth,
    showCart:Auth.showCart==="block"?"hidden":"block"
   }) 
   
  }
  
  const navStyle=` navbar nav-bottom flex flex-col  lg:flex-row lg:justify-between py-3 z-10 w-screen px-4 bg-white lg:px-20 shadow-md place-items-start lg:place-items-center lg:h-auto ${extend} transition ease-in duration-500`
  const navItem = `nav-link flex-col justify-between gap-3 lg:flex-row uppercase ${hidden} lg:flex`
  return (
    <div className=" flex flex-col transition z-10 bg-white w-screen ease-in-out duration-300" onClick={AddUser}>
      <div id='nav-top' className="nav-bar-top  flex lg:flex-row justify-between border h-auto flex-col">
        <div className="top-left flex text-sm">
        <div className="op-1 border-gray-200 p-2 h-auto text-slate-500">
          <select className='focus:outline-none' >
            <option value="BN">BN</option>
            <option value="EN">EN</option>
          </select>
        </div>
        <div className="op-2 border border-gray-100 p-2 h-auto text-slate-500 ">
          <select className='focus:outline-none'>
            <option value="USD">USD</option>
            <option value="EURO">EURO</option>
          </select>
        </div>
        <div className="op-3 border border-gray-950 p-2 h-auto">
          <input type="text" placeholder='Search' id='search' className='w-0 h-lg focus:outline-none text-slate-500 transition ease-in-out duration-200'/>
          <button className='text-slate-500 font-light px-2' onClick={searchbar}><FaSearch/></button>
        </div>
        </div>
        <div className="top-right flex text-sm ">
          {Auth.user ? <>
            <Link className="nav-link border p-2 h-auto text-slate-500">{Auth.user.phone}</Link>
          <Link className="nav-link border p-2 h-auto text-slate-500" onClick={LogOut}>Logout</Link>
          <Link className="nav-link border p-2 h-auto text-slate-500" to="/profile">Profile</Link>
          </>:<>
          <Link className="nav-link border p-2 h-auto text-slate-500">+1 222 777 6565</Link>
          <Link className="nav-link border p-2 h-auto text-slate-500" to="/signin" onClick={AddUser}>Sign in</Link>
          <Link className="nav-link border p-2 h-auto text-slate-500" to="/signup">Register</Link>
          </>}
          
        </div>
      </div>
      <div id="nav-bottom" className={navStyle}>
      <button className="navbar-toggler fixed lg:hidden right-10 border" type="button" id='nav-toggler' onClick={Click}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="logo navbar-brand flex gap-1 place-items-center py-3 lg:py-0 text-red-600 text-2xl -mt-4 lg:-mt-0">
          <img src={logo} alt="logo" className='w-10' />
          Eventcy</div>
        <div className="nav-item ">
          <div className={navItem}>
            <Link className="nav-link  font-semibold relative group"><span className='hover:text-red-500'>Events</span>
            <ul className='lg:absolute w-24 leading-7 text-[10px] bg-white p-2 left-0 h-0 hidden capitalize group-hover:h-auto group-hover:block'>
              <li className='hover:bg-slate-500 hover:text-white'>
                <Link to="/createevent">Host Events</Link>
              </li>
                 <li className='hover:bg-slate-500 hover:text-white'>
                <Link onClick ={AddData} to="/events">Private Events</Link>
              </li>
              <li className='hover:bg-slate-500 hover:text-white'>
                <Link onClick={PublicEventsData} to="/publicevents">Join Events</Link>
              </li>
              <li className='hover:bg-slate-500 hover:text-white'>
                <Link>Manage Events</Link>
              </li>
            </ul>
            </Link>
            <Link className="nav-link  font-semibold relative group">
            <span className='hover:text-red-500'>Blog</span>
            <ul className='lg:absolute w-24 leading-7 text-[10px] bg-white p-2 left-0 h-0 hidden capitalize group-hover:h-auto group-hover:block'>
              <li className='hover:bg-slate-500 hover:text-white'>
                <Link to="/createblogs">Create Blogs</Link>
              </li>
              <li className='hover:bg-slate-500 hover:text-white'>
                <Link to="/blogs" onClick={setBlogs}>Show Blogs</Link>
              </li>
              <li className='hover:bg-slate-500 hover:text-white'>
                <Link>Manage Blogs</Link>
              </li>
            </ul>
            </Link>
            <span className="nav-link hover:text-red-500 font-semibold text-xl" onClick={showCart}><FaCartArrowDown className=''/></span>
            <Link to="/contect" className="nav-link hover:text-red-500 font-semibold">Contect</Link>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}
