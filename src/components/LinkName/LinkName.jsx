import React, { useEffect, useState } from 'react'
import AllData from '../AllData/AllData'
import { useAuth } from '../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LinkName(props) {
  const { Users} = AllData()

    const navigate = useNavigate()
    const [Auth,setAuth]=useAuth()
    function Go()
    {
      
      
        setAuth(prev=>{
            const newObj = {
                ...prev,
                temp_user:props.id
            }
            
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })
      
        navigate("/user")
      
    }
  return (
    <div onClick={Go} className={props.className}>
      {props.Name}
    </div>
  )
}
