import React, { useState } from 'react'
import Background from '../../components/backgroundImage/Background';
import logo from '../../assets/logo.png'
import { login } from '../../api/api';
import {useNavigate} from 'react-router-dom'
import './login.css'
const Login = () => {
  const[details,setDetails]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
  const signIn=async (e)=>{
e.preventDefault();
try{
 await login(details)
 navigate('/home')
}catch(e){alert('Invalid credentials')}
  }
  return (
    <div className='login'>
      <Background/>
      <div className='content'>
      <div className='logo'>
       <img src={logo} alt='logo' /> 
      </div>
      <div className='form-login'>
        <h2>Sign In</h2>
        <form>
           <input type={'text'} placeholder="Enter your email" 
          onChange={e=>setDetails({...details,email:e.target.value})}/>
          <input type={'password'} placeholder={"Enter your password"}
          onChange={e=>setDetails({...details,password:e.target.value})}/>
          <button onClick={signIn}>Sign in</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login
