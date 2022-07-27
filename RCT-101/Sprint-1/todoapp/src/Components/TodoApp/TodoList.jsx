import React from "react";

const TodoList = ({ todo, remove}) => {
  
  return (
    <div className="Todo">
      
        
          <span className="TodoText">{todo.text}</span>
          <button className="RemoveTodo" onClick={remove}>Remove</button>
          
       
        
    </div>
  );
}

export default TodoList;