import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import InputElements from '../../../../InputBox/InputElements'
import { Link } from 'react-router-dom'
import AllData from '../../../../AllData/AllData'
import { useAuth } from '../../../../AuthContext/AuthContext'
import Papa from "papaparse"
import {useNavigate} from 'react-router-dom'
export default function GuestForm(props) {
    const navigate = useNavigate()
    const {guest} = AllData()
    const [Auth,setAuth]=useAuth()
    const current = Auth?.privateEvent
    const id = current?.rand_id
    const current_event = guest.filter(data=>data.id===id)[0]
    const index = guest.findIndex(data=>data.id===id)
    const c_id = current_event?current_event._id:""
    const data = current_event?current_event.guest:[]
    const Ar = data?data:[]
    const temp = Auth?Auth.temp_guests:[]
    console.log(temp);
    const [csvFile,setCsvFile]=useState([])
    const [formData,setFormData]=useState({
        fname:"",
        email:"",
        phone:"",
        status:"Waiting"
    })
    function AddValue(event)
    {
        const {name,value,files}=event.target
        setFormData({
            ...formData,
            [name]:value

        })
        Papa.parse(files[0],{
            header:true,
            skipEmptyLines:true,
            complete:(result)=>{
                setCsvFile(result.data)
            }
        })

    }
    const [err,setErr]=useState("")
    const [color,setColor]=useState("")
    function SubmitData(event)
    {
        event.preventDefault()
        const id=Math.floor(Math.random()*1000)
        const csvData =csvFile.map(data=>{
            const rand_id = Math.floor(Math.random()*10000)
            return{
                ...data,
                status:"Wating",
                code:rand_id
            }
        })
        const {fname,email,phone}=formData
        if(csvFile.length !==0)
        {
            let Arr = [...temp,...csvData]
            fetch(`https://eventcy-server-2.onrender.com/api/updateguest/${c_id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    ...current_event,
                    guest:Arr
                })
            })
            
            setAuth(prev=>{
                guest[index]={...current_event,guest:Arr}
                const newObj = {
                    ...prev,
                    temp_guest:guest,
                    temp_guests:Arr
                }
                localStorage.setItem("Auth",JSON.stringify(newObj))
                return newObj
            })
            console.log(Arr);
            setErr("Guest Data sucessfully import from csvfile")
            setColor("green")
            navigate("/events/privateevent")
        }
        else
        {
            if(fname && email && phone)
            {
                let Arr = [...temp,{...formData,code:id}]
                fetch(`https://eventcy-server-2.onrender.com/api/updateguest/${c_id}`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        ...current_event,
                        guest:Arr
                    })
                })
                setAuth(prev=>{
                    guest[index]={...current_event,guest:Arr}
                    const newObj = {
                        ...prev,
                        temp_guest:guest,
                        temp_guests:Arr
                    }
                    console.log(Arr);
                    localStorage.setItem("Auth",JSON.stringify(newObj))
                    return newObj
                })
                navigate("/events/privateevent")
                console.log(Auth.temp_guest);
                setErr("Guest Data insert sucessfully ")
                setColor("green")
                
            }
            else
            {
                setErr("Fill AllData")
            setColor("red")
            }
        }
       
    }
    function ChangeState()
    {
        
        props.change()
    }
    const classState=`events-form p-3  w-[100%] `
  return (
    <div className={classState}>
    <div className="form-container w-[100%] h-screen grid place-items-center">
      <div className="box w-auto flex flex-col">
      <div className="headers flex gap-3 place-items-center py-2">
          <span className='bg-red-500 p-3 rounded-lg text-white text-xl'>
              <FaUser/>
          </span>
          <h1 className='text-2xl font-bold'>Add Guest <span className='text-xl font-light'>/To Enjoy our Website</span></h1>
      </div>
      <form action="" className="form p-2" onSubmit={SubmitData}>
     
      <InputElements title="Guest Name"
      name="fname"
      id="fname"
      type="text"
      onChange={AddValue}
      />
     
      <InputElements title="Guest Email Address"
      name="email"
      id="email"
      type="email"
      onChange={AddValue}
      />
       <InputElements title="Guest Phone"
      name="phone"
      id="phone"
      type="text"
      onChange={AddValue}
      />
     <InputElements
     title="Import CSV File"
     type="file"
     name="csvfile"
     id="csv"
     onChange={AddValue}
     />
      <span className='w-[100%] flex justify-center' style={{color:color}}>{err}</span>
      <InputElements type="submit" value="Add" className="text-white bg-red-500 p-2 hover:bg-blue-950"/>
      <button className="text-white bg-red-500 p-2 hover:bg-blue-950 w-[100%]" onClick={ChangeState}>Close</button>
      
      </form>
      </div>
    </div>
  </div>
  )
}
