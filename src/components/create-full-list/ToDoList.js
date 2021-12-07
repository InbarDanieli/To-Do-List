import React from "react";
import OptionItem from "../item-options/OptionItem";
import ToDoItem from "../to-do-item/ToDoItem";

function ToDoList(props) {
  /** @type {strnig[]} */
  const items = props.items;
  const listItems = items.map((item, index) =>
    <div>
      <ToDoItem Text={item} key={item + index}/>
      <OptionItem />
    </div>
  );
  return (

    <ul>{listItems}</ul>
  );
}

export default ToDoList