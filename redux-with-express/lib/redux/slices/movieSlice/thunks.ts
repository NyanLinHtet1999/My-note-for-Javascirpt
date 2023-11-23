import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchAllMovie } from './movieApi'
// import { selectCount } from './selectors'
// import { counterSlice } from './counterSlice'
import type { ReduxThunkAction } from '@/lib/redux'
import { movieSlice } from '@/lib/redux';
import { reducer } from '../../rootReducer';


export const getAllMovieAsync = createAppAsyncThunk(
     'counter/fetchAllMovie',
     async (arg, thankApi) => {
       const response = await fetchAllMovie()
      thankApi.dispatch(movieSlice.actions.loadAllMovie(response.data)) 
     //  console.log(response.data)
       return response.data
     }
   )