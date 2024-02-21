import React from 'react'
import img from "../../../../assets/images/blog/b1.jpg"
import { useAuth } from '../../../AuthContext/AuthContext'
export default function CartCard(props) {
    const [Auth,setAuth]=useAuth()
    const cart = Auth?.cart
    function del()
    {
        const index = cart.findIndex(data=>data.code === props.code)
        cart.splice(index,1)
        setAuth(prev=>{
            const newObj = {
                ...prev,
                cart:cart
            }
            localStorage.setItem("Auth",JSON.stringify(newObj))
            return newObj
        })

    }
    return (
    <div className='cart-card w-[100%] h-[30px] flex justify-between place-items-center'>
        <div className="events flex gap-3">
      <div className="imgBox w-20 h-10 relative p-2 flex place-items-center">
        <img src={props.img} alt="" className='absolute w-[100%] h-[100%]' />
        </div>
        <div className="textBox">
        <h1 className='font-bold text-md'>{props.name}</h1>
        <p className='text-[10px]'>{props.userName}</p>
      </div>
      </div>
      
      <div className="amount">{props.amount}x${props.price}</div>
      <div className="button mr-7 " onClick={del}>
        <button className='text-xl bg-slate-100 p-2 py-0'> X</button>
      </div>
    </div>
  )
}
