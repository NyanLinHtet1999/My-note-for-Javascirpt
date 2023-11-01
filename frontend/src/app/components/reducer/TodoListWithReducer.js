'use client';
import {useReducer, useState, useEffect, useDebugValue} from "react";


//only use ToDoListWithReducerTwo approach
let initialState = [];

export function todoReducer(todos, action) {
    switch(action.type){
        case("ADD") : return [...todos , action.payload]
        case("DELETE") : return todos.filter(todo => todo.id !== action.payload.id);
        case("UPDATE") : return todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
    }
    return state;
}
function unique(){
    let id = 3;
    return function() {
        return id++;
    }
}
let nextId = unique();

function TodoInput(props) {
    let {dispatch} = props;
    let {editToDo} = props;
    let {clearEdit} =  props;
    let text = props.editToDo  === null ? "" : editToDo.title;
    
   
    const [toDoText , setTodoText] = useState(text);
   
    function addHandler(){
        if(editToDo){
            dispatch({type : "UPDATE", payload : {id : editToDo.id , title : toDoText}});
            clearEdit();
        }else{
            dispatch({type : "ADD", payload : {id : nextId() , title : toDoText}})
       
        }
        setTodoText("")
    }
    
           useEffect(()=>{
        if(editToDo)
        {
            setTodoText(editToDo.title);
        }
    },[editToDo]);
    return (<form>
            <input type='text' value={toDoText} onChange={(e) => setTodoText(e.target.value)}/>
            <button type="button" onClick={addHandler} >ADD</button>
        </form>);
}



function TodoItem(props) {
    let {dispatch} = props;  
    let {editHandler} = props;
    function deleteHandler(){
        dispatch({type : "DELETE", payload : props.todo})  
    }
    function editBtn(){
        editHandler(props.todo)
    }

    return (<div>
            {props.todo.title} 
            <button type="button" onClick={editBtn}>Edit</button>
            <button type="button" onClick={deleteHandler}>Delete</button>
        </div>);
}


export default function TodoListWithReducer(){
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [editToDo, setEditToDo] = useState(null);
    function editHandler(todo){
        setEditToDo(todo)
    }
    function clearEdit(){
        setEditToDo(null);
    }
    return(<>
       <TodoInput dispatch={dispatch} todos = {todos} editToDo={editToDo} clearEdit={clearEdit}/>
        {todos.map((todo) => 
        <TodoItem key={todo.id} todo={todo} dispatch= {dispatch} editHandler={editHandler}/>)}
    </>)
}