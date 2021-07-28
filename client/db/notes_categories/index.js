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

async function joinNotesOnNotesCategory(categoryId, category) {
  try {
    const { rows: notes_with_cat } = await client.query(
      `
          SELECT notes_with_cat.*
          FROM notes_with_cat
          INNER JOIN notes_categories ON notes_categories.id = notes_with_cat.id
          WHERE notes_with_cat.cat_id = $1
        `,
      [categoryId]
    );

    if (notes_with_cat) {
      category[0].notes_with_cat = notes_with_cat;
    }
  } catch (err) {
    console.error("Could not join notes to category!");
    throw err;
  }
}

async function getAllNotesCategories() {
  try {
    const { rows: id } = await client.query(`
        SELECT id 
        FROM notes_categories;
  `);

    const categories = await Promise.all(
      id.map((category) => getNotesCategoriesById(category.id))
    );
    return categories;
  } catch (err) {
    console.error("Could not get all notes categories!");
    throw err;
  }
}

async function getNotesCategoriesById(id) {
  try {
    const { rows: category } = await client.query(
      `
        SELECT *
        FROM notes_categories
        WHERE id=$1
        `,
      [id]
    );

    if (!category) {
      console.error("No note with that id exists");
    }

    await joinNotesOnNotesCategory(id, category);

    return category;
  } catch (err) {
    console.error("Could not get Notes without category by id");
    throw err;
  }
}

module.exports = {
  createNotesCategory,
  getAllNotesCategories,
  joinNotesOnNotesCategory,
};
