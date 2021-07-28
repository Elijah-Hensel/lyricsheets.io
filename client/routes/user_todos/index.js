require("dotenv").config();
const express = require("express");
const {
  getAllUserTodos,
  getUserTodosById,
  getUserTodosByUserId,
} = require("../../db/user_todos");
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
    const data = await getUserTodosById(id);
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
    const data = await getUserTodosByUserId(id);
    res.send(data);
  } catch ({ name, message }) {
    next({
      name: "GetTodosByUserIdError",
      message: "Unable to get todos by user id!",
    });
  }
});

userTodosRouter.get("/user/:id/active", async (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = await getUserTodosByUserId(id);
    const activeTodos = [...todos].filter((todo) => todo.active);

    res.send(activeTodos);
  } catch ({ name, message }) {
    next({
      name: "GetActiveTodosByUserIdError",
      message: "Unable to get active todos by user id!",
    });
  }
});

userTodosRouter.get("/user/:id/inactive", async (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = await getUserTodosByUserId(id);
    const inactiveTodos = [...todos].filter((todo) => !todo.active);

    res.send(inactiveTodos);
  } catch ({ name, message }) {
    next({
      name: "GetInactiveTodosByUserIdError",
      message: "Unable to get inactive todos by user id!",
    });
  }
});

module.exports = userTodosRouter;
