import React from 'react'
import { loginUrl } from '../spotify'
import "./Login.css"

const Login = () => {
    
  return (
    <div className='login'>
      {/* LOGO */}
      <img src="spotify.jpg" alt="" />

      {/* Login */}
      <a href={loginUrl}>Login</a>
    </div>
  )
}

export default Login
