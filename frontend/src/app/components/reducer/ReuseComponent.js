"use client";

import {ToDoInput} from "./ToDoListWithReducerTwo";

export default function ReuseComponent()
{
    const handler = (todo)=>{
        console.log('todo ');
    }
    return(<div>
        <ToDoInput add={handler} />
        {/* Hello */}
    </div>);
}