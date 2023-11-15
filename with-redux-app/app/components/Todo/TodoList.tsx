"use client"
import TodoModel from "./TodoModel"

let todos : TodoModel[]  = [
     {
          id : '1',
          title : "Hello"
     },
     {
          id : "2",
          title : "Hello 2"
     },
]
export default function TodoList(){
     const editHandler = (todo : TodoModel) => {
          console.log("Edit" , todo);
     }
     const deleteHandler = (todo : TodoModel) => {
          console.log("Delete", todo);
     }
     return (<>
          ToDoList
          {
               todos.map((todo, index) => <Todo key={todo.id} todo = {todo} editHandler= {editHandler} deleteHandler = {deleteHandler}/>)
          }
     </>)
}
function Todo(props:{todo: TodoModel, editHandler : (todo: TodoModel) => void, deleteHandler : (todo : TodoModel) => void}) {
     let {todo, editHandler, deleteHandler} = props;
     return (<div >
          {todo.title}
          <button type = "button" className="btn btn-primary" onClick={() => editHandler(todo)}>Edit</button>
          <button type = "button" className="btn btn-danger" onClick= {() => deleteHandler(todo)}>Delete</button>
     </div>)
}