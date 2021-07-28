const apiRouter = require("express").Router();
const usersRouter = require("./users");
const notesCategoriesRouter = require("./notes_categories");
const notesNoCatRouter = require("./notes_no_cat");
const notesWithCatRouter = require("./notes_with_cat");
const userTodosRouter = require("./user_todos");

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.use("/users", usersRouter);

apiRouter.use("/notes-categories", notesCategoriesRouter);

apiRouter.use("/notes-no-cat", notesNoCatRouter);

apiRouter.use("/notes-with-cat", notesWithCatRouter);

apiRouter.use("/user-todos", userTodosRouter);

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
