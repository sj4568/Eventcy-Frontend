import React, { useState } from 'react'

import { FaComment, FaCommentAlt, FaHeart, FaRegHeart, FaShare } from 'react-icons/fa'
import { useAuth } from '../../AuthContext/AuthContext'
import CommentBox from './CommentBox/CommentBox'
import LikeBox from './LikeBox/LikeBox'
import LinkName from '../../LinkName/LinkName'
export default function BlogCard(prop) {
    const props = prop.data
    const [Auth,setAuth] =useAuth()
    const user = Auth?.user
    const likes = props.like
    const Blogs = Auth?.temp_blogs
    const comment = props.comment
    const [commentState,setCommentState] =useState("hidden")
    const [LikeState,setLikeState] =useState("hidden")
    function changeCommentState()
    {
      setCommentState(prev=>{
        if(prev==="hidden")
        {
          return 'block'
        }
        else
        {
          return 'hidden'
        }
      })
    
    }
    function changeLikeState()
    {
      setLikeState(prev=>{
        if(prev==="hidden")
        {
          return 'block'
        }
        else
        {
          return 'hidden'
        }
      })
    
    }
    function saveValue()
    {
      setAuth(prev=>{
        const newObj ={
          ...prev,
          temp_blog:props
        }
        localStorage.setItem("Auth",JSON.stringify(newObj))
        return newObj
      })
    }
    function Like()
    {
        const found = likes.some(data=>data._id===user._id)
        
        if(found===false)
        {
        const newObj = {
            ...props,
            like:[...likes,user]
        }
        fetch(`https://eventcy-server-2.onrender.com/api/updateblogs/${props._id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newObj)
        })
        const index = Blogs.findIndex(data=>data._id===props._id)
        Blogs[index]=newObj
        setAuth(prev=>{
            const newObj = {
                ...prev,
                temp_blogs:Blogs
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
        console.log(Blogs);
    }
    else
    {
      changeLikeState()

    }
  }
  function DeleteBlog()
  {
    const sure = confirm("Are you sure delete this blog")
    if (sure)
    {
      fetch(`https://eventcy-server-2.onrender.com/api/deleteblogs/${props._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type":"application/json"
        }
        
      })
      alert("Blog delete successfully")
      location.reload()
      }
  }
  return (
    <div>
      <div className='card border-none mx-2 group shadow-md' onClick={saveValue}>

<div className="card-img-top relative h-[50%] overflow-hidden rounded-lg">
 
  <img src={props.blogImg} alt="" className='rounded-md group-hover:scale-110  w-screen h-[300px] object-cover' />
</div>
<div className="card-body">
  <div className="card-text ">
      <div className="flex gap-3 place-items-center">
        <div className="client-img">
            <img src={props.userImg} alt="" className='w-12 h-12 rounded-full'/>
        </div>
        <div className="details">
            <LinkName Name={props.userName} id={props.userId}/>
            <p className='text-sm'>user</p>
        </div>
      </div>
      <div className="blog-details py-2">
        <div className="blog-title font-bold">
            {props.name}
        </div>
        <div className="blog-time text-sm py-1">
            {props.postedTime}
        </div>
      </div>
      
            <div className="des text-sm py-2">{props.des}
              {prop.profile && <button className='px-3 py-2 bg-red-400 text-white rounded-lg ml-2' onClick={DeleteBlog}>Delete</button>}
            </div>
      <CommentBox blog={props} state={commentState}/>
      <LikeBox like={likes} state={LikeState}/>
      <div className="button w-[100%] flex justify-evenly border-t p-2">
        <div className="like flex gap-1 place-items-center">
        <FaRegHeart className=' active:bg-red-500 overflow-hidden' onClick={Like}/>
        <span>{likes ? likes.length:0}</span>
        </div>
        <div className="like flex gap-1 place-items-center">
        <FaComment className='' onClick={changeCommentState}/>
        <span>{comment ? comment.length:0}</span>
        </div>
        <FaShare/>
      </div>
  </div>
</div>
</div>
    </div>
  )
}
