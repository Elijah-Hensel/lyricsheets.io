const { client } = require("../index");

async function createNoteNoCat({ userId, title, content }) {
  try {
    const createDate = new Date(Date.now()).toLocaleString().split(",")[0];
    console.log(createDate, "Date created");
    const {
      rows: [note],
    } = await client.query(
      `
        INSERT INTO notes_no_cat(user_id, title, content, create_date)
        VALUES($1, $2, $3, $4)
        RETURNING *;
      `,
      [userId, title, content, createDate]
    );
    return note;
  } catch (err) {
    console.error("Could not createNoteNoCat!");
    throw err;
  }
}

async function getAllNotesNoCat() {
  try {
    const { rows: note } = await client.query(
      `
        SELECT *
        FROM notes_no_cat
      `
    );

    return note;
  } catch (err) {
    console.error("Could not get all notes without categories!");
    throw err;
  }
}

async function getNotesNoCatById(id) {
  try {
    const { rows: note } = await client.query(
      `
      SELECT *
      FROM notes_no_cat
      WHERE id=$1
      `,
      [id]
    );

    if (!note) {
      console.error("No note with that id exists");
    }

    return note;
  } catch (err) {
    console.error("Could not get Notes without category by id");
    throw err;
  }
}

async function getNotesNoCatByUserId(userId) {
  try {
    const { rows: note } = await client.query(
      `
      SELECT *
      FROM notes_no_cat
      WHERE user_id=$1
      `,
      [userId]
    );

    if (!note) {
      console.error("No note with that user id exists");
    }

    return note;
  } catch (err) {
    console.error("Could not get Notes without category by user id");
    throw err;
  }
}

module.exports = {
  createNoteNoCat,
  getAllNotesNoCat,
  getNotesNoCatById,
  getNotesNoCatByUserId,
};
