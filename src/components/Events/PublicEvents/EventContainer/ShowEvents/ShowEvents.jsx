import React, { useState } from 'react'
import img from "../../../../../assets/images/blog/b1.jpg"
import c1 from "../../../../../assets/images/clients/c1.png"
import { useAuth } from '../../../../AuthContext/AuthContext'
import RelatedEvents from './RelatedEvents'
import { toast } from 'react-toast'
export default function ShowEvents(props) {
    const [Auth,setAuth]=useAuth()
    const events = Auth?.temp_event
    const cart = Auth?Auth.cart:[]
    const Cart = cart?cart:[]
    const [amount,setAmount]=useState(0)
    function addValue(event)
    {
        const {value}=event.target
        setAmount(value)
       
    }
    function Buy()
    {
        if(amount>0)
        {
            const rand_id = Math.floor(Math.random()*10000)
            const newObj = {
                img:events.eventImg,
                userName :events.userName,
                eventName:events.name,
                price:events.price,
                amount:amount,
                netPrice:parseInt(events.price)*amount,
                code:rand_id,
                id:events.id,
                userId: events.userId,
                date: events.date,
                time: events.time,
                place:events.place
            }
            console.log(events);
            
            const Arr =[...Cart,newObj]
            setAuth(prev=>{
                const newObj={
                    ...prev,
                    cart:Arr
                }
                localStorage.setItem("Auth",JSON.stringify(newObj))
                console.log(newObj);
                return newObj
            })
             toast.success("Order submited sucessfully")
        }
       
    }
  return (
    <div className='show-events overflow-y-auto' >
        <div className="event-container w-[100%] lg:h-[60vh] p-3 flex justify-center flex-col lg:flex-row place-items-center gap-4">
        
      <div className="imgBox lg:w-[30%] w-[100%] h-[50vh] relative">
        <img src={events.eventImg} alt="" className=' absolute w-[100%] h-[100%] shadow-lg object-cover'/>
      </div>
        <div className="textBox lg:w-[50%]">
            <div className="user flex place-items-center gap-3 h-[100%]">
                <img src={events.userImg} alt="" className='w-10 h-10 object-cover'/>
                <div className="ditails">
                    <h1 className='text-md font-semibold'>{events.userName}</h1>
                    <p className='text-[10px]'>Posted on {events.postedTime}</p>
                </div>
            </div>
            <h1 className='text-3xl font-bold py-4'>{events.name}</h1>
            <div className="time">
                <span className='font-bold text-slate-400 py-2'>{events.time} at {events.date} in {events.place}e</span>
            </div>
            <div className="ticket-price font-bold text-lg text-red-500">
                Ticket Price is ${events.price}
            </div>
            <div className="des lg:pr-10">
               {events.des}
            </div>
            <div className="buy-box flex gap-2 py-4 ">
                <input type="number" className=' w-14 p-2 border border-red-500' onChange={addValue}/>
                <button className='p-2 bg-red-500 text-white ' onClick={Buy}>Add to cart</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}
