const Todo = require("../model/todo");
const todoUtils = require("../utils/todos");


module.exports.getIndex = (req, res) => {
    todoUtils.completedTodo(completedTodos => {
        todoUtils.getRemaining(remainingTodos => {
            Todo.fetchAll(todos => {
                res.render("index.ejs", {
                    pageTitle: "کار",
                    todos,
                    completedTodos,
                    remainingTodos
                })
            })
        })
    })
}