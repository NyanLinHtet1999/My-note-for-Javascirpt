'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {
  todoSlice,
  useSelector,
  useDispatch,
  selectTodo,
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux'

export default function TodoWithRedux () {
     const todos = useSelector(selectTodo)
     return (<div>
          Todo with redux
          {
               todos.map(todo => <div key ={todo.id}>
                    {todo.title}
               </div>)
          }
     </div>)
}