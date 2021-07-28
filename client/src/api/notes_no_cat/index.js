import axios from "axios";

export async function grabAllNotesNoCat() {
  try {
    const { data } = await axios.get("/api/notes-no-cat");
    console.log(data, "NOTES WITHOUT CATEGORY GRABBED");
    return data.notes;
  } catch (error) {
    throw error;
  }
}
