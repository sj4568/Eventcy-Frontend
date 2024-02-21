import React, { useState } from 'react'
import InputElements from '../InputBox/InputElements'

export default function ContectForm() {
    const [formData,setFormData]=useState({
        fname:"",
        email:"",
        des:""
    })
    function AddValue(event)
    {
        const {name,value}=event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    function SendMail()
    {
    window.Email.send({
    Host : "smtp.elasticemail.com",
    Username : "masom3456@gmail.com",
    Password : "D9FE4B7BEC4DFE5CF2CC99297225362D05A7",
    To :`masom3456@gamil.com`,
    From :formData.email,
    Subject :formData.fname,
    Body :formData.des
    }).then(
    message => alert("Email Send Successfully")
    );

    }
  return (
    <div className='w-[100%] h-screen grid place-items-center'>
      <div className="form lg:w-[50%] w-[90%] shadow-lg p-7">
        <div className="contect flex justify-center py-4">
            <h1 className='text-4xl font-bold py-2 relative before:absolute before:w-[50%] before:h-[10%] before:left-0 before:bottom-0 before:bg-red-500'>Contect Us</h1>
        </div>
            <InputElements
            title="Full Name"
            name="fname"
            id="fname"
            />
    
      
          <InputElements
            title="Email Address"
            name="email"
            id="email"
            type="email"
            />
            <textarea placeholder='Massages...' name="" id="" className='w-[100%] p-2 h-[200px] border'>

            </textarea>
            <InputElements className="bg-red-500 py-2 text-white" type="submit" value="Send Email"/>
      </div>
    </div>
  )
}
