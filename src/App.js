import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Netflix from './pages/netflix/Netflix'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Player from './pages/player/Player'
import Movies from './pages/movie/Movies'
import TvShows from './pages/tv-shows/TvShows'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Netflix/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Signup/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/tv' element={<TvShows/>}/>
      <Route path='/player' element={<Player/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
