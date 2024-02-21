import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
const AuthContext = createContext()
function AuthProvider({children}) {
    const [Auth,setAuth]=useState({
        page:4,
        user:null,
        privateEvent:null,
        temp_events:null,
        temp_guest:[],
        current_data:null,
        publicEvents:[],
        temp_event:null,
        showCart:"hidden",
        cart:[],
        temp_guests:[],
        update_guest:{},
        temp_blogs:[],
      temp_blog: null,
        temp_items:[],
        temp_data:[],
        temp_user:null,
      all_user: [],
      temp_ticket: {}
    })
    useEffect(()=>{
      const data = JSON.parse(localStorage.getItem("Auth"))
      setAuth({
        ...Auth,
        user:data?.user,
        privateEvent:data?.privateEvent,
        temp_events:data?.temp_events,
        temp_guest:data?.temp_guest,
        publicEvents:data?.publicEvents,
        temp_event:data?.temp_event,
        cart:data?.cart,
        temp_guests:data?.temp_guests,
        update_guest:data?.update_guest,
        temp_blogs:data?.temp_blogs,
        temp_blog: data?.temp_blog,
        temp_items:data?.temp_items,
        temp_data:data?.temp_data,
        temp_user:data?.temp_user,
        all_user: data?.all_user,
        temp_ticket:data?.temp_ticket
      })
    },[])
  return (
    <AuthContext.Provider value={[Auth,setAuth]}>
        {children}
    </AuthContext.Provider>
  )
}
const useAuth = ()=>useContext(AuthContext)
export {AuthProvider,useAuth}