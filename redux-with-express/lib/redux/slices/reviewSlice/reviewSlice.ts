
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Review from './Review'

export interface ReviewSliceState {
  reviews : Review[]
}

const initialState: ReviewSliceState = {
  reviews : [
    {
        "_id": "65369f1873813ecba2d599fd",
        "movie": "653563057efc828b80bcf6f4",
        "rating": 5,
        "review": "Good",
    },
    {
        "_id": "6561c14d6fe30d9040dcd9ba",
        "movie": "653563277efc828b80bcf6f7",
        "rating": 3,
        "review": "Nice",
    }
]
}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
      loadAllReviewByMovie : (state, action: PayloadAction<Review[]>) => {
        state.reviews = action.payload
      },
      saveMovieAction : (state, action: PayloadAction<Review>) => {
        state.reviews.push(action.payload)
      },
  },
})


