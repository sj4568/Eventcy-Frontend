import React from 'react'
import { FaCalendar } from 'react-icons/fa'

export default function ServiceCard(props) {
  return (
    <div className='card border-none bg-transparent py-5 flex justify-center px-4 place-items-center text-center'>
      <div className="icon  flex justify-center bg-gray-400 p-8 rounded-xl mb-3 text-5xl transition ease-out duration-300 hover:bg-red-500 hover:text-white">{props.icon}</div>
      <div className="name text-black text-xl font-bold uppercase">{props.name}</div>
      <hr />
      <div className="des font-light text-sm py-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam fugiat recusandae deserunt porro facilis.</div>
      <div className="btn-sec px-3 py-2 rounded-lg text-slate-500 border hover:bg-slate-500 hover:text-white"><button>Details</button></div>
    </div>
  )
}
