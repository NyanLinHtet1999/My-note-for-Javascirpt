import Todo from "./Todo";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { loadAllTodo } from "./thunks";
export interface TodoSliceState {
     todos : Todo [],
}

const initialState : TodoSliceState = {
     todos : [
          {
               id : "1",
               title : "Task 1", 
               completed : false
          },
          {
               id : "2",
               title : "Task 2", 
               completed : true
          }
     ]
}


export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     // The `reducers` field lets us define reducers and generate associated actions
     reducers: {
       addTodo : (state, action: PayloadAction<Todo>) => {
          state.todos.push(action.payload)
       },
       deleteTodo : (state, action: PayloadAction<Todo>) => {
          state.todos = state.todos.filter(todo => todo.id != action.payload.id)
       },
       updateTodo : (state, action: PayloadAction<Todo>) => {
          state.todos = state.todos.map(todo => todo.id == action.payload.id ? action.payload : todo)
       }
     },
     extraReducers: (builder) => {
          builder
            .addCase(loadAllTodo.pending, (state , action) => {
              console.log(state);  
            })
            .addCase(loadAllTodo.fulfilled, (state , action) => {
               console.log(action.payload); 
               state.todos = action.payload; 
             })
            
        },
   })