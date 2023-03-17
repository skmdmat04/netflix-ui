import React from 'react'
import CardSlider from '../cardSlider/CardSlider'
import './slide.css'
const Slider = ({movies}) => {
    const movieList=(from,to)=>movies.slice(from,to)
  return (
    <div className='slider'>
      <CardSlider total={movieList(0,10)} title="Trending Now"/>
      <CardSlider total={movieList(10,20)} title="Blockbuster Movies"/>
      <CardSlider total={movieList(20,30)} title="Action movies"/>
      <CardSlider total={movieList(30,40)} title="Popular on Netflix"/>
      <CardSlider total={movieList(40,50)} title="Blockbuster Movies"/>
      <CardSlider total={movieList(50,60)} title="Epics"/>
    </div>
  )
}

export default Slider
