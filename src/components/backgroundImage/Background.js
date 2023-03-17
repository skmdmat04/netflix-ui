import React from 'react'
import background from '../../assets/Background.jpeg'
import './background.css'
const Background = () => {
  return (
    <div className='background'>
      <img src={background} alt='background'/>
    </div>
  )
}

export default Background
