
'use client'
import {useState} from 'react'

export default function Counter(){
    const [count, setCount] = useState(0);
    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    const [label , setLabel] = useState("Hello");
    const changeLabel = () => setLabel("HI There");
    return (
        <div>
            <button type={"button"} onClick={dec}>-</button>
             {count}
            <button type={"button"} onClick={inc}>+</button>
            {label}
            <button type="button" onClick={changeLabel}>Change</button>
        </div>
    )
}



