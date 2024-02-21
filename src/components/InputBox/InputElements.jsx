import React from 'react'

export default function InputElements(props) {
  return (
    <div className='inputBox flex flex-col gap-2 py-2'>
      {props.title && <label htmlFor={props.id} className='font-bold relative px-3 before:absolute before:w-2 before:h-[100%] before:bg-red-500 before:left-0'>{props.title}</label>}
      <input className='py-2 px-3 bg-gray-200 text-slate-600 focus:outline-none' {...props}/>
    </div>
  )
}
