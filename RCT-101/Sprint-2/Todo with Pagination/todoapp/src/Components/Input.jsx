import React, { useState } from "react";
export const InputTodo = ({ getData }) => {
  const [todo, setTodo] = useState("");

 

  return (
    <div className="inputText">
       
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add your Todo..."
      />
       <button className="btn"
        onClick={() => {
          getData(todo);
          setTodo("");
        }}
      >
        Add
      </button>
      
      
    </div>
  );
};