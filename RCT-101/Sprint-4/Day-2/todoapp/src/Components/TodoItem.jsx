import React, { useState } from "react";
import "./style/style.css";

export const TodoItem = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <div className="todoItem">
      <span className={`${isComplete ? "lineThrough" : "normal"}`}>
        {todo.title}
      </span>
      <input onClick={() => setIsComplete(!isComplete)} type="checkbox" />
    </div>
  );
};
