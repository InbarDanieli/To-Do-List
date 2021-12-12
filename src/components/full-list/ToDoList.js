import React from "react";
import "./ToDoList.css"
import OptionItem from "../item-options/OptionItem";
import ToDoItem from "../to-do-item/ToDoItem";

function ToDoList(props) {
  /** @type {strnig[]} */
  const items = props.items;
  const listItems = items.map((item, index) =>
    <div className = "ListItem">
      <ToDoItem Text={item} key={item + index}/>
      <OptionItem className = "ItemOption"/>
    </div>
  );


  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default ToDoList