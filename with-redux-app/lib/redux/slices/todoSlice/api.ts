export const fetchAllTodos = async () => {
     let result = await fetch('https://jsonplaceholder.typicode.com/todos');
     let todos = await result.json();
     return todos;
}