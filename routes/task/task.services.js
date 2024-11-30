const {
  findTasks,
  findTaskById,
  insertTask,
  updateTask,
  deleteTask,
} = require("./task.repository");

const getTasks = async () => {
  const tasks = await findTasks();

  return tasks;
};

const getTaskById = async (id) => {
  const task = await findTaskById(id);

  if (!task) {
    throw Error("Task not found");
  }

  return task;
};

const createTask = async (newTask) => {
  const task = await insertTask(newTask);

  return task;
};

const updateTaskById = async (id, newTask) => {
  await getTaskById(id);

  return await updateTask(id, newTask);
};

const deleteTaskById = async (id) => {
  await getTaskById(id);

  return await deleteTask(id);
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
