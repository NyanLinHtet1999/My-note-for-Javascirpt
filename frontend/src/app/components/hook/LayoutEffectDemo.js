"use client";
import { forwardRef, useLayoutEffect, useEffect } from 'react';

export default  function LayoutEffectDemo(){
     useEffect(()=>{
          console.log("I will run second instead of first")
        });
        
        useLayoutEffect(()=>{
          console.log("I will run first")
        })

        console.log("Render one");

     return(<>
          Hello HelloWorld
     </>)
}