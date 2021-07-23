const { client } = require("../index");

async function createUser({ username, password, email, name }) {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
        INSERT INTO users(username, password, email, name)
        VALUES($1, $2, $3, $4)
        RETURNING *;
      `,
      [username, password, email, name]
    );
    return users;
  } catch (err) {
    console.error("Could not createUser!");
    throw err;
  }
}

async function getAllUsers() {
  try {
    const { rows: id } = await client.query(`
    SELECT id 
    FROM users;
  `);

    const users = await Promise.all(id.map((user) => getUserById(user.id)));
    return users;
  } catch (err) {
    throw err;
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE id=$1;
    `,
      [userId]
    );

    if (!user) {
      throw {
        name: "UserNotFoundError",
        message: "Could not find a User with that user_id",
      };
    }

    delete user.password;

    await attachNotesNoCatToUser(userId, user);
    await attachTodosToUser(userId, user);

    return user;
  } catch (error) {
    throw error;
  }
}

async function attachNotesNoCatToUser(userId, user) {
  try {
    const { rows: notes_no_cat } = await client.query(
      `
    SELECT notes_no_cat.*
    FROM notes_no_cat
    INNER JOIN users ON users.id = notes_no_cat.id
    WHERE notes_no_cat.user_id = $1
  `,
      [userId]
    );

    if (notes_no_cat) {
      user.notes_no_cat = notes_no_cat;
    }
  } catch (err) {
    throw err;
  }
}

async function attachTodosToUser(userId, user) {
  try {
    const { rows: todos } = await client.query(
      `
    SELECT user_todos.*
    FROM user_todos
    INNER JOIN users ON users.id = user_todos.id
    WHERE user_todos.user_id = $1
  `,
      [userId]
    );

    if (todos) {
      user.todos = todos;
    }
  } catch (err) {
    throw err;
  }
}

async function getUserByUsername(username) {}

async function verifyUniqueUser(username, email) {}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
