import React from 'react'
import { FaMailBulk } from 'react-icons/fa'

export default function InfoCard(props) {
  return (
    <div className='flex justify-center place-items-center lg:px-2 py-1 lg:text-2xl gap-2'>
      <div className="icon text-red-500">
        {props.icon}
          </div>
          <div className="text px-3 py-2 relative before:absolute before:w-[1%] before:h-[100%] before:left-0 before:top-0 before:bg-red-500">
              {props.text}
          </div>
    </div>
  )
}
