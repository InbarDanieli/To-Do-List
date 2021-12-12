import './App.css';
import React, { useState } from 'react';
import TaskInput from './components/task-input/TaskInput';
import ToDoList from './components/full-list/ToDoList';


function App() {
  const [listArr, setListArr] = useState([])
  console.log(listArr);
  return (
    <div className="App">
      <TaskInput Placeholder="add item..." submit={task => setListArr(listArr.concat(task))} />
      <ToDoList items = {listArr}/>
    </div>
  );
}

export default App;