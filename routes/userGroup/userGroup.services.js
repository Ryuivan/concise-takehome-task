const {
  findUserById,
  findGroupById,
  addUserToGroupInDatabase,
  deleteUserFromGroupInDatabase,
} = require("./userGroup.repository");

const addUserToGroup = async (userId, groupId) => {
  const user = await findUserById(parseInt(userId));
  const group = await findGroupById(parseInt(groupId));

  if (!user || !group) {
    throw Error("User or group not found");
  }

  await addUserToGroupInDatabase(user, group);
};

const removeUserFromGroup = async (userId, groupId) => {
  const user = await findUserById(parseInt(userId));
  const group = await findGroupById(parseInt(groupId));

  if (!user || !group) {
    throw Error("User or group not found");
  }

  await deleteUserFromGroupInDatabase(user, group);
};

module.exports = {
  addUserToGroup,
  removeUserFromGroup,
};
