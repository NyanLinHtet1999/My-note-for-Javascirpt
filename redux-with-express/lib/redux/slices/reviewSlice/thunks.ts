/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { reviewSlice } from '@/lib/redux';
import { loadAllReviewById, saveReview, updateReview , deleteReview} from './reviewApi';
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
    const response = await saveReview(review);
    if(response.status == "201"){
      thankApi.dispatch(reviewSlice.actions.saveReviewAction(response.data)) ;
    }
    return response.data
  }
)

export const updateReviewAsync = createAppAsyncThunk(
  'counter/updateReviewAsync',
  async (review : Review, thankApi) => {
    const response = await updateReview(review);
    console.log("response", response);
   thankApi.dispatch(reviewSlice.actions.editReview(response.data)) 
  //  console.log(response.data)
    return response
  }
)

export const deleteReviewAsync = createAppAsyncThunk(
  'counter/deleteReviewAsync',
  async (review : Review, thankApi) => {
    const response = await deleteReview(review);
    console.log("response", response);
   thankApi.dispatch(reviewSlice.actions.deleteReview(response.data)) 
  //  console.log(response.data)
    return response
  }
)