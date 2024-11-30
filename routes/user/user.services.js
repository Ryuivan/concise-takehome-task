const {
  findUsers,
  findUserById,
  insertUser,
  updateUser,
  deleteUser,
} = require("./user.repository");

const getAllUsers = async () => {
  return await findUsers();
};

const getUserById = async (id) => {
  const user = await findUserById(id);

  if (!user) {
    throw Error("User not found");
  }

  return user;
};

const createUser = async (newUserData) => {
  const user = await insertUser(newUserData);

  return user;
};

const updateUserById = async (id, newUserData) => {
  await getUserById(id);

  const newUser = await updateUser(id, newUserData);

  return newUser;
};

const deleteUserById = async (id) => {
  await getUserById(id);

  await deleteUser(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
