"use client";
import {useEffect, useState} from "react";

// function useFetch(url,callback)
// {
//     useEffect(()=>{
//         fetch(url)
//             .then(data=>data.json())
//             .then(json=>callback(json));
//     },[]);
// }
// export default function TodoWithEffect()
// {
//     let [todos,setTodos] = useState([]);

//     useFetch('https://jsonplaceholder.typicode.com/todos',setTodos);
//     return (<ol>
//         {
//             todos.map(todo=><li key={todo.id}>
//                 {todo.title}
//             </li>)
//         }
//     </ol>);
// }


export default function TodoWithEffect(){

    const [todos, setTodos] = useState(null);
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data=>data.json())
            .then(data =>setTodos(data));
            
    }, []);
    useEffect(() => {
        console.log(todos);
    })

    return(<>
        To do with Effect
        <ol>
        {todos.map(todo => <li>{todo.title}</li>)}
        </ol>
    </>)

}
