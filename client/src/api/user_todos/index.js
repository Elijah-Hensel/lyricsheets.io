import axios from "axios";

export async function grabAllUserTodos() {
  try {
    const { data } = await axios.get("/api/user-todos");
    console.log(data, "USER TODOS GRABBED");
    return data.todos;
  } catch (error) {
    throw error;
  }
}
