const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskTitle: String,
  taskDescription: String,
  taskStatus: String,
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
