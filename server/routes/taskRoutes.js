const express = require("express");
const {
  createTask,
  getAllTasks,
  getATask,
  deteteAtask,
  updateATask,
} = require("../controllers/taskControllers");
// const Task = require("../models/taskModel")
const router = express.Router();

// Create task
router.post("/", createTask);

// Get/Read All tasks

router.get("/", getAllTasks);

// Get/Read A tasks

router.get("/:id", getATask);

// Delete a Task
router.delete("/:id", deteteAtask);

// Update a Task
router.patch("/:id", updateATask);

module.exports = router;
