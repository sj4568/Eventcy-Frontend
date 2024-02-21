import React, { useEffect, useState } from 'react'
import { useAuth } from '../AuthContext/AuthContext'


export default function AllData() {
  const [Auth,setAuth]=useAuth()
    const [Users,setUsers]=useState([])
    const [PrivateEvents,setPrivateEvents]=useState([])
    const [guest,setGuest]=useState([])
    const [publicevents,setPublicEvents]=useState([])
    const [Blogs,setBlogs]=useState([])
    const [Order,setOrder]=useState([])
    async function FetchData()
    {
        await fetch("https://eventcy-server-2.onrender.com/api/getusers")
         .then(res=>res.json())
         .then(data=>setUsers(data))
         await fetch("https://eventcy-server-2.onrender.com/api/privateevents")
         .then(res=>res.json())
         .then(data=>setPrivateEvents(data))
         await fetch("https://eventcy-server-2.onrender.com/api/getguest")
         .then(res=>res.json())
         .then(data=>setGuest(data))
         await fetch("https://eventcy-server-2.onrender.com/api/getpublicevents")
         .then(res=>res.json())
         .then(data=>setPublicEvents(data))
         await fetch("https://eventcy-server-2.onrender.com/api/getblogs")
         .then(res=>res.json())
         .then(data=>setBlogs(data))
         await fetch("https://eventcy-server-2.onrender.com/api/getorder")
         .then(res=>res.json())
         .then(data=>setOrder(data))
    }
    useEffect(()=>{
        FetchData()
    }, [])
  
  return {Users,PrivateEvents,guest,publicevents,Blogs,Order}
}
