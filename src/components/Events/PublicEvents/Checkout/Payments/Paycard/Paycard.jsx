import React, { useState } from 'react'

export default function Paycard(props) {
    const [show,setShow]=useState("hidden")
    function Show()
    {
        setShow(prev=>{
            if(prev==="hidden")
            {
                return "block"
            }
            else
            {
                return "hidden"
            }
        })
    }
    const desStyle=`des bg-red-500 p-3 ${show} transition ease-in-out duration-500`
  return (
    <div className='transition ease-in-out duration-500'>
      <div className="title flex flex-row  gap-2 place-items-center">
        <input type="radio" className='w-5 h-5' name='type' id={props.title} value={props.title} onChange={()=>props.change()}/>
        <label htmlFor={props.title} className='font-bold text-xl' onClick={Show}>{props.title}</label>
      </div>
      <div className={desStyle}>
        {props.des}
       
      </div>
    </div>
  )
}
