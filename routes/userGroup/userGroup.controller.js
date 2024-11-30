const express = require("express");
const router = express.Router();
const { addUserToGroup, removeUserFromGroup } = require("./userGroup.services");

router.post("/add/user/:userId/group/:groupId", async (req, res) => {
  try {
    const { userId, groupId } = req.params;

    await addUserToGroup(userId, groupId);

    res.status(200).send("User added to group");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/remove/user/:userId/group/:groupId", async (req, res) => {
  try {
    const { userId, groupId } = req.params;

    await removeUserFromGroup(userId, groupId);

    res.status(200).send("User removed from group");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
