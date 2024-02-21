import React from 'react'
import c1 from "../../../../../assets/images/clients/c1.png"
import LinkName from '../../../../LinkName/LinkName'
export default function UserComment(props) {
    
  return (
    <div className='comment flex place-items-start gap-2 py-2 px-2'>
      <div className="imgBox">
        <img src={props.img} alt="" className='w-10 h-10 object-cover rounded-full'/>
      </div>
      <div className="div -[60%]">
      <div className="des bg-slate-100 p-2 rounded-lg flex flex-col gap-1 w-[100%]">
        <LinkName Name={props.name} id={props.id}/>
        <p className='text-sm'>{props.text}</p>
      </div>
      <div className="button w-100% flex gap-4 px-3 text-sm text-slate-600">
        <span>20m</span>
        <span>Like</span>
        <span>Reply</span>

      </div>
      </div>
    </div>
  )
}
