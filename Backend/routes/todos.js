var express = require('express');
const path = require('path');
const todos = require("../controller/TodoController");
var router = express.Router();



router.get('/', todos.getAllTodos);
router.get('/completed',todos.getAllCompletedToDos);
router.get('/:id',todos.getTodoById);

router.post('/',todos.createTodo);
router.put('/:id',todos.updateTodo);
router.delete('/:id',todos.deleteTodo);




module.exports = router;
