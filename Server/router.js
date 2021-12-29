const express = require('express');
const { allTodo, getTodoById, addTodo, deleteTodo,updateTodo } = require('./controllers');
const router = express.Router();

router.route('/').get(allTodo).post(addTodo);
router.route('/:id').get(getTodoById).delete(deleteTodo).patch(updateTodo);

module.exports = router;
