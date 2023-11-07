'use client';
import {useReducer, useState, useEffect, useContext} from "react";
import {todoReducer} from "./TodoListWithReducer";
import next from "next";
// import {TodoContext, TodoDispatchContext} from "../context/TodoContext";

let initialState = [
    {id : 1, title : "To Do 1"},
    {id : 2, title : "To Do 2"}
]

function unique(){
    let id = 3;
    return function(){
        return id++;
    }
}
let newId = unique();

export function ToDoInput({add}) {
    const [toDoText, setToDoText] = useState("");
    function addHandler(){
        add(toDoText);
        setToDoText("");
    }
    
    return (<div>
            <input type="text" value ={toDoText} onChange={(e) => setToDoText(e.target.value)} />
            <button onClick={addHandler}>Add</button>
        </div>);
}



function ToDoItem(props) {
    const {todo ,update, deletes} = props;
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    function editBtnHandler() {
        if(editMode) {//save Btn   
            console.log(update)
            update({id : todo.id, title : editTitle});   
        } 
        setEditMode(!editMode)
    }
    function deleteBtnHandler() {
        deletes(todo)
    }
    return (<div>
                {!editMode && props.todo.title}
                {editMode && <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)}/>}
                <button type="button" onClick={editBtnHandler}>{editMode ? "Save" : "Edit"}</button>
                <button type="button" onClick={deleteBtnHandler}>Delete</button>
        </div>);
}


export default function ToDoListWithReducerTwo(){
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    function updateToDo (todo) {
        dispatch({type : "UPDATE", payload : todo});
        return "Hello";
    }
    function deleteToDo (todo) {
        dispatch({type : "DELETE", payload : todo});
        return "Hello";
    }
    function addToDo(title){
        dispatch({type : "ADD", payload : {id : newId() , title : title}});
    }
    return (<>
       <ToDoInput add = {addToDo} />
        {todos.map((todo) => <ToDoItem key={todo.id} todo={todo} update={updateToDo} deletes={deleteToDo}></ToDoItem>)}
    </>)
}