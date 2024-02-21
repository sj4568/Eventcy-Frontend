import React from 'react'
import User from '../../Events/PublicEvents/EventContainer/User/User'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import BlogsCard from "../BlogCard/BlogCard"
import AllData from '../../AllData/AllData'
import BlogCard from '../BlogCard/BlogCard'
import { useAuth } from '../../AuthContext/AuthContext'

export default function BlogsContainer() {
    const {Blogs} = AllData()
    const [Auth,setAuth] =useAuth()
    const blog = Auth?.temp_blogs
    const Data = blog.map(data=>{
        return <BlogCard
        data={data}
        />
    })
  return (
    <div className='blogs-container lg:h-[100vh] w-[100%] lg:w-[50%] overflow-scroll scrollbar scrollbar-none'>
       <div className="user shadow-md">
        <User/>
        <div className="create">
          <div className="link w-[100%] flex justify-center py-2 border border-red-500">
            <Link className='flex place-items-center gap-2 text-red-500' to="/createblogs"><FaPlus/>Post a Blog</Link>
          </div>
        </div>
      </div>
      <div className="blog-container mt-3 px-9 flex flex-col gap-2">
     
        {Data}
      </div>
    </div>
  )
}
