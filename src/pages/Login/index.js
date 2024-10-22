import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    const handlerOnSubmit = (e) => {
        e.preventDefault();
        console.log("EMAIL", email)
        console.log("PASSWORD", password)
    }
    
  return (
    <>
        <form onSubmit={handlerOnSubmit}> 
            <input type='email' placeholder='email' onChange={(event) => setEmail(event.target.value)} value={email}/>
            <input type='password' placeholder='password' onChange={(event) => setPassword(event.target.value)} value={password}/>
            <button>Login</button>
        </form>
    </>
  )
}
