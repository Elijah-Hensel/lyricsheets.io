import React, { useState } from "react";
import { createTodo } from "../api/user_todos";
import { Button, Modal, TextField } from "@material-ui/core/";

const TodoForm = ({todo}) => {
    const [content, setContent] = useState("");
    const handleCreateTodo = async (event) => {
        try {
            event.preventDefault();
            const { newTodo } = await createTodo(
                content
            );
            setTodo((prevTodos) => {
                return [...prevTodos, newTodo];
            });
            setContent("")
        } catch (error) {
            throw error;
        }
    }

    return <>
        <TextField
          type="text"
          label="content"
          placeholder="content"
          fullWidth
          value={content}
          onInput={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
    </>;
};

export default TodoForm;
