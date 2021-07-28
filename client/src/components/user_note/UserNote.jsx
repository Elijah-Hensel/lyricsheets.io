import Header from "../header/Header";
import NoteAside from "../note_aside/NoteAside";
import Note from "../note/Note";
import Utility from "../utility/Utility";

export default function UserNote() {
  return (
    <>
      <Header />
      <div className="App">
        <NoteAside />
        <Note />
        <Utility />
      </div>
    </>
  );
}
