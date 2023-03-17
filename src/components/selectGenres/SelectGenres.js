import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchDataByGenre } from '../../store/netflixSlice';
import './select.css';
const SelectGenres = ({genres,type}) => {
    console.log(genres)
    const dispatch=useDispatch({genres,type});
  return (
    <select className='genres' onChange={e=>dispatch(fetchDataByGenre({genre:e.target.value,type}))}>
     {genres.map(genre=><option value={genre.id} key={genre.id}>{genre.name}</option>)}
    </select>
  )
}

export default SelectGenres
