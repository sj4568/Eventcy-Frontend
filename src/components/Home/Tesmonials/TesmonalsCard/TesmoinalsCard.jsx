import React from 'react'
import img from "../../../../assets/images/clients/c1.png"
export default function TesmoinalsCard(props) {
  return (
    <div className='card p-5 bg-red-500'>
      <div className="imgBox flex gap-3">
        <img src={props.img} className="w-16 h-16 object-cover" alt="" />
        <div className="data">
        <div className="name text-xl text-white font-bold">{props.name}</div>
        <div className="role">
            {props.role}
        </div>
        </div>
      </div>
      <div className="textBox">
        
        <div className="des lg:w-[70%] py-3 text-10 w-[100%] font-light">{props.des}</div>
        <div className="button">
            <button className='bg-white px-3 py-2 rounded-lg text-red-500'>Contect</button>
        </div>
      </div>
    </div>
  )
}
