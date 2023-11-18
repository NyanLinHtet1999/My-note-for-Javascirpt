import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchAllTodos } from './api';
export const loadAllTodo = createAppAsyncThunk(
     'todo/fetchAllTodos',
     async () => {
          let todo = await fetchAllTodos();
          return todo
     }
   )