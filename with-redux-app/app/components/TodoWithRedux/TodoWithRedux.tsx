'use client'

/* Core */
import { useEffect, useState } from 'react'

/* Instruments */
import {

  useSelector,
  useDispatch,
  selectTodo,
  todoSlice,
  loadAllTodo,
} from '@/lib/redux'
import Todo from "@/lib/redux/slices/todoSlice/Todo";
import { useRouter } from 'next/navigation';
// import { deleteToDo } from '@/lib/redux/slices/todoSlice/thunks';
let id = 3;
function TodoInput(props : {
     addToDo : (todo : Todo) => void
}) {
     let [todoInput, setTodoInput] = useState("");
     const btnAddHandler = () => {
          console.log(todoInput);
          let todo = {
               id : (id++)+ "",
               title : todoInput,
               completed : false
          }
          props.addToDo(todo);
          setTodoInput("");
     }    

     return (<div>
          <input className='form-control'
                 type="text"
                 value={todoInput}
                 onChange={e => setTodoInput(e.target.value)}/>
          <button className ="btn btn-primary" 
                  onClick={btnAddHandler}>
               Add
          </button>
     </div>)
}

function TodoUI(props : {
     todo : Todo,
     deleteTodo :   (todo : Todo) => void,
     updateTodo : (todo : Todo) => void       
      })
     
{
     const [editMode, setEditMode] = useState(false);
     const [todoTitle, setTodoTitle] = useState(props.todo.title)
     let {todo} = props;
     const btnDeleteHandler = () => {
          props.deleteTodo(todo);
     }   
     const btnEditHandler = () => {
          if(editMode){
               console.log(editMode);
               let updateTodo = {
                    ...props.todo,
                    title : todoTitle
               };
               // console.log(updateTodo);
               props.updateTodo(updateTodo);
          }
  
          setEditMode(!editMode);
          
     }   
     const router = useRouter();
     const btnDetailHandler = () => {
         console.log("id", id);
     //     console.log(router);
         router.push(`todo/${id}`)
     }
     return (<div className='mt-2 '>
          
               {
                    !editMode ?
                         todo.title :
                         <input type="text" value ={todoTitle} 
                              onChange={e => setTodoTitle(e.target.value)}/>
               }
              

          &nbsp;
          <button type="button" 
                    className="btn btn-sm btn-primary"
                    onClick={btnEditHandler}>
                       {editMode ? "Update" : "Edit"}  
          </button>
          &nbsp;
          <button type="button" 
                    className="btn btn-sm btn-danger"
                    onClick={btnDeleteHandler}>
                         Delete
          </button>
          &nbsp;
          <button type="button" 
                    className="btn btn-sm btn-success"
                    onClick={btnDetailHandler}>
                         Detail
          </button>
     </div>)
}

export default function TodoWithRedux() {
     const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  useEffect(() => {
     console.log("call api");
     dispatch(loadAllTodo()).unwrap().then(data => console.log("The data is" , data))
  }, [])
//   useEffect(() => {
//      fetch("http://localhost:3000/api/todos")
//           .then(response => response.json() )
//           .then(data => console.log("Data from express", data))
//   })
 
  const addTodoHandler = (todo : Todo) => {
     dispatch(todoSlice.actions.addTodo(todo));
  }
  const deleteTodoHandler = (todo : Todo) => {
     dispatch(todoSlice.actions.deleteTodo(todo));
  }
  const updateTodoHandler = (todo : Todo) => {
     dispatch(todoSlice.actions.updateTodo(todo));
  }
     return (<>
          <TodoInput addToDo= {addTodoHandler}/>
          {todos.map((todo) => <TodoUI key={todo.id} todo={todo} deleteTodo = {deleteTodoHandler} updateTodo = {updateTodoHandler}/>)}
     </>)
}