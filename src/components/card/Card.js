import React, { useState } from 'react'
import {RiThumbUpFill,RiThumbDownFill} from 'react-icons/ri'
import {IoPlayCircleSharp} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import './card.css'
const Card = ({movieData}) => {
  const [isHovered,setIsHovered]=useState(false)
  const navigate=useNavigate()
  return (
    <div className='movie-card' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='card'/>
      {isHovered && <div className='hover'>
        <div className='image-video-container'>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='card'/>
        </div>
        <div className='info-video'>
          <h3 className='name'>{movieData.name}</h3>
          <div className='icons'>
            <div className='controls'><IoPlayCircleSharp title='play' onClick={()=>navigate('/player')}/></div>
            <RiThumbUpFill title='like'/>
            <RiThumbDownFill title='dislike'/>
              </div> 
        </div>
        
        </div>}
    </div>
  )
}

export default Card
