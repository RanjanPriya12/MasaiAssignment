import React, { useState } from "react";
import { InputTodo } from "./Input";
import { TodoItem } from "./SingleTodo";
import { CompleteTask } from "./CompleteTask";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [completeTask, setCompleteTask]=useState([]);

  const getData = (todo) => {
      if(todo){
        
        const payload = {
            title: todo,
            isCompleted: false,
            id: Date.now()
          };
          setTodoList([...todoList, payload]);
      }
    
  };

  const completeData = (value) => {
    if(value){
        const payload = {
            title: value.title,
            isCompleted: true,
          };
        setCompleteTask([...completeTask,payload]);
        setTodoList(todoList.filter((todo) => todo !== value));
    }
  
};

  const deleteHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo !== id));
  };

  return (
    <div>
      <InputTodo getData={getData} />
      {todoList.map((todo) => (
        <TodoItem todo={todo} deleteHandler={deleteHandler} completeData={completeData}/>
      ))}

<h2>Show Completed Todos</h2>
      {completeTask.map((todo)=>(
          <CompleteTask todo={todo} />
      ))}

      
    </div>
  );
};