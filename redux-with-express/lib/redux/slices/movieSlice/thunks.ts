import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchAllMovie, saveMovie , updateMovie} from './movieApi'
// import { selectCount } from './selectors'
// import { counterSlice } from './counterSlice'
import type { ReduxThunkAction } from '@/lib/redux'
import { movieSlice } from '@/lib/redux';
import { reducer } from '../../rootReducer';
import Movie from './Movie';


export const getAllMovieAsync = createAppAsyncThunk(
     'counter/getAllMovieAsync',
     async (movie : Movie, thankApi) => {
       const response = await fetchAllMovie()
      thankApi.dispatch(movieSlice.actions.loadAllMovie(response.data)) 
     //  console.log(response.data)
       return response.data
     }
   )

   export const saveMovieAsync = createAppAsyncThunk(
    'counter/saveMovieAsync',
    async (movie : Movie, thankApi) => {
    
      const response = await saveMovie(movie);
      console.log("response", response);
     thankApi.dispatch(movieSlice.actions.addMovie(response.data)) 
    //  console.log(response.data)
      return response
    }
  )

  export const updateMovieAsync = createAppAsyncThunk(
    'counter/updateMovieAsync',
    async (movie : Movie, thankApi) => {
    
      const response = await updateMovie(movie);
      console.log("response", response);
     thankApi.dispatch(movieSlice.actions.editMovie(response.data)) 
    //  console.log(response.data)
      return response
    }
  )