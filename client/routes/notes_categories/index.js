require("dotenv").config();
const express = require("express");
const { getAllNotesCategories } = require("../../db/notes_categories");
const notesCategoriesRouter = express.Router();

notesCategoriesRouter.get("/", async (req, res, next) => {
  try {
    const notes = await getAllNotesCategories();

    res.send({
      message: "All Notes Categories Grabbed",
      notes,
    });
  } catch ({ name, message }) {
    next({
      name: "GetAllNotesNoCatError",
      message: "Unable to get all notes categories!",
    });
  }
});

// notesWithCatRouter.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const data = await getNotesNoCatById(id);
//     res.send(data);
//   } catch ({ name, message }) {
//     next({
//       name: "GetNotesNoCatByIdError",
//       message: "Unable to get note by id!",
//     });
//   }
// });

// notesWithCatRouter.get("/user/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const data = await getNotesNoCatByUserId(id);
//     res.send(data);
//   } catch ({ name, message }) {
//     next({
//       name: "GetNotesNoCatByIdError",
//       message: "Unable to get note by user id!",
//     });
//   }
// });

module.exports = notesCategoriesRouter;
