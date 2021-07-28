import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TodoRadio from "../todo_radio/TodoRadio";
import "./Todo.css";

const useStyles = makeStyles({
  root: {
    minWidth: "92%",
    maxWidth: 275,
    boxShadow: "none",
    padding: "0 .5rem",
  },
});

export default function Todo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className="todo-content">
        <TodoRadio />
        <Typography className="todo-text" color="textPrimary">
          Complete Lyric Sheet
        </Typography>
      </CardContent>
      <CardContent className="todo-content">
        <TodoRadio />
        <Typography className="todo-text" color="textPrimary">
          Come up with sick word for "die"
        </Typography>
      </CardContent>
    </Card>
  );
}
