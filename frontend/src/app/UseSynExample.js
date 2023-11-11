"use client"
import { useSyncExternalStore } from "react";

export default function UseSyncExample(){
     function subscribe(listener){
          window.addEventListener('resize',listener);
          return() => {
               window.removeEventListener('resize', listener)
          }
     }
     function getSnapshot(){
         return window.innerWidth
     }
     const width = useSyncExternalStore(subscribe,getSnapshot)
     return (<>
          width : {width}
     </>)
}