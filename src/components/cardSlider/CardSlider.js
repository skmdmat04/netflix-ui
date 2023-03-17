import React,{useState,useRef} from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Card from '../card/Card'
import './cardslider.css'
const CardSlider = ({total,title}) => {
  const [sliderPosition,setSliderPosition]=useState(0)
  const [sliderLength,setSliderLength]=useState(0)
  const [arrow,setArrow]=useState(false);
  const listRef=useRef();
  const handleDir=(dir)=>{
if(dir=="left" && sliderPosition>0){
  setSliderLength(l=>l+234)
  listRef.current.style.transform=`translateX(${sliderLength}px)`;
  setSliderPosition(sliderPosition-1)
}
if(dir=="right" && sliderPosition<4){
  setSliderLength(l=>l-234)
  listRef.current.style.transform=`translateX(${sliderLength}px)`;
  setSliderPosition(sliderPosition+1)
}
  }
  return (
    <div className='movieCard' onMouseEnter={()=>setArrow(true)} onMouseLeave={()=>setArrow(false)}>
      <h1>{title}</h1>
      <div className='wrapper'>
        <div className={`slider-action left ${!arrow?'none':""}`}>
        <AiOutlineLeft onClick={()=>handleDir('left')}/>
        </div>
        <div className='card' style={{transform:`translateX${(234+'px')}`}} ref={listRef}>
          {total.map(data=><Card key={data.id} movieData={data}/>)}
        </div>
        <div className={`slider-action right ${!arrow?"none":""}`}><AiOutlineRight onClick={()=>handleDir('right')}/></div>
      </div>
    </div>
  )
}

export default CardSlider
