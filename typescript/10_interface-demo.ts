interface Todo 
{
    id : number,
    title : string
}

interface Todo 
{
    completed : boolean
}

let todo : Todo[] = [{
    id : 2, 
    title : "Hello", 
    completed : false
}]
console.log(todo);