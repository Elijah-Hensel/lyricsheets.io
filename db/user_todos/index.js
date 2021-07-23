const { client } = require("../index");

async function createUserTodo({ userId, content, active }) {
  try {
    const {
      rows: [todo],
    } = await client.query(
      `
        INSERT INTO user_todos(user_id, content, active)
        VALUES($1, $2, $3)
        RETURNING *;
      `,
      [userId, content, active]
    );
    return todo;
  } catch (err) {
    console.error("Could not createUserTodo!");
    throw err;
  }
}

async function getAllUserTodos() {
  try {
    const { rows: todos } = await client.query(
      `
        SELECT *
        FROM user_todos
      `
    );

    return todos;
  } catch (err) {
    console.error("Could not get all user todos!");
    throw err;
  }
}

async function getUserTodosById(id) {
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

async function getUserTodosByUserId(userId) {
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
  createUserTodo,
  getAllUserTodos,
};
