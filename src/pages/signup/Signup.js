import React,{useState} from 'react'
import './signup.css'
import Header from '../../components/header/Header'
import Background from '../../components/backgroundImage/Background'
import {createUser} from '../../api/api'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const[user,setUser]=useState({
    email:'',
    password:''
  });
  const navigate=useNavigate()
  const[showPass,setShowPass]=useState(false)
  const getStarted=async()=>{
    try{
      await createUser(user)
      navigate('/home')
    }catch(e){alert('server down',e)}
    
  }
  return (
    <div className='signup'>
       <Background/>
      <div className='content'>
       <Header/>
        <div className='body'>
        <div className='text'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membershi.</h6>
        </div>
        {!showPass && <div className='form'>
            <input type={'text'} placeholder="Email address" 
            onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <button onClick={()=>setShowPass(true)}>Get Started</button>
        </div>}
        {showPass && <div className='form-signup'>
            <input type={'text'} placeholder="Email address" value={user.email} 
            onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type={'password'} placeholder="Enter password" 
            onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button onClick={getStarted}>Sign Up</button>
        </div>}
        </div>
      </div>
    </div>
  )
}

export default Signup
