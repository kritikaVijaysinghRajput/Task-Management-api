const express = require("express");
const TaskController = require("../controllers/taskController");
const TaskService = require("../services/taskService");
const validateTask = require("../middlewares/validateTask");

const taskRoutes = () => {
  const router = express.Router();
  const taskService = new TaskService();
  const taskController = new TaskController(taskService);

  router.get("/", taskController.getAllTasks.bind(taskController));
  router.get("/:id", taskController.getTaskById.bind(taskController));
  router.post(
    "/",
    validateTask,
    taskController.createTask.bind(taskController)
  );
  router.put(
    "/:id",
    validateTask,
    taskController.updateTask.bind(taskController)
  );
  router.delete("/:id", taskController.deleteTask.bind(taskController));

  return router;
};

module.exports = taskRoutes;
