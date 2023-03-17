import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import './header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate()
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt ='logo'/>
      </div>
      <button onClick={()=>navigate('/login')}>Sign in</button>
    </div>
  )
}

export default Header;
