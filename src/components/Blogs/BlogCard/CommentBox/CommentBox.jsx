import React, { useState } from 'react'
import UserComment from './Comment/Comment'
import { useAuth } from '../../../AuthContext/AuthContext'

export default function CommentBox(props) {
    const [Auth,setAuth]=useAuth()
    const data = Auth?.temp_blog
   
    const user = Auth?.user
    const img = user.img
    const id = user._id
    const name = user.fname
    const comments = data?data.comment:[]
    const Blogs = Auth?.temp_blogs
    const [Comment,setComment]=useState("")
    function AddValue(event)
    {
        const {name,value}=event.target
        setComment(value)
    }
    function PostComment()
    {
        if(Comment)
        {
        const rand_id = Math.floor(Math.random()*10000)
        const obj = [
            ...comments,
            {
                name:name,
                userImg:img,
                userId:id,
                text:Comment,
                rand_id,
                id:data._id
            }

        ]
        const newObj ={
            ...data,
            comment:obj
        }
        fetch(`https://eventcy-server-2.onrender.com/api/updateblogs/${data._id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newObj)
        })
        const index = Blogs.findIndex(dat=>dat._id===data._id)
        Blogs[index]=newObj
        setAuth(prev=>{
            const newObj = {
                ...prev,
                temp_blogs:Blogs
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
    }
       
    }
    console.log(comments);
    const arr = comments.map(data=>{
        return <UserComment
        name={data.name}
        img={data.userImg}
        text={data.text}
        id={data.userId}
        />
    })
    const clas = `comment-box h-[400px] relative shadow-inner ${props.state}`
  return (
    <div className={clas}>
        <div className="comment-container absolute top-0 h-[80%] overflow-scroll w-[100%] scrollbar scrollbar-none">
           {arr}
        </div>
      <div className="absolute bottom-3 p-2 flex justify-between w-[100%] place-items-center gap-2">
        <textarea type="text" name="data" id="" className='w-[80%] h-10 p-2 bg-slate-100 text-gray focus:outline-none' onChange={AddValue} placeholder='Comment'/>
        <button className='p-2 text-white lg:w-[19%] lg:ml-2 md:w-[20%]  bg-blue-500 ' onClick={PostComment}>Send</button>
      </div>
    </div>
  )
}
