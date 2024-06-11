const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const MovieModel = require("./models/Movies");
const TaskModel = require("./models/Tasks");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/createMovie", (req, res) => {
  MovieModel.create(req.body)
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  TaskModel.find({})
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

app.get("/getTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findById({ _id: id })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

app.put("/updateTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndUpdate(
    { _id: id },
    {
      taskTitle: req.body.taskTitle,
      taskDescription: req.body.taskDescription,
      taskStatus: req.body.taskStatus,
    }
  )
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

app.delete("/deleteTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/createTask", (req, res) => {
  console.log("req.body: ", req.body);
  TaskModel.create(req.body)
    .then((tasks) => {
      res.json(tasks);
      // console.log("tasks: ", task);
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
