const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require("./task.services");

router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = await getTaskById(id);

    res.status(200).json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = req.body;

    if (!newTask.userId) {
      throw Error("User ID is missing");
    }

    const task = await createTask(newTask);

    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newTask = req.body;

    if (!(newTask.name && newTask.deadline && newTask.userId)) {
      throw Error("Some fields are missing");
    }

    const task = await updateTaskById(id, newTask);

    res.status(200).json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newTask = req.body;

    const task = await updateTaskById(id, newTask);

    res.status(200).json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await deleteTaskById(id);

    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
