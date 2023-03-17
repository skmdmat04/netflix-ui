import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import SelectGenres from '../../components/selectGenres/SelectGenres';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres,fetchmovies } from '../../store/netflixSlice';
import Slider from '../../components/slider/Slider';
const TvShows = () => {
  const tv=useSelector(state=>state.netflix.movies)
  const genres=useSelector(state=>state.netflix.genres);
  const genresLoaded=useSelector(state=>state.netflix.genresLoaded);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getGenres());
  },[]);
  useEffect(()=>{
    if(genresLoaded)
    dispatch(fetchmovies('tv'))
  },[genresLoaded])
  return (
    <div>
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className='data' style={{marginTop:'8rem'}}>
      <SelectGenres genres={genres} type={'tv'} />
      {tv.length?<Slider movies={tv}/>:<h1> No TV Shows avaialble for the selected genre. Please select a different genre.</h1>}
      </div>
    </div>
  )
}

export default TvShows
