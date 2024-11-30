const { User, Group, UserGroup } = require("../../models");

const findGroups = async () => {
  const groups = await Group.findAll({
    include: [User],
  });

  return groups;
};

const findGroupById = async (id) => {
  const group = await Group.findByPk(id, {
    include: [User],
  });

  return group;
};

const insertGroup = async (group) => {
  const newGroup = await Group.create(group);

  return newGroup;
};

const updateGroup = async (id, group) => {
  const updatedGroup = await Group.update(group, {
    where: {
      id,
    },
    include: [User],
  });

  return updatedGroup;
};

const deleteGroup = async (id) => {
  const deletedGroup = await Group.destroy({
    where: {
      id,
    },
  });

  return deletedGroup;
};


module.exports = {
  findGroups,
  findGroupById,
  insertGroup,
  updateGroup,
  deleteGroup,
};
