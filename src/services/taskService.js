class TaskService {
  constructor() {
    this.tasks = [];
    this.currentId = 1;
  }

  getAllTasks({ page = 1, limit = 10, sortBy = "id", order = "asc" }) {
    const start = (page - 1) * limit;
    const end = start + limit;

    const sortedTasks = [...this.tasks].sort((a, b) =>
      order === "asc"
        ? String(a[sortBy]).localeCompare(String(b[sortBy]))
        : String(b[sortBy]).localeCompare(String(a[sortBy]))
    );

    return sortedTasks.slice(start, end);
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === parseInt(id, 10));
  }

  createTask({ title, description }) {
    const newTask = {
      id: this.currentId++,
      title,
      description,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id, updatedData) {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === parseInt(id, 10)
    );
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedData };
      return this.tasks[taskIndex];
    }
    return null;
  }

  deleteTask(id) {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === parseInt(id, 10)
    );
    if (taskIndex !== -1) {
      return this.tasks.splice(taskIndex, 1)[0];
    }
    return null;
  }
}

module.exports = TaskService;
