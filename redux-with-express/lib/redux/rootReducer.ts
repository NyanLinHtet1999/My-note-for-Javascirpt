/* Instruments */
import { counterSlice } from './slices'

import { movieSlice } from './slices/movieSlice/movieSlice'


export const reducer = {
  counter: counterSlice.reducer,
  movie : movieSlice.reducer
}
