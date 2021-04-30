const Todo = require("../model/todo");

// send data to ejs page && show ejs page
module.exports.getIndex = async (req, res) => {
    const completedTodos = await Todo.count({ where: { completed: true } });
        Todo.findAll().then(todos => {
            todos.forEach(todo => {
                console.log(todo.createdAt   );
            })
            res.render("index.ejs", {
                pageTitle: "کارهای روزمره",
                todos,
                completedTodos,
                remainingTodos: todos.length - completedTodos
            })
        })
}