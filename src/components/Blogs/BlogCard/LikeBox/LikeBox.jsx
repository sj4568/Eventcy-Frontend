import React, { useState } from 'react'

import { useAuth } from '../../../AuthContext/AuthContext'
import LikeUser from './LikeUser'

export default function LikeBox(props) {
    const [Auth,setAuth]=useAuth()
    const data = Auth?.temp_blog
   const like = props.like
   
    const user = Auth?.user
    const img = user.img
    const id = user._id
    const name = user.fname
    const likeArr =like ?  like.map(data=>{
        return <LikeUser fname={data.fname} img={data.img} id={data._id}/>
    }):[]
    const clas = `comment-box h-[400px] relative shadow-inner ${props.state} overflow-y-scroll`
  return (
    <div className={clas}>
      <div className="likeContainer p-2 flex flex-col gap-2">
        {likeArr}
      </div>
    </div>
  )
}
