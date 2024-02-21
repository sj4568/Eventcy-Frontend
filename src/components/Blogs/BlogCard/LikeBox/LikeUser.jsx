import React from 'react'
import img from "../../../../assets/images/clients/c1.png"
import LinkName from '../../../LinkName/LinkName'
export default function LikeUser(props) {
  return (
    <div className='flex gap-2 place-items-center'>
      <div className="imgBox">
        <img src={props.img} alt="" className='w-10 h-10 object-cover rounded-full' />
      </div>
      <div className="textBox">
        <LinkName Name={props.fname} id={props.id}/>
        <p className='text-sm'>User</p>
      </div>
    </div>
  )
}
