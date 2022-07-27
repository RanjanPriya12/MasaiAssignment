import React, { useState } from "react";
export const InputTodo = ({ getData }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="inputText">
        <button
        onClick={() => {
          getData(todo);
          setTodo("");
        }}
      >
        +
      </button>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add your Todo..."
      />
      
    </div>
  );
};