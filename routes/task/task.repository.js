const { Task, User } = require("../../models");

const findTasks = async () => {
  const tasks = await Task.findAll({
    include: [
      {
        model: User,
      },
    ],
  });

  return tasks;
};

const findTaskById = async (taskId) => {
  const task = await Task.findByPk(taskId, {
    include: [
      {
        model: User,
      },
    ],
  });

  return task;
};

const insertTask = async (newTask) => {
  const task = await Task.create(newTask);

  return task;
};

const updateTask = async (taskId, newTask) => {
  const task = await Task.update(newTask, {
    where: {
      id: taskId,
    },
  });

  return task;
};

const deleteTask = async (taskId) => {
  const task = await Task.destroy({
    where: {
      id: taskId,
    },
  });

  return task;
};

module.exports = {
  findTasks,
  findTaskById,
  insertTask,
  updateTask,
  deleteTask,
};
