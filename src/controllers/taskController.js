class TaskController {
  constructor(taskService) {
    this.taskService = taskService;
  }

  getAllTasks(req, res) {
    try {
      const tasks = this.taskService.getAllTasks(req.query);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving tasks" });
    }
  }

  getTaskById(req, res) {
    const taskId = req.params.id;
    const task = this.taskService.getTaskById(taskId);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  }

  createTask(req, res) {
    try {
      const createdTask = this.taskService.createTask(req.body);
      res.status(201).json(createdTask);
    } catch (error) {
      res.status(500).json({ message: "Error creating task" });
    }
  }

  updateTask(req, res) {
    const taskId = req.params.id;
    const updatedTask = this.taskService.updateTask(taskId, req.body);
    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  }

  deleteTask(req, res) {
    const taskId = req.params.id;
    const success = this.taskService.deleteTask(taskId);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  }
}

module.exports = TaskController;
