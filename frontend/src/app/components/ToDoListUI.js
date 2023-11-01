"use client";
import {useState} from "react";



// export default function ToDoListUI(){
    
//    const [newToDos, setNewToDos] = useState('');
//    const [todos, setToDos] = useState([]);
//     const add = () => {
//         setToDos([...todos, newToDos]);
//         setNewToDos("");
//     };

//     return (<>
//         <form>
//             <input type="text" value = {newToDos} onChange={(event) => setNewToDos(event.target.value)}/>
//             <button type="button" onClick={add}>Add</button>
//         </form>
//         <div>
//             {todos.map((item,index )  => <li key ={index} >{item}</li>)}
//         </div>
//     </>)
// }
function unique() {
    let id = 0;
    return function (){
        return id++;
    }
}
let nextId = unique();

export default function ToDoListUI(){
    const [text, setText] = useState('');
    const [todos, setToDos] = useState([{
        id : 1,
        title : "Todo 1"
    }])
    return(<>
        <form>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button 
                    type="button"
                   onClick={() =>{ setToDos([...todos, {id : nextId(), title : text}]); setText('')}}>
                        Add
            </button>
        </form>
        <div>
            {todos.map(todo => <li key ={todo.id}>{todo.title}</li>)}
        </div>
    </>)
}