const tasks = [];

class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

module.exports = {
  tasks,
  Task,
};
