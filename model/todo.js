const { DataTypes} = require("sequelize");
const {Sequelize} = require("sequelize");

// to connect to the database: databaseName / user / password, {options}
const sequelize = new Sequelize("todo-db", "root", "@Amir1398", {
    dialect: "mysql",
    host: "localhost"
});

// define model and optional
const Todo = sequelize.define("todo", {
    // Model attribute
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Todo;