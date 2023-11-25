/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { reviewSlice } from '@/lib/redux';
import { loadAllReviewById, saveMovie } from './reviewApi';
import Review from './Review';

export const getAllReviewsByIdAsync = createAppAsyncThunk(
  'counter/getAllReviewsAsync',
  async (movieId : string, thankApi) => {
    console.log("movieId in thunk", movieId);
    const response = await loadAllReviewById(movieId);
    console.log("response in thunk", response);
   thankApi.dispatch(reviewSlice.actions.loadAllReviewByMovie(response.data)) ;
    return response.data
  }
)

export const saveReviewAsync = createAppAsyncThunk(
  'counter/saveReviewAsync',
  async (review: Review , thankApi) => {
    console.log("This is thunk")
    const response = await saveMovie(review);
    console.log("response in thunk", response);
    if(response.status == "201"){
      thankApi.dispatch(reviewSlice.actions.saveMovieAction(response.data)) ;
    }
  
    return response.data
  }
)