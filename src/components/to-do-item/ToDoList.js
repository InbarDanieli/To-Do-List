import React from "react";
import ToDoItem from "./ToDoItem";

function NumberList(props) {
  /** @type {strnig[]} */
  const numbers = props.numbers;
  const listItems = numbers.map((number,index) =>
  <ToDoItem Text={number} key={number+index}></ToDoItem>
  );
  return (
    
    <ul>{listItems}</ul>
  );
}

export default NumberList