require("dotenv").config();
const express = require("express");
const { getAllUserTodos } = require("../../db/user_todos");
const userTodosRouter = express.Router();

userTodosRouter.get("/", async (req, res, next) => {
  try {
    const todos = await getAllUserTodos();

    res.send({
      message: "All User Todos Grabbed",
      todos,
    });
  } catch ({ name, message }) {
    next({
      name: "GetAllUserTodosError",
      message: "Unable to get all User Todos!",
    });
  }
});

userTodosRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getNotesNoCatById(id);
    res.send(data);
  } catch ({ name, message }) {
    next({
      name: "GetNotesNoCatByIdError",
      message: "Unable to get note by id!",
    });
  }
});

userTodosRouter.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getNotesNoCatByUserId(id);
    res.send(data);
  } catch ({ name, message }) {
    next({
      name: "GetNotesNoCatByIdError",
      message: "Unable to get note by user id!",
    });
  }
});

module.exports = userTodosRouter;
