import React, { useState } from "react";
import "./style/style.css";
export const Todo = ({ getData }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="inputText">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Something"
      />
      <button
        onClick={() => {
          getData(todo);
          setTodo("");
        }}
      >
        +
      </button>
    </div>
  );
};
