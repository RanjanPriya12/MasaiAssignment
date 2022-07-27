import React from "react";
import "./style/style.css";

export const TodoItem = ({ todo, deleteHandler }) => {
  return (
    <div className="todoItem">
      <span>{todo.title}</span>
      <button
        className="close"
        onClick={() => {
          deleteHandler(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
