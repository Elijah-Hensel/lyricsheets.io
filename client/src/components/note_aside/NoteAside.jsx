import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "300px",
    height: "77vh",
  },
  demo: {
    marginLeft: ".5rem",
    marginTop: ".5rem",
    maxWidth: 300,
    backgroundColor: "#fdfbfb",
    border: "1px solid #d5d3da",
    borderRadius: "10px",
    height: "100%",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let formattedDate = cDay + "/" + cMonth + "/" + cYear;

export default function NoteAside({ grabbedNotesNoCat }) {
  const classes = useStyles();
  const [secondary, setSecondary] = useState(true);
  const [title, setTitle] = useState("Create a new Lyricsheet!");
  const [lastEdited, setLastEdited] = useState(formattedDate);

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <List>
          {grabbedNotesNoCat ? (
            grabbedNotesNoCat.map((note) => {
              return (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={note.title}
                    secondary={secondary ? "Last Edited: " + lastEdited : null}
                    key={grabbedNotesNoCat ? grabbedNotesNoCat[0].id : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })
          ) : (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={title}
                secondary={() => {
                  setSecondary(false);
                }}
                key={null}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );
}
