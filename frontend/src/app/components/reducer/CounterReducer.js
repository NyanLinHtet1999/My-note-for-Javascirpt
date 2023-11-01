"use client";
import {useReducer} from "react";



// function counterReducer(state, action){
//     switch(action.type){
//         case("inc") : return {count : state.count + 1};
//         case("dec") : return {count : state.count - 1};
//     }
// }

// export default function CounterReducer(){
//     const [state, dispatch] = useReducer(counterReducer, {
//         count : 0
//     });
//     return (
//         <>
//             <button type={"button"} onClick={() => dispatch({type : "dec"})}>-</button>
//             {state.count}
//             <button type={"button"} onClick={() => dispatch({type : "inc"})}>+</button>
//         </>
//     )
// }

function counterReducer(state ,action){
    switch(action.type){
        case ("inc") : return {count : state.count + 1 };
        case("dec") : return {count : state.count - 1}
    }
    return state;
}

export default function CounterReducer(){
    const[state, dispatch] = useReducer(counterReducer, {count : 0})
    function incHandler (){
        console.log("inc")
        dispatch({type: "inc"});
    }
    function decHandler (){
        console.log("dec");
        dispatch({type: "dec"});
    }
    return(<>
        <button type="button" onClick={decHandler}>-</button>
        {state.count}
        <button type="button" onClick={incHandler}>+</button>
    </>)
}