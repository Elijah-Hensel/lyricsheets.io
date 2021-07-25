import axios from "axios";

export async function grabAllUserTodos() {
  try {
    const { data } = await axios.get("/api/user-todos");
    console.log(data, "USER TODOS GRABBED");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createTodo(
  userId,
  content,
  active
) {
  try {
    const { data } = await axios.post("/api/user-todos", {
      userId,
      content,
      active
    });

    return data;
  } catch (error) {
    throw error;
  }
}