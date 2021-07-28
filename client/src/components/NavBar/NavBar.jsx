import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#1a1b50",
  },
}));

export default function IndexHeader() {
  const classes = useStyles();
  const handleClick = (event) => {
    window.location.href = "/login";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className="rgst-btn" color="inherit">
            <Link className="userButtons" to="/login" onClick={() => {}}>
              Register
            </Link>
          </Button>
          <Button onClick={handleClick} className="lgn-btn" color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
