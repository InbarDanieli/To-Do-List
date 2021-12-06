import React, { useState } from "react";

function TaskInput(props) {
  const [task, setTask] = useState("");

  function ChangeHandler(e) {
    setTask(e.target.value)
  }

  function OnEnter(k) {
    if (k.key === 'Enter') {
      SubmitTask();
    }
  }

  function SubmitTask() {
    if (task === '')
    {
      alert("add react pop-up : cant add blanck input!")
    }

    else{
      props.submit(task)
      setTask('');
    }
  }

  return (
    <div>
      <input value={task} onChange={ChangeHandler} onKeyPress={OnEnter} placeholder={props.Placeholder}></input>
      <button onClick={SubmitTask}>+</button>
    </div>
  )
}

export default TaskInput