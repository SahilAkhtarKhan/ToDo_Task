import React from "react";
import "./ToDoButtons.css";
function ToDoButtons(props) {
  const { label, onClickEvent, deleteButtonStyle, addTaskStyle } = props;
  return (
    <>
      <button
        style={label=="Delete" ? deleteButtonStyle : addTaskStyle}
        onClick={onClickEvent}
      >
        {label}
      </button>
    </>
  );
}

export default ToDoButtons;
