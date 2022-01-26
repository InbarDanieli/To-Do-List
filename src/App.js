import './App.css';
import React, { useState } from 'react';
import TaskInput from './components/task-input/TaskInput';
import ToDoList from './components/full-list/ToDoList';


function App() {
  console.log(localStorage)
  const [listArr, setListArr] = useState(localStorage.length > 0 ? getLSitems() : [])


  function setLSitems(items) {
    localStorage.setItem("items", items)
    setListArr(items)
  }

  function getLSitems() {
   const items = localStorage.getItem("items").split(",") 
   return items
  }

  return (
    <div className="App">
      <TaskInput Placeholder="add item..." submit={task => setLSitems(listArr.concat(task))} />
      <ToDoList items = {listArr}/>
    </div>
  );
}

export default App;