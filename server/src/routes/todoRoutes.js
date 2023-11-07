// todoRoutes.js
const express = require("express");
const todoController = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;