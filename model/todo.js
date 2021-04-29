const TodosUtils = require("../utils/todos");

class Todo {
    constructor(id, text, completed = false) {
        this.id = id,
        this.text = text, 
        this.completed = completed
    }
    save(callback) {
        TodosUtils.getTodos(todos => {
            todos.push(this);
            TodosUtils.saveTodos(todos, err => {
                callback(err);
            })
        })
    }
    static fetchAll(callback) {
        TodosUtils.getTodos(todos => {
            callback(todos);
        })
    }
    static deleteTodo(id, callback) {
        TodosUtils.getTodos(todos => {
            TodosUtils.saveTodos(todos.filter(t => t.id != id ), err => {
                callback(err);
            })
        })
    }
    static completedTodo(id, callback) {
        TodosUtils.getTodos(todos => {
            const indexTodo = todos.findIndex(t => t.id == id)

            const todo = todos[indexTodo];
            todo.completed = true;
            todos[indexTodo] = todo;
            TodosUtils.saveTodos(todos, err => callback(err))
        })
    }
}


module.exports = Todo;