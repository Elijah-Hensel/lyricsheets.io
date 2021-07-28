import React from "react";
import Todo from "../todo/Todo";
import { Button } from "@material-ui/core";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import "./TodoList.css";

export default function TodoList() {
  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <span>I Need To Do...</span>
        <Button className="create-todo-btn">
          <CreateTwoToneIcon className="create-todo-icon" />
        </Button>
      </div>
      <div className="todo-list">
        <Todo />
      </div>
    </div>
  );
}
