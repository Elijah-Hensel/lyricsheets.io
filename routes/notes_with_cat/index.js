require("dotenv").config();
const express = require("express");
const { getAllNotesWithCat } = require("../../db/notes_with_cat");
const notesWithCatRouter = express.Router();

notesWithCatRouter.get("/", async (req, res, next) => {
  try {
    const notes = await getAllNotesWithCat();

    res.send({
      message: "All Notes With A Category Grabbed",
      notes,
    });
  } catch ({ name, message }) {
    next({
      name: "GetAllNotesNoCatError",
      message: "Unable to get all notes without a category!",
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

module.exports = notesWithCatRouter;
