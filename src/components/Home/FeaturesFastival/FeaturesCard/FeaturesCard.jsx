import React from 'react'
import img from "../../../../assets/images/blog/b1.jpg"
import { FaFile, FaPage4 } from 'react-icons/fa'
export default function FeaturesCard(props) {
  return (
    <div>
      <div className="card flex flex-row gap-4 p-2 h-60 border-none group relative f-card overflow-hidden">
        <div className="imgBox w-56 relative overflow-hidden">
            <img src={props.img} alt="" className='h-[100%] rounded-lg object-cover group-hover:scale-150 transition ease-out duration-300'/>
        </div>
        <div className="textBox">
            <div className="name text-md font-bold hover:text-red-500">{props.name}</div>
            <div className="date flex text-sm font-semibold text-slate-600 lg:py-2 lg:place-items-center"> <FaFile/> {props.time} on {props.place}</div>
            <div className="tickets text-red-500 font-bold pb-1 lg:py-3">Tickets from ${props.price}</div>
            <div className="des text-slate-600 font-light text-sm lg:text-lg ">{props.des}</div>
            <button className='border p-1 mt-2 px-3 text-md text-slate-600 rounded-lg hover:bg-red-500 transition ease-in-out duration-500 hover:text-white'>Tickets & Details</button>
        </div>
      </div>
    </div>
  )
}
