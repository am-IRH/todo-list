const express = require("express");

const controllerTodo = require("../controller/showTodo");

const router = express.Router();

router.get("/", controllerTodo.getIndex);

module.exports = router;

