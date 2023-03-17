import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import SelectGenres from '../../components/selectGenres/SelectGenres';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres,fetchmovies } from '../../store/netflixSlice';
import Slider from '../../components/slider/Slider';
import './movie.css'
const Movies = () => {
  const movies=useSelector(state=>state.netflix.movies)
  const genres=useSelector(state=>state.netflix.genres);
  const genresLoaded=useSelector(state=>state.netflix.genresLoaded);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getGenres());
  },[]);
  useEffect(()=>{
    if(genresLoaded)
    dispatch(fetchmovies('movie'))
  },[genresLoaded])
  return (
    <div>
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className='data'>
      <SelectGenres genres={genres} type={'movie'} />
      {movies.length?<Slider movies={movies}/>:null}
      </div>
    </div>
  )
}

export default Movies
