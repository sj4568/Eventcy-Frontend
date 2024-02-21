import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DataContainer from './Conainer/DataContainer'
import AllData from "../../../AllData/AllData"
import { useAuth } from '../../../AuthContext/AuthContext'
import List from '../../../Events/EventList/List'
import BlogCard from '../../../Blogs/BlogCard/BlogCard'
import EventCard from '../../../Events/PublicEvents/EventContainer/EventCard/EventCard'
import ProfileEventCard from './Conainer/ProfileEventCard/profileCar'
import OrderContainer from './Conainer/Order/OrderContainer/OrderContainer'
import RecevedOrder from './Conainer/Order/OrderContainer/RecevedOrder'
export default function UserDetails() {
  const { PrivateEvents,Blogs,publicevents,Order } = AllData()
  const privateEvents = PrivateEvents ? PrivateEvents : []
  const [Auth, setAuth] = useAuth()
  const id = Auth?.temp_user
  
  const Data = Auth?.temp_items
  const privateData = PrivateEvents.filter(data => data.id === id)
  const blogsData = Blogs.filter(data => data.userId === id)
  const publicData = publicevents.filter(data => data.id === id)
  const tempOrder = Order.filter(data=>{
    const order = data?data.order:{}
    if(order.userId===id)
    {
      return data.order
    }
  })
  const revOrder = Order.filter(data=>{
    const order = data?data.order:{}
    if(order.id===id)
    {
      return data.order
    }
  })
  const OrderArr = tempOrder.map(dat=>{
    return <OrderContainer
    id={dat._id}
    data={dat.order}
    />
  })
  const recevedOrder = revOrder.map(dat=>{
    return <RecevedOrder
    id={dat._id}
    data={dat.order}
    />
  })
  const publicArr = publicData.map(data => {
    return <ProfileEventCard data={data } />
  })
  const blogsArr = blogsData.map(data => {
    return <BlogCard data={data } />
  })
  const privateArr = privateData.map(data => {
    return <List data={data} />
  })
  const [data,setData]=useState(privateArr)
  let arr = privateArr
  function Change(text)
  {
    setData(prev =>
    {
      if (text === "private")
      {
        return privateArr
      }
      else if (text === 'public')
      {
        return publicArr
      }
      else if (text === 'blog')
      {
        return blogsArr
      }
       else if(text=="order")
      {
        return OrderArr
      }
       else if(text=="receved")
      {
        return recevedOrder
      }
      })
     
    
   
    
  }
  
  return (
    <div className='details'>
      <div className="nav-section w-[100%] flex justify-evenly py-4">
        
              <button className='lg:text-xl text-[12px] font-bold text-red-500  hover:border-b-2 hover:border-b-red-500 py-2' onClick={()=>Change("public")}>Public Events</button>
              <button className='lg:text-xl text-[12px] font-bold text-red-500  hover:border-b-2 hover:border-b-red-500 py-2' onClick={()=>Change("blog")}>Blogs</button>
              
      </div>
      <DataContainer data={data} />
    </div> 
  )
}
