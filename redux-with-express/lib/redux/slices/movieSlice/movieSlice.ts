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
     },
    //  extraReducers: (builder) => {
    //   builder
    //     .addCase(getAllMovieAsync.fulfilled, (state, action) => {
    //       state.movies = action.payload
    //     })
    // }
   })