# Task Manager API

This is a basic RESTful API for managing a collection of tasks. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

## Project Structure

```
task-manager-api
├── src
│   ├── app.js
│   ├── controllers
│   │   └── taskController.js
│   ├── models
│   │   └── taskModel.js
│   ├── routes
│   │   └── taskRoutes.js
│   └── services
│       └── taskService.js
├── package.json
├── .env
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd task-manager-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the API

To start the server, run:
```
node src/app.js
```

The API will be available at `http://localhost:3000`.

### API Endpoints

- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a specific task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

### Sample Requests

#### Get All Tasks
```
GET /tasks
```

#### Create a Task
```
POST /tasks
Content-Type: application/json

{
  "title": "New Task",
  "description": "Task description"
}
```

