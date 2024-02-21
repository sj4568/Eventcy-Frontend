import React from 'react'

export default function TempEvent() {
  return (
    <div className='w-screen bg-red-500 p-2'>
      <div className="container flex justify-center place-items-center flex-col p-5 gap-4">
        <div className="words uppercase lg:text-4xl  text-xl text-center text-white">
            For Enjoying Our more Features plase Join or host events
        </div>
        <div className="buttons flex gap-3 place-items-center justify-center w-[100%]">
            <button className="btn bg-white text-red-500">Host Event</button><button className="btn bg-white text-red-500">Join Events</button>
        </div>
      </div>
    </div>
  )
}
