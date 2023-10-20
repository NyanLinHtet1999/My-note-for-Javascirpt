var express = require('express');
const path = require('path');
const todos = require("../controller/TodoController");
var router = express.Router();



router.get('/', todos.getAllTodos);

router.get('/:toDoId', todos.getToDoWithId);

router.get('/example/a', todos.exampleA);
router.get('/example/a', todos.exampleANext)




module.exports = router;
