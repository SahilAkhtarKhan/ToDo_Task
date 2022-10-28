import React from "react";
import { useState } from "react";
import ToDoButtons from "./ToDoButtons";
import "./ToDoList.css";

function ShowToDoList(props) {
  const [deleteButtonStyle, setDeleteButtonStyle] = useState({
    height: "30px",
    width: "70px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "red",
    position:"relative",
    left:"20px"
  });
  return (
    <div>
      <div className="single-task">
        <p
          style={{
            margin: "0px",
            position: "relative",
            right: "10px",
            bottom: "14px",
          }}
        >
          {props.count}
        </p>
        <span className="task-name-with-delete-btn">
          <p>{props.item}</p>

          {/* Delete button component */}
          
          <ToDoButtons
            label="Delete"
            onClickEvent={() => props.deleteToDo(props.uniqueId)}
            deleteButtonStyle={deleteButtonStyle}
          />
        </span>

        <i className="fa-solid fa-arrow-left left-arrow"></i>
        <i className="fa-solid fa-arrow-right right-arrow"></i>
      </div>
      <br />
    </div>
  );
}
export default ShowToDoList;
