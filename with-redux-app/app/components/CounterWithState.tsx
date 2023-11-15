"use client"
import { useState } from "react";
export default function CounterWithState() {
     let [count, setCount] = useState(0);
     const decHandler = () => {
          setCount(count - 1);
     }
     const incHandler = () => {
          setCount (count + 1);
     }
     return (<div>
          <button type="button" onClick= {() => decHandler()}>-</button>
          {count}
          <button type="button" onClick= {() => incHandler()}>+</button>

     </div>)
}