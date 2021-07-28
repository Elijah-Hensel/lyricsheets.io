import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./SubHeaderDropdown.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "200px",
  },
});

export default function SubHeaderDropdown() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <span square className={classes.root}>
      <div
        className="dropdown-list"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Button className="dropdown-btn">RECENTS</Button>
        <Button className="dropdown-btn">FAVORITES</Button>
        <Button className="dropdown-btn">NEARBY</Button>
      </div>
    </span>
  );
}
