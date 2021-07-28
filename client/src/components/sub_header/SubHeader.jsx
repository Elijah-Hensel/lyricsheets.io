import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./SubHeader.css";
import FormatListBulletedTwoToneIcon from "@material-ui/icons/FormatListBulleted";
import ImportContactsTwoToneIcon from "@material-ui/icons/ImportContactsTwoTone";

export default function SubHeader({
  utilityIsOpen,
  setUtilityIsOpen,
  todoActive,
  setTodoActive,
  lookUpActive,
  setLookUpActive,
}) {
  const [activeTabValue, setActiveTabValue] = useState(false);

  const handleTodoClick = (event) => {
    utilityIsOpen ? setUtilityIsOpen(false) : setUtilityIsOpen(true);
    todoActive ? setTodoActive(false) : setTodoActive(true);
    console.log(todoActive, lookUpActive);
  };

  const handleLookUpClick = (event) => {
    utilityIsOpen ? setUtilityIsOpen(false) : setUtilityIsOpen(true);
    lookUpActive ? setLookUpActive(false) : setLookUpActive(true);
    console.log(todoActive, lookUpActive);
  };

  return (
    <div className="sub-header">
      <div className="button-container">
        <Button
          onClick={handleTodoClick}
          style={
            utilityIsOpen && todoActive ? { backgroundColor: "#98e8d9" } : null
          }
          className="todo-btn"
          size="small"
          value="todo"
        >
          <FormatListBulletedTwoToneIcon
            fontSize="medium"
            onClick={handleTodoClick}
            style={
              utilityIsOpen && todoActive
                ? { color: "#f7f7f7" }
                : { color: "#7a7bc7" }
            }
          />
        </Button>
        <Button
          onClick={handleLookUpClick}
          style={
            utilityIsOpen && lookUpActive
              ? { backgroundColor: "#98e8d9" }
              : null
          }
          className="look-up-btn"
          size="small"
          value="look-up"
        >
          <ImportContactsTwoToneIcon
            fontSize="medium"
            style={
              utilityIsOpen && lookUpActive
                ? { color: "#f7f7f7" }
                : { color: "#7a7bc7" }
            }
          />
        </Button>
      </div>
    </div>
  );
}
