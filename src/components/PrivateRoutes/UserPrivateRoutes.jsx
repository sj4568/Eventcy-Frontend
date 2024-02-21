import React from 'react'
import { useAuth } from '../AuthContext/AuthContext'
import { Outlet } from 'react-router-dom'
import ShowForSignIn from './ShowForSignIn'

export default function UserPrivateRoutes() {
    const [Auth,setAuth]=useAuth()

  return Auth.user?<Outlet/>:<ShowForSignIn/>
}
