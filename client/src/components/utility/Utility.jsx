import React from "react";
import "./Utility.css";
import TodoList from "../todo_list/TodoList";
import LookUp from "../look_up/LookUp";

export default function Utility({
  utilityIsOpen,
  setUtilityIsOpen,
  todoActive,
  setTodoActive,
  lookUpActive,
  setLookUpActive,
}) {
  return (
    <div className={utilityIsOpen ? "note-utility-container" : "hidden"}>
      {todoActive && <TodoList />}
      {lookUpActive && <LookUp />}
    </div>
  );
}
