import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import NoteAside from "./components/note_aside/NoteAside";
import Note from "./components/note/Note";
import Utility from "./components/utility/Utility";
import { grabAllUsers } from "./api";
import { grabAllNotesNoCat } from "./api";
import { grabAllUserTodos } from "./api/user_todos";

function App() {
  const [authUser, setAuthUser] = useState(true);
  const [utilityIsOpen, setUtilityIsOpen] = useState(false);
  const [todoActive, setTodoActive] = useState(false);
  const [lookUpActive, setLookUpActive] = useState(false);
  const [grabbedUsers, setGrabbedUsers] = useState("");
  const [grabbedNotesNoCat, setGrabbedNotesNoCat] = useState("");
  const [user, setUser] = useState();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    grabAllUserTodos()
      .then(({todos}) => {
        setTodos(todos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function getAllGrabbedNotesNoCat() {
    try {
      const notes = await grabAllNotesNoCat();
      setGrabbedNotesNoCat(notes);
    } catch (err) {
      console.error("getAllGrabbedNotesNoCatError");
      throw err;
    }
  }

  async function getAllGrabbedUsers() {
    try {
      const users = await grabAllUsers();
      setGrabbedUsers(users);
    } catch (err) {
      console.error("getAllGrabbedUsersError");
      throw err;
    }
  }

  useEffect(() => {
    getAllGrabbedNotesNoCat();
    getAllGrabbedUsers();
  }, [setGrabbedNotesNoCat]);

  return (
    <div className="App">
      {authUser ? (
        <>
          <Header
            todoActive={todoActive}
            setTodoActive={setTodoActive}
            lookUpActive={lookUpActive}
            setLookUpActive={setLookUpActive}
            utilityIsOpen={utilityIsOpen}
            setUtilityIsOpen={setUtilityIsOpen}
          />
          <div className="main-note-container">
            <NoteAside grabbedNotesNoCat={grabbedNotesNoCat} />
            <Note />
            <Utility
              todoActive={todoActive}
              setTodoActive={setTodoActive}
              lookUpActive={lookUpActive}
              setLookUpActive={setLookUpActive}
              utilityIsOpen={utilityIsOpen}
              setUtilityIsOpen={setUtilityIsOpen}
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        </>
      ) : (
        <>
          <NavBar />
          <Main />
        </>
      )}
    </div>
  );
}

export default App;
