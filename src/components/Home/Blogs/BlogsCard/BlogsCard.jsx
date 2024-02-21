import React from 'react'
import BlogImg from "../../../../assets/images/blog/b1.jpg"
import client_img from "../../../../assets/images/clients/c1.png"
import { FaComment, FaCommentAlt, FaHeart, FaRegHeart, FaShare } from 'react-icons/fa'
export default function BlogsCard() {
  return (
    <div>
      <div className='card border-none mx-2 lg:h-[400px] group shadow-md'>

<div className="card-img-top relative h-[50%] overflow-hidden rounded-lg">
 
  <img src={BlogImg} alt="" className='rounded-md group-hover:scale-110 lg:absolute w-screen h-48 object-cover' />
</div>
<div className="card-body">
  <div className="card-text ">
      <div className="flex gap-3 place-items-center">
        <div className="client-img">
            <img src={client_img} alt="" className='w-12 h-12 rounded-full'/>
        </div>
        <div className="details">
            <h1 className='font-bold'>Mr Hoven</h1>
            <p className='text-sm'>CEO of Company</p>
        </div>
      </div>
      <div className="blog-details py-2">
        <div className="blog-title font-bold">
            Enjoing holidays in Maldips
        </div>
        <div className="blog-time text-sm py-1">
            posted on september 23 in 2023 at 8.30
        </div>
      </div>
      
      <div className="des text-sm py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, soluta.</div>
      <div className="button w-[100%] flex justify-evenly border-t p-2">
        <FaRegHeart className=' active:bg-red-500 overflow-hidden'/>
        <FaComment className=''/>
        <FaShare/>
      </div>
  </div>
</div>
</div>
    </div>
  )
}
