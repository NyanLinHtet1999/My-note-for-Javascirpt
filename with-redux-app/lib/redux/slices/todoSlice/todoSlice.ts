import Todo from "./Todo"
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
// import { addToDo } from '@/lib/redux/slices/todoSlice/thunks';
export interface TodoSliceState {
     todos : Todo[]
}

const initialState: TodoSliceState = {
     todos : [{
          id : "1",
          title : "Hello",
          completed : false
     },
     {
          id : "2",
          title : "Hello 2",
          completed : true
     },

]
}


export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
       addToDo  : () => {
          
       }
     },
     
   })
   