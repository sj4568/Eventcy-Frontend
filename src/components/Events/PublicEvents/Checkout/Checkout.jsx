import React, { useState } from 'react'
import { FaCartArrowDown, FaCheck } from 'react-icons/fa'
import {useAuth} from "../../../AuthContext/AuthContext"
import CartList from './cartLust/cartlist'
import Paycard from './Payments/Paycard/Paycard'
import InputElements from "../../../InputBox/InputElements"
import AllData from "../../../AllData/AllData"
import Paypal from './Payments/BikashArr/Paypal'
import Bikash from './Payments/BikashArr/Bikash'
export default function Checkout() {
    const [Auth,setAuth] = useAuth()
    const cartData = Auth?.cart
  
    const Arr = cartData? cartData.map(data=>{
        return <CartList
        eventName={data.eventName}
        amount = {data.amount}
        price = {data.price}
        netPrice = {data.netPrice}
        />
    }):[]
 
    const bkashArr =cartData ? cartData.map(data=>{
        const {Users} = AllData()
        const user = Users.filter(dat=>dat._id === data.id)[0]
        const phone = user ?user.phone :""
        return<Bikash
        phone={phone}
        event={data}
        />
    }):[]
    const PaypalArr =cartData? cartData.map(data=>{
        const {Users} = AllData()
        const user = Users.filter(dat=>dat._id === data.id)[0]
        const phone = user ?user.email :""
        return<Paypal
        phone={phone}
        event={data}
        user={user}
        />
    }):[]
    let total = 0
    if(cartData)
    {
    for(let i of cartData)
    {
        total+=i.netPrice
    }
}
  return (
    <div className='checkout w-[100%] '>
      <div className="formcontianer flex py-3 justify-center place-items-center">
        <div action="" className="form w-[90%] h-auto flex flex-col lg:flex-row shadow-lg">
            <div className="header flex flex-col justify-center place-items-center w-[100%] lg:w-[50%] bg-red-500">
                <span className='p-2 text-4xl text-white rounded-full'><FaCartArrowDown/></span>
                <h1 className='text-3xl font-bold text-white'>Checkout</h1>
            </div>
            <div className="form w-[100%] lg:w-[50%]">
                <div className="heeader p-3 w-[100%] shadow-md text-red-500 text-xl font-extrabold">
                    Order
                </div>
                <div className="ticketList w-[100%]">
                    <div className="list w-[100%] flex justify-evenly py-2 px-2 border-b-2">
                        <div className="name font-bold w-[100%] text-center ">
                            Events Name
                        </div>
                        <div className="quantity font-bold w-[100%] text-center">
                            Quantity
                        </div>
                        <div className="price font-bold w-[100%] text-center">
                            Price
                        </div>
                    </div>
                    {Arr}
                    <div className="list w-[100%] flex justify-evenly py-2 px-2 border-b-2">
                        <div className="name font-bold">
                            Sub Total
                        </div>
                        <div className="price font-bold">
                            ${total}
                        </div>
                    </div>
                    <div className="list w-[100%] flex justify-evenly py-2 px-2 border-b-2">
                        <div className="name font-bold">
                            Total
                        </div>
                        <div className="price font-bold">
                            ${total}
                        </div>
                    </div>
                </div>
                <div className="payment py-4 px-6">
                    <Paycard
                    title="bKash"
                 
                    des={<>
                    {bkashArr}
                    </>}
                                 
                    />
                     <Paycard
                    title="Paypal"
                    des={<>
                    {PaypalArr}
                    </>}
                  
                    />
                   
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
