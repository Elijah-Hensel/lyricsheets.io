import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { magic } from "./lib/magic";
import { UserContext } from "./lib/UserContext";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
import Callback from "./components/callback";
import Layout from "./components/layout";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import NoteAside from "./components/note_aside/NoteAside";
import Note from "./components/note/Note";
import Utility from "./components/utility/Utility";
import { grabAllUsers } from "./api";
import { grabAllNotesNoCat } from "./api";
import { grabAllUserTodos } from "./api/user_todos";
import { MailOutline } from "@material-ui/icons";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  const [authUser, setAuthUser] = useState(true);
  const [utilityIsOpen, setUtilityIsOpen] = useState(false);
  const [todoActive, setTodoActive] = useState(false);
  const [lookUpActive, setLookUpActive] = useState(false);
  const [grabbedUsers, setGrabbedUsers] = useState("");
  const [grabbedNotesNoCat, setGrabbedNotesNoCat] = useState("");
  const [grabbedUserTodos, setGrabbedUserTodos] = useState("");

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

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, set it to {user: null}
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={[user, setUser]}>
          <NavBar />
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/callback" component={Callback} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
