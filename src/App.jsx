import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Welcometext from "./components/Welcometext";
import "./App.css";
import { useState } from "react";

function App() {


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem =(itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (TodoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== TodoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted:${TodoItemName}`);
  }

  return (
    <center classNameName="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <Welcometext></Welcometext>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
