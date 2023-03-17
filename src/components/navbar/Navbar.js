import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link,useNavigate } from 'react-router-dom'
import {FaSearch,FaPowerOff} from 'react-icons/fa'
import './navbar.css'
const Navbar = () => {
  const[showSearch,setShowSearch]=useState(false)
  const[inputHover,setInputHover]=useState(false)
  const nevigate=useNavigate()
  return (
    <div className='navbar'>
      <nav>
        <div className='left'>
          <div className='brand'>
          <img src={logo} alt='logo'/>
          </div>
          <ul className='links'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/tv'>TV Shows</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
          </ul>
        </div>
       <div className='right'>
        <div className={`search ${showSearch ? "showSearch":""}`}>
          <button onFocus={()=>setShowSearch(true)} onBlur={()=>{
            if(!inputHover)
            setShowSearch(false)
          }}><FaSearch/></button>
          <input type={'text'} placeholder="Search" onMouseEnter={()=>setInputHover(true)}
          onMouseLeave={()=>setInputHover(false)} onBlur={()=>{setShowSearch(false)
          setInputHover(false)}}/>
        </div>
        <button onClick={()=>nevigate('/login')}><FaPowerOff/></button>
       </div>
      </nav>
    </div>
  )
}

export default Navbar
