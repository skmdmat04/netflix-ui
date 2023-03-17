import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL } from "../utils/constants";
const initialState={
    movies:[],
    genresLoaded:false,
    genres:[]
}

export const getGenres=createAsyncThunk('netflix/genres',async()=>{
    const {data}=await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
    return data.genres;
})

const rawData=async(api,paging=false)=>{
    const movies=[];
    for(let i=1;movies.length<60 && i<10;i++){
        const {data:{results}}=await axios.get(`${api}${paging ? `&page=${i}`:""}`);
      results.map(movie=>{
        movies.push({
            id:movie.id,
            name:movie.original_name ? movie.original_name : movie.original_title,
            image:movie.backdrop_path
        })
      })
    }
    return movies
}
export const fetchDataByGenre=createAsyncThunk('netflix/genre',async({genre,type},thunkAPI)=>{
const {netflix:{genres}}=thunkAPI.getState();
return rawData(`https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,genres)
})
export const fetchmovies=createAsyncThunk('netflix/trending',async(type)=>{
    // const {netflix:{genres}}=thunkAPI.getState();
    const movies= rawData(`${API_URL}/trending/${type}/week?api_key=${API_KEY}`,true);
    return movies;
})
const netflixSlice=createSlice({
    name:'netflix',
    initialState,
    extraReducers:bulider=>{
        bulider.addCase(getGenres.fulfilled,(state,action)=>{
            state.genres=action.payload;
            state.genresLoaded=true;
        })
        bulider.addCase(fetchmovies.fulfilled,(state,action)=>{
            state.movies=action.payload
        })
        bulider.addCase(fetchDataByGenre.fulfilled,(state,action)=>{
            state.movies=action.payload;
        })
    }
})
export default netflixSlice.reducer