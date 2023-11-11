"use client";
import {useState , useId} from "react";

function unique(){
    let id = 1;
    return function(){
        return id++;
    }
}
let nextId = unique();

export default function ToDoListUI(){
    const [text, setText] = useState("");
    const [todos, setToDos] = useState([]);
    function addHandler(){
        setToDos([...todos, {id : nextId() , title : text}])
    }
    
    return(<>
        <form>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button type="button" onClick={addHandler}>ADD</button>
        </form>
        <div>
            {todos.map((todo) => <li key ={todo.id}>{todo.title}</li>)}
        </div>
    </>)
}
