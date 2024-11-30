const { User, Group, Task, UserGroup } = require("../../models");

const findUsers = async () => {
  const users = await User.findAll({
    include: [Group, Task],
  });

  return users;
};

const findUserById = async (id) => {
  const user = await User.findByPk(id, {
    include: [Group, Task],
  });

  return user;
};

const insertUser = async (user) => {
  const newUser = await User.create(user);

  return newUser;
};

const updateUser = async (id, user) => {
  const updatedUser = await User.update(user, {
    where: {
      id,
    },
    include: [Group, Task],
  });

  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await User.destroy({
    where: {
      id,
    },
  });

  return deletedUser;
};

module.exports = {
  findUsers,
  findUserById,
  insertUser,
  updateUser,
  deleteUser,
};
