import React from 'react'
import img from "../../../../assets/images/blog/b1.jpg"
import { FaStar, FaStarHalf } from 'react-icons/fa'
export default function PlaceCard(props) {
    const arr=[]
    for(let i =0;i<props.starnum;i++)
    {
        arr.push(<FaStar/>)
    }
  return (
    <div className='card shadow-md mx-2 lg:h-[400px] group'>

      <div className="card-img-top relative h-[50%] overflow-hidden">
        <div className="shade absolute w-screen h-[100%] left-0 top-0 hidden bg-red-600 z-[1] opacity-50 group-hover:grid place-items-center">
            
        </div>
        <div className="but z-[5] absolute w-[100%]  top-0 left-0 h-[100%] translate-y-32 transtion ease-in-out duration-700 group-hover:-translate-y-0 flex justify-center place-items-center">
        <button className='px-3 py-2 text-white rounded-lg  border border-white '>Learn More</button>
        </div>
        <img src={props.img} alt="" className='rounded-t-md group-hover:scale-110 lg:absolute w-screen h-48 object-cover' />
      </div>
      <div className="card-body">
        <div className="card-text ">
            <div className="name text-xl font-bold pb-2">{props.name}</div>
            <div className="star flex text-yellow-400">{arr}{props.halfstar?<FaStarHalf/>:""}</div>
            <div className="des text-sm py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, soluta.</div>
            <div className="button">
                <button className='btn border px-4 text-slate-400 font-semibold hover:bg-gray-600 hover:text-white'>Book</button>
            </div>
        </div>
      </div>
    </div>
  )
}
