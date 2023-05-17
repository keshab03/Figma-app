import React, { useState } from 'react'
import "./signup.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let [name,setName] = useState()
    let [phone, setPhone] = useState()
    let [email,setEmail] = useState()
    let [password, setPassword] = useState()
    const navigate=useNavigate();
    const submit=()=>{
        navigate('/')
    }
    return (
        <div id='addcust'>
        <section id='mainform'>
            <div>
                <form action="">
                <span>Name:</span><input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                   <span>Phone:</span><input type="number" placeholder='Enter Phone Number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
                   <span>Email:</span><input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                   <span>Password:</span><input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={submit}>Sign Up</button>
                </form>
            </div>
        </section>
        </div>
    )
}
export default Login