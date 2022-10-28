import "./ToDoInput.css";

function ToDoInput(props) {
  const {
    type = "text",
    inputValue,
    placeholder = "Add ToDo here...",
    onInputEvent,
  } = props;
  return (
    <>
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={onInputEvent}
      />
    </>
  );
}

export default ToDoInput;
