import React from 'react'
import { useAuth } from '../../AuthContext/AuthContext'
import { FaCartPlus } from 'react-icons/fa'
import CartCard from './CartCard/CartCard'
import {Link} from "react-router-dom"
export default function Cart() {
    const [Auth,setAuth]=useAuth()
    const state = Auth?.showCart
    const cartClass = `cart bg-white lg:w-[40%] w-[80%] p-2 h-[80vh] fixed right-2 top-24 shadow-lg z-30 ${state}`
    const cartTemp = Auth?.cart
    const cartData = cartTemp?cartTemp:[]
    const Arr = cartData.map(data=>{
        return <CartCard
        img={data.img}
        name={data.eventName}
        userName = {data.userName}
        amount={data.amount}
        code={data.code}
        price = {data.price}
        />
    })
    function changeState()
    {
      setAuth({
        ...Auth,
        showCart:state==="hidden"?"block":"hidden"
      })
    }
  return (
    <div className={cartClass}>
      <div className="headers w-[100%] p-3 bg-red-500 text-xl font-bold text-white flex place-items-center justify-between gap-1">
      <div className='flex gap-1 place-items-center'>
       <FaCartPlus/> Cart
       </div>
       <div className='pr-2'>
        <button onClick={changeState}>X</button>
       </div>
      </div>
      <div className="cart-container mt-4 flex flex-col gap-3" >
       {Arr}
      </div>
      <div className="button-sec absolute bottom-3">
        {cartData.length  ?<>  <Link to="/checkout" className='px-3 py-2 text-white bg-red-500'>Checkout</Link></>:<button className='px-3 py-2 text-white bg-blue-600'>Coninue Shopping</button>}
      
      </div>
    </div>
  )
}
