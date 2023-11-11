"use client";
import {useMemo, useState} from "react";

function factorial(num) {
    let result = 1;
    for(let i = num; i > 0 ; i--)
    {
        result *= i;
    }
    return result;
}

export default function MemoHookDemo(){
    const [num, setNum] = useState(0);
    const [input, setInput] = useState('');
    let fact = useMemo( () => {
        console.log("calculate")
        return factorial(num)
    }
        ,[num])
    function btnHandler(){
        
        setNum(input);
    }

    return(<>
    factorial number is {fact} <br/>
    <input type="text" value={input} onChange={(e) =>  setInput(e.target.value)}/>
    <button type="button" onClick={btnHandler}>Compute</button>
    </>)
}
