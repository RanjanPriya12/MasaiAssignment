import React, {useState} from "react";

const AddTodo = ({add}) => {
  const [text, setText] = useState("");
  return (
    <div className="AddTodo">
      <input value={text} placeholder="Enter your todo..." onChange={e => setText(e.target.value)}/>
      <button onClick={() => {add(text); setText("")}}>Add</button>
    </div>
  );
}

export default AddTodo;