const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

app.use("/api/tasks", taskRoutes());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
