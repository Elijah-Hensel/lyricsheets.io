import React, { useState, useEffect } from "react";
import Todo from "../todo/Todo";
import { Button } from "@material-ui/core";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import "./TodoList.css";
import TodoForm from "../TodoForm";
import { grabAllUserTodos } from "../../api/user_todos";

export default function TodoList() {
  const [todoList, setToDoList] = useState([]);
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
  console.log(todos, "~~~~~~~~~~todos~~~~~~~~~~~")

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <span>I Need To Do...</span>
        <Button className="create-todo-btn">
          <CreateTwoToneIcon className="create-todo-icon" />
        </Button>
      </div>
      <div className="todo-list">
        <TodoForm />
        {todos.map((todo, idx) => {
          return <Todo key={idx} todos={todos} todo={todo} setToDoList={setToDoList}/>;
          })}
        <Todo />
      </div>
    </div>
  );
}
