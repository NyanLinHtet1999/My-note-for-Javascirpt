export const fetchAllTodos = async () => {
     let result = await fetch('http://localhost:3000/api/todos');
     let todos = await result.json();
     return todos;
}