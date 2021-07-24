const { client } = require("../index");

async function createNotesCategory({ userId, name }) {
  try {
    const {
      rows: [category],
    } = await client.query(
      `
        INSERT INTO notes_categories(user_id, name)
        VALUES($1, $2)
        RETURNING *;
      `,
      [userId, name]
    );
    return category;
  } catch (err) {
    console.error("Could not createNotesCategory!");
    throw err;
  }
}

module.exports = {
  createNotesCategory,
};
