import { useState } from "react";

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }

  return (
    <div classNameName="container text-center">
      <div classNameName="row kg-row">
        <div classNameName="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
        </div>
        <div classNameName="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-success kg-button" onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;