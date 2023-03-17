import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import video from '../../assets/video.mp4'
import './player.css'
const Player = () => {
    const navigate=useNavigate()
  return (
    <div className='player'>
      <div className='back'>
       <BsArrowLeft onClick={()=>navigate('/netflix')}/>
      </div>
      <video src={video} autoPlay loop controls muted/>
    </div>
  )
}

export default Player
