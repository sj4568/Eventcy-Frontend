import React, { useState } from 'react'
import img from "../../../../../../../../assets/images/blog/b4.png"
import { Link } from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useAuth } from '../../../../../../../AuthContext/AuthContext'
export default function Ticket() {
    const [Auth, setAuth] = useAuth()
    const user = Auth?.user
    const userName = user?.fname
    const ticketData = Auth?.temp_ticket
    const ticket = ticketData?.data
    const data = Auth?.all_user
    const Buyer = data && data.filter(dat=>dat._id==ticket.id)[0]
    
    
    async function Download() {
        const component = document.querySelector("#ticket")
        
      await  html2canvas(component)
            .then(data => {
                const imgData = data.toDataURL("img/png")
                const doc = new jsPDF("p", "mm")
                const compWidth = doc.internal.pageSize.getWidth()
                const compHight = doc.internal.pageSize.getHeight()
                doc.addImage(imgData, "PNG", 0,50,compWidth,100)
                doc.save("ticket.pdf")
         })
    }
  return (
      <div className='ticket-container w-full lg:h-screen flex justify-center place-items-center my-3'>
          <div className="container-t lg:w-[70%] w-full p-3 shadow-lg">
              <div className="ticket w-full h-[300px]  flex  lg:flex-row bg-white" id='ticket'>
                  <div className="imgbox h-full w-full lg:w-[30%] relative">
                      <img src={img} alt="img" className=' w-full  h-full absolute top-0 left-0 object-cover' />
                  </div>
                  <div className="ticket-textbox px-2 flex flex-col lg:w-[70%]">
                      <h1 className='lg:text-5xl text-3xl  text-head text-orange-400 py-3 '>Congragulations</h1>
                      <h2 className='text-head lg:text-3xl text-xl pb-2'>{userName}</h2>
                      <h3>Amount Of ticket: {ticket?.amount}</h3>
                      <p>You are invited for <span className='text-xl font-bold'>{ticket?.eventName}</span>  on  <span className='text-xl font-bold'>{ticket?.date}</span>  at <span className='text-xl font-bold'>{ticket?.time}</span> at <span className='text-xl font-bold'>{ticket?.place}</span>  by <span className='text-xl font-bold'>{ Buyer && Buyer.fname}</span> . Please come before event date otherwise your ticket will expire on the exect date
                          enjoy your event by Eventcy .please print your ticket and go to event 
                      </p>
                      <div className="logo">Powerd by : <span className='text-head text-2xl text-red-500'>Eventcy</span></div>
                  </div>
              </div>
              <div className="button mt-3 flex gap-3">
                  <Link to="/" className='px-3 py-2 bg-red-400 text-white rounded-lg'>Home</Link>
                  <Link to="/profile" className='px-3 py-2 bg-blue-400 text-white rounded-lg'>Back</Link>
                  <button className='px-3 py-2 bg-green-400 text-white rounded-lg' onClick={Download}>Print</button>

                  
              </div>
          </div>
      
    </div>
  )
}
