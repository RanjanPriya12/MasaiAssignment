import React from "react";


export const TodoItem = ({ todo, deleteHandler}) => {
  return (
    <div className="todoItem">
      <div>
      <input type="checkbox"/>
      <span>{todo.title}</span>
      </div>
      <div>
      <button
        className="close"
        onClick={() => {
          deleteHandler(todo);
        }}
      >
        Delete
      </button>
      </div>
      
    </div>
  );
};