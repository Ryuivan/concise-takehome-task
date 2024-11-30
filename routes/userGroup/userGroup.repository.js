const { findUserById } = require("../user/user.repository");
const { findGroupById } = require("../group/group.repository");

const addUserToGroupInDatabase = async (user, group) => {
  await user.addGroup(group);
};

const deleteUserFromGroupInDatabase = async (user, group) => {
  await user.removeGroup(group);
};

module.exports = {
  findUserById,
  findGroupById,
  addUserToGroupInDatabase,
  deleteUserFromGroupInDatabase,
};
