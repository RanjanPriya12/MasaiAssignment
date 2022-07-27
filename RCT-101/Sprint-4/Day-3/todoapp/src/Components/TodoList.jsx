import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const getData = (todo) => {
    const payload = {
      title: todo,
      isCompleted: false,
      id: Date.now()
    };
    setTodoList([...todoList, payload]);
  };

  const deleteHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo !== id));
  };

  return (
    <div>
      <Todo getData={getData} />
      {todoList.map((todo) => (
        <TodoItem todo={todo} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};
