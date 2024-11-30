const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

const userController = require("../routes/user/user.controller");
const groupController = require("../routes/group/group.controller");
const userGroupController = require("../routes/userGroup/userGroup.controller");
const taskController = require("../routes/task/task.controller");

app.use(bodyParser.json());

app.use("/users", userController);
app.use("/groups", groupController);
app.use("/user-group", userGroupController);
app.use("/tasks", taskController);

app.listen(PORT, () => {
  console.log("Express running in PORT: " + PORT);
});
