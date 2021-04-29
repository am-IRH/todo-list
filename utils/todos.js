const fs = require("fs");
const path = require("path");

const rootFile = require("../utils/path");
const filePath = path.join(rootFile, "data", "todo.json");

module.exports.getTodos = callback => {
    fs.readFile(filePath, (err, data) => {
        if(err) return callback(err);
        callback(JSON.parse(data));
    });
}

module.exports.saveTodos = (todos, callback) => {
    fs.writeFile(filePath, JSON.stringify(todos), err => callback(err));
}

module.exports.completedTodo = callback => {
    this.getTodos(todos => {
        callback(todos.filter(t => t.completed === true).length)
    })
}

module.exports.getRemaining = callback => {
    this.getTodos(todos => {
        callback(todos.filter(t => t.completed !== true).length)
    })
}