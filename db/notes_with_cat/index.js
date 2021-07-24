const { client } = require("../index");

async function createNoteWithCat({ catId, title, content }) {
  try {
    const createDate = new Date(Date.now()).toLocaleString().split(",")[0];
    console.log(createDate, "Date created");
    const {
      rows: [note],
    } = await client.query(
      `
        INSERT INTO notes_with_cat(cat_id, title, content, create_date)
        VALUES($1, $2, $3, $4)
        RETURNING *;
      `,
      [catId, title, content, createDate]
    );
    return note;
  } catch (err) {
    console.error("Could not createNoteWithCat!");
    throw err;
  }
}

async function getAllNotesWithCat() {
  try {
    const { rows: note } = await client.query(
      `
        SELECT *
        FROM notes_with_cat
      `
    );

    return note;
  } catch (err) {
    console.error("Could not get all notes with categories!");
    throw err;
  }
}

async function getNotesWithCatById(id) {
  try {
    const { rows: note } = await client.query(
      `
      SELECT *
      FROM notes_with_cat
      WHERE id=$1
      `,
      [id]
    );

    if (!note) {
      console.error("No note with that id exists");
    }

    return note;
  } catch (err) {
    console.error("Could not get Notes with category by id");
    throw err;
  }
}

async function getNotesWithCatByUserId(userId) {
  try {
    const { rows: note } = await client.query(
      `
      SELECT *
      FROM notes_with_cat
      WHERE user_id=$1
      `,
      [userId]
    );

    if (!note) {
      console.error("No note with that user id exists");
    }

    return note;
  } catch (err) {
    console.error("Could not get Notes with category by user id");
    throw err;
  }
}

module.exports = {
  createNoteWithCat,
  getAllNotesWithCat,
  getNotesWithCatById,
  getNotesWithCatByUserId,
};
