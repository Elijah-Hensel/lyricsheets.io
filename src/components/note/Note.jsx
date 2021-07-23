import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import "./Note.css";

export default function Note() {
  const [noteContent, setNoteContent] = useState(
    "Let your inspiration pour out..."
  );
  return (
    <div className="note-input-container">
      <InputBase
        fullWidth={true}
        multiline={true}
        className="note-input"
        id="note-input"
        label="note-input"
        defaultValue={noteContent}
        onChange={(event) => {
          setNoteContent(event.target.value);
        }}
      />
    </div>
  );
}
