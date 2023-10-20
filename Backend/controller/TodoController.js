let toDo = require('../service/TodoService');

function getAllTodos(req, res, next){
     let result = toDo.getAllToDo();
     return res.json(result);
};
function getToDoWithId(req, res, next){
     let todoId = req.params['toDoId'];
     let fakeToDos = toDo.getAllToDo();
     let todo = fakeToDos.find(x => x.id == todoId);
     return res.json(todo);
}
function exampleA(req, res, next){
     console.log(req.user);
     next();
};
function exampleANext(req, res, next){
     return res.send("example a");
}
module.exports = {
     getAllTodos,
     getToDoWithId,
     exampleA,
     exampleANext
 };