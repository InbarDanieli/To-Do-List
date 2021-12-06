import React, { useState } from "react";

function ToDoItem(props) {
  const [checked, setChecked] = useState('none')

  function EditLineTrough() {
    if (checked === 'none') {
      setChecked('line-through')
    }
    else {
      setChecked('none')
    }
  }

  return (
    <div>
      <input type="checkbox" onChange={EditLineTrough}></input>
      <span style={{ textDecoration: checked }}>{props.Text}</span>
    </div>)
}

export default ToDoItem;