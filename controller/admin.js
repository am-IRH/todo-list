const Todo = require("../model/todo");

module.exports.addTodo = async (req, res) => {
    // Send messageTodo to dataBase MySql
    await Todo.create({ text: req.body.todo });
    res.redirect("/");
};

module.exports.deleteTodo = async (req, res) => {
    //delete message from dataBase
    await Todo.destroy({ where: { id: req.params.id } });
    res.redirect("/");
}

module.exports.completedTodo = async (req, res) => {
    // change completed Columns 
    try {
        const doseCompleted = await Todo.findByPk(req.params.id);
        doseCompleted.completed = true;
        await doseCompleted.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
}
