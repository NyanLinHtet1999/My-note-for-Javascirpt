"use client";
import {useContext, useState} from 'react';
import {ThemeContext} from "./ThemeContext";



function Child2(){
    let theme = useContext(ThemeContext)
    console.log(theme);
    return (<div>
        Child2
    </div>)
}

function Child1(){
    return(<div>
        Child1
        <Child2/>
    </div>)
}

export default function ContextDemo(){
    const [color , setColor] = useState("red");
    let theme = useContext(ThemeContext);
    theme = {color : color};
    function btnChangeHandler(){
        setColor("green");
    }
    return(<div>
        <ThemeContext.Provider value={theme}>
            Child
            <Child1/>
            <button type='button' onClick={btnChangeHandler}>Change</button>
        </ThemeContext.Provider>
        
    </div>)
}
