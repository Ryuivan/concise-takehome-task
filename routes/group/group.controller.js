const express = require("express");
const router = express.Router();
const {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroupById,
  deleteGroupById,
} = require("./group.services");

router.get("/", async (req, res) => {
  try {
    const groups = await getAllGroups();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const group = await getGroupById(id);

    res.status(200).json(group);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newGroup = req.body;

    const group = await createGroup(newGroup);
    res.status(201).json(group);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const groupId = parseInt(req.params.id);
    const newGroupData = req.body;

    if (!(newGroupData.name && newGroupData.description)) {
      return res.status(400).json({ error: "Some field is missing" });
    }

    const newGroup = await updateGroupById(groupId, newGroupData);

    res.status(200).json(newGroup);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const groupId = parseInt(req.params.id);
    const newGroupData = req.body;

    const newGroup = await updateGroupById(groupId, newGroupData);

    res.status(200).json(newGroup);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await deleteGroupById(id);

    res.status(200).json({ message: "Group deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
