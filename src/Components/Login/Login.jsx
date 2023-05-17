import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
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
                   <span>Email:</span><input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                   <span>Password:</span><input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button onClick={submit}>Log in</button>
                </form>
            </div>
        </section>
        </div>
    )
}
export default Login