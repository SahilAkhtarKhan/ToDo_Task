import { useState } from "react";
import "./ToDo.css";
import ShowToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import ToDoButtons from "./ToDoButtons";
import { useEffect } from "react";

function MyToDo() {
  const [open, setOpen] = useState(false); //  For Add task popup window
  const [newTodo, setnewTodo] = useState(""); // For containing new task
  const [toDoList, setToDoList] = useState([]); 
  const [toDoList2, setToDoList2] = useState([]);
  const [toDoList3, setToDoList3] = useState([]);
  const [toDoList4, setToDoList4] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const [stepsCount, setStepsCount] = useState([1, 2, 3, 4]);
  const [taskCount, setTaskCount] = useState(0);
  // const [taskListStyle, setTaskListStyle] = useState({});
  const [addTaskStyle, setAddTaskStyle] = useState({
    height: "40px",
    width: "110px",
    border: "none",
    backgroundColor: "#e5e8ea",
  });

 

  useEffect(() => {
    if (toDoList.length % 3 == 0) {
      setTaskCount(0);
    } else {
      setTaskCount(taskCount + 1);
    }
  }, [toDoList]);


  // handling new input todo
  function _handleNewToDo(e) {
    setnewTodo(e.target.value);
  }

  // handling lists of ToDo
  function _handleAddToDo() {
    setOpen(false);
    
    const taskObj = {
      id: new Date().getTime(),
      content: newTodo,
    };
    if(toDoList.length<3){
      setToDoList([...toDoList, taskObj]);
      setnewTodo("");
    } else{
      if(toDoList2.length==3){
        if(toDoList3.length==3){
        if(toDoList4.length==3){
          return
        }
          setToDoList4([...toDoList4, taskObj]);
          setnewTodo("");
          return
        }
        setToDoList3([...toDoList3, taskObj]);
        setnewTodo("");
        return
      }
      setToDoList2([...toDoList2, taskObj]);
      setnewTodo("");
    }
    
  }

  //handling Popup

  function _handlePopup() {
    setOpen(true);
  }

  // handling delete ToDo
  function _handleDeleteToDo(id) {
    const oldList = [...toDoList];
    const newList = oldList.filter((elem) => {
      return elem.id !== id;
    });
    setToDoList([...newList]);
    // delete for step-2
    const oldList2 = [...toDoList2];
    const newList2 = oldList2.filter((elem) => {
      return elem.id !== id;
    });
    setToDoList2([...newList2]);
    // delete for step-3
    const oldList3 = [...toDoList3];
    const newList3 = oldList3.filter((elem) => {
      return elem.id !== id;
    });
    setToDoList3([...newList3]);

    // delete for step-4

    const oldList4 = [...toDoList4];
    const newList4 = oldList4.filter((elem) => {
      return elem.id !== id;
    });
    setToDoList4([...newList4]);
  }

  return (
    <div className="main-container">
      <div className="list-main-container">
        {/* search bar  */}
        <div className="search-box-with-popup-btn">
          <ToDoInput
            inputType="text"
            placeholder="Search"
            inputValue={searchInput}
            onInputEvent={(e) => setSearchInput(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          {/* Pop-up button  */}
          <div>
            <i className="fa-solid fa-plus plus-icon"></i>
            <ToDoButtons
              label="Add"
              onClickEvent={_handlePopup}
              addTaskStyle={addTaskStyle}
            />
          </div>
        </div>

        {/* conditionally rendering popup window */}
        {open ? (
          <div
            style={{
              position: "fixed",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              backgroundColor: " rgba(0, 0, 0, .7)",
              zIndex: "1000",
            }}
          >
            <div className="popup-window">
              <i
                className="fa-solid fa-xmark popup-close"
                onClick={() => setOpen(false)}
              ></i>

              <h1>Add Task</h1>
              {/* Add task Input component */}
              <div style={{ position: "relative", bottom: "40px" }}>
                <div>
                  <ToDoInput
                    inputType="text"
                    inputValue={newTodo}
                    placeholder="Add task here..."
                    onInputEvent={_handleNewToDo}
                  />
                </div>
                <br />
                {/* Add to list button component */}
                <div id="add-Button">
                  <ToDoButtons
                    label="Add"
                    onClickEvent={_handleAddToDo}
                    addTaskStyle={addTaskStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="steps">
          {/* {stepsCount.map((step, key) => {
            return ( */}
              <div className="step" id="1" >
                <p>STEP 1</p>
              </div>
              <div className="step" id="2">
                <p>STEP 2</p>
              </div>
              <div className="step" id="3">
                <p>STEP 3</p>
              </div>
              <div className="step" id="4">
                <p>STEP 4</p>
              </div>
            {/* ); */}
           {/* })} */}
        </div>
        {/*  Rendering the list of ToDo */}
        
        <div className="task-lists-container">
          {toDoList.filter((val, ind)=>{
            if(searchInput==""){
              return val
            } else if(val.content.toLowerCase().includes(searchInput.toLowerCase())){
              return val;
            }
          }).map((toDoItem, key) => {
            return (
                
                <ShowToDoList // List Component
                uniqueId={toDoItem.id}
                key={toDoItem.uniqueId}
                item={toDoItem.content}
                deleteToDo={_handleDeleteToDo}
                // stepsCount={stepsCount}
                count={key+1}
                /> 
            );
          })}
        </div>
        <div className="task-lists-container-02">
          {toDoList2.filter((val, ind)=>{
            if(searchInput==""){
              return val
            } else if(val.content.toLowerCase().includes(searchInput.toLowerCase())){
              return val;
            }
          }).map((toDoItem, key) => {
            return (
                
                <ShowToDoList // List Component
                uniqueId={toDoItem.id}
                key={toDoItem.uniqueId}
                item={toDoItem.content}
                deleteToDo={_handleDeleteToDo}
                // stepsCount={stepsCount}
                count={key+4}
                /> 
            );
          })}
        </div>
        <div className="task-lists-container-03">
          {toDoList3.filter((val, ind)=>{
            if(searchInput==""){
              return val
            } else if(val.content.toLowerCase().includes(searchInput.toLowerCase())){
              return val;
            }
          }).map((toDoItem, key) => {
            return (
                
                <ShowToDoList // List Component
                uniqueId={toDoItem.id}
                key={toDoItem.uniqueId}
                item={toDoItem.content}
                deleteToDo={_handleDeleteToDo}
                // stepsCount={stepsCount}
                count={key+7}
                /> 
            );
          })}
        </div>
        <div className="task-lists-container-04">
          {toDoList4.filter((val, ind)=>{
            if(searchInput==""){
              return val
            } else if(val.content.toLowerCase().includes(searchInput.toLowerCase())){
              return val;
            }
          }).map((toDoItem, key) => {
            return (
                
                <ShowToDoList // List Component
                uniqueId={toDoItem.id}
                key={toDoItem.uniqueId}
                item={toDoItem.content}
                deleteToDo={_handleDeleteToDo}
                // stepsCount={stepsCount}
                count={key+10}
                /> 
            );
          })}
        </div>
      </div>
      
    </div>
  );
}

export default MyToDo;
