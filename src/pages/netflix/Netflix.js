import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import background from '../../assets/home.jpg'
import movielogo from '../../assets/homeTitle.webp'
import './netflix.css'
import { FaPlay } from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Player from '../player/Player'
import { getGenres,fetchmovies } from '../../store/netflixSlice'
import { useDispatch, useSelector } from 'react-redux'
import Slider from '../../components/slider/Slider'
const Netflix = () => {
  const movies=useSelector(state=>state.netflix.movies)
  // console.log(genres)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getGenres())
    dispatch(fetchmovies('all'))
  },[])
const nevigate=useNavigate();
  return (
    <div className="netflix">
     <Navbar/> 
     <div className="hero">
      <img src={background} className='background-image' alt='background'/>
      <div className='container'>
      <div className='logo'>
        <img src={movielogo} alt='Movie logo'/>
      </div>
      <div className='button'>
        <button onClick={()=>nevigate('/player')} ><FaPlay/> Play</button>
        <button><AiOutlineInfoCircle/> More Info</button>
      </div>
      </div>
     </div>
    <Slider movies={movies}/>
    </div>
  )
}

export default Netflix
