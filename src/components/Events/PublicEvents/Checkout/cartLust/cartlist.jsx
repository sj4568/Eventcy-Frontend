import React from 'react'

export default function CartList(props) {
  return (
    <div className="list w-[100%] flex justify-evenly py-2 px-3 border-b-2">
    <div className="name font-bold w-[100%] text-center">
        {props.eventName}
    </div>
    <div className="quantity font-bold w-[100%] text-center">
       {props.amount}x{props.price}
    </div>
    <div className="price font-bold w-[100%] text-center">
        ${props.netPrice}
    </div>
</div>
  )
}
