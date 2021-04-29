const express = require("express");
const router = express.Router();

// controller admin 
const adminController = require("../controller/admin");

router.post("/add-todo", adminController.addTodo);
router.get("/delete-todo/:id", adminController.deleteTodo);
router.get("/completed-todo/:id", adminController.completedTodo);
module.exports = router;