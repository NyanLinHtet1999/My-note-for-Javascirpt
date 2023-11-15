/* Instruments */
import { counterSlice } from './slices'
import { todoSlice } from './slices/todoSlice'


export const reducer = {
  counter: counterSlice.reducer,
  todo : todoSlice.reducer,
}
