import React from 'react'

export default function DataContainer(props) {
    const data = props.data
  
  return (
    <div className='w-[100%] lg:px-24 sm:px-2 py-2 gap-3 grid grid-cols-1 lg:grid-cols-2'>
        
      {data}
    </div>
  )
}
