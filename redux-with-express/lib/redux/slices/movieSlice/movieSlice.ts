import Movie from "./Movie";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getAllMovieAsync } from "./thunks";

export interface MovieSliceState {
     movies : Movie[],
}

const initialState : MovieSliceState =  {
     movies :[]
     }
      

   
   export const movieSlice = createSlice({
     name: 'movie',
     initialState,
     // The `reducers` field lets us define reducers and generate associated actions
     reducers: {
      loadAllMovie: (state, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload
      },
      addMovie: (state, action: PayloadAction<Movie>) => {
        state.movies.push(action.payload)
      },
      editMovie: (state, action: PayloadAction<Movie>) => {
        state.movies  = state.movies.map(movie => movie._id === action.payload._id ? action.payload : movie)
      },
      deleteMovie: (state, action: PayloadAction<Movie>) => {
        state.movies  = state.movies.filter(movie => movie._id !== action.payload._id)
      },
     },
    //  extraReducers: (builder) => {
    //   builder
    //     .addCase(getAllMovieAsync.fulfilled, (state, action) => {
    //       state.movies = action.payload
    //     })
    // }
   })