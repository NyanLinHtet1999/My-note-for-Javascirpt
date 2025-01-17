"use client";
import {useEffect} from "react";

export default function logComponent(InputComponent)
{
    return function (props)
    {
        useEffect(()=>{
            console.log('Component ',InputComponent.name , 'rendered');
        },[]);
        return(<InputComponent {...props}/>);
    }
}