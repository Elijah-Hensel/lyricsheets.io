const apiRouter = require("express").Router();
const usersRouter = require("./Users");
const notesNoCatRouter = require("./notes_no_cat");

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.use("/users", usersRouter);

apiRouter.use("/notes-no-cat", notesNoCatRouter);

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
