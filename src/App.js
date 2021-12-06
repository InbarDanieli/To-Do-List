import './App.css';
import TaskInput from './components/task-input/TaskInput';
import React, { useState } from 'react';
import NumberList from './components/to-do-item/ToDoList';
function App() {
  const [miaw, setMiaw] = useState([])
  console.log(miaw);
  return (
    <div className="App">
      <TaskInput Placeholder="add item..." submit={task => setMiaw(miaw.concat(task))} />
      <NumberList numbers = {miaw}/>
    </div>
  );
}

export default App;