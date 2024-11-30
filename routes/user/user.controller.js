const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
} = require("./user.services");

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = req.body;

    const user = await createUser(newUser);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const newUserData = req.body;

    if (
      !(
        newUserData.name &&
        newUserData.email &&
        newUserData.phone &&
        newUserData.address
      )
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const product = await updateUserById(userId, newUserData);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const newUserData = req.body;

    const product = await updateUserById(userId, newUserData);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await deleteUserById(id);

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
