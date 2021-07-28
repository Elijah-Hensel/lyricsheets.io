require("dotenv").config();
const express = require("express");
const usersRouter = express.Router();
const { getAllUsers, getUserById } = require("../../db/users");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();

    res.send({
      message: "All Users Grabbed",
      users,
    });
  } catch ({ name, message }) {
    next({ name: "GetAllUsersError", message: "Unable to get all users!" });
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.send({
      message: `User With Id '${id}' Grabbed`,
      user,
    });
  } catch ({ name, message }) {
    next({
      name: "GetUserByIdError",
      message: "Unable to get user with that id",
    });
  }
});
module.exports = usersRouter;
