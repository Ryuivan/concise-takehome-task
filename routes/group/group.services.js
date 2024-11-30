const {
  findGroups,
  findGroupById,
  insertGroup,
  updateGroup,
  deleteGroup,
} = require("./group.repository");

const getAllGroups = async () => {
  return await findGroups();
};

const getGroupById = async (id) => {
  const group = await findGroupById(id);

  if (!group) {
    throw Error("Group not found");
  }

  return group;
};

const createGroup = async (newGroupData) => {
  const group = await insertGroup(newGroupData);

  return group;
};

const updateGroupById = async (id, newGroupData) => {
  await getGroupById(id);

  const newGroup = await updateGroup(id, newGroupData);

  return newGroup;
};

const deleteGroupById = async (id) => {
  await getGroupById(id);

  await deleteGroup(id);
};

module.exports = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroupById,
  deleteGroupById,
};
