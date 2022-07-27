import React, { useReducer } from "react";
import { initialState, reducer } from "./Todo";
import TodoList from "./TodoList";
import AddTodo from "./Input";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(t => (
      <TodoList
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
      />
    ))}
  </>);
}
export default TodoApp;