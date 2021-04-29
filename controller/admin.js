const Todo = require("../model/todo");

module.exports.addTodo = (req, res) => {
    const todo = new Todo( Math.floor(Math.random() * 1000), req.body.todo);

    todo.save((err) => {
        if (!err) res.redirect("/");
    });
};


module.exports.deleteTodo = (req, res) => {
    Todo.deleteTodo(req.params.id, err => {
        if(!err) res.redirect("/");
        else console.log(err);
    })
}

module.exports.completedTodo = (req, res) => {
    Todo.completedTodo(req.params.id, err => {
        if(!err) res.redirect("/");
        else console.log(err);
    })
}
