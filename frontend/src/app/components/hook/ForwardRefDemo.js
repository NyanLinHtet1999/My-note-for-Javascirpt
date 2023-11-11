"use client";
import {forwardRef, useRef} from 'react';

const MyInput = forwardRef(function MyInput(props, ref){
    const {label} = props;
    return(<div>
        <label>{label}</label>
        <input ref = {ref}/>
    </div>)
})

export default function ForwardRefDemo(){
    const ref = useRef(null);
    function handler(){
        ref.current.style.opacity = 0.5;
    }
    return (<div>

            <MyInput label="Enter your name : " ref={ref}/>
            <button typ="button" onClick={handler}>Edit</button>
        
    </div>)
}