/* Instruments */
import { counterSlice } from './slices'

import { movieSlice } from './slices/movieSlice/movieSlice'
import {reviewSlice} from "./slices/reviewSlice/reviewSlice"


export const reducer = {
  counter: counterSlice.reducer,
  movie : movieSlice.reducer,
  review : reviewSlice.reducer
}
