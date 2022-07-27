import React, { useState, useEffect } from "react";
import { InputTodo } from "./Input";
import { TodoItem } from "./SingleTodo";
import axios from "axios";


export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [page,setPage]=useState(1);
  const [totalCount, setTotalCount]=useState(5);

  const getData = (todo) => {
      if(todo){
        
        const payload = {
            title: todo,
            isCompleted: false,
            id: Date.now()
          };
          setTodoList([...todoList, payload]);

          fetch("http://localhost:8080/todos",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            'Content-Type': 'application/json'
        }
    })
      }
    
  };

  const getTodo= async()=>{
    const res=await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=5`);
    console.log(res.data);
    setTotalCount(Number(res.headers["x-total-count"]));
    setTodoList(res.data);
  }
  useEffect(()=>{
    getTodo();
  },[page]);
  


  const deleteHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo !== id));
  };

  return (
    <div>
      <InputTodo getData={getData} />
      {todoList.map((todo) => (
        <TodoItem todo={todo} deleteHandler={deleteHandler} />
      ))}

<button disabled={page<=1}
        onClick={()=>setPage(page-1)}>Prev</button>

      <button disabled={page*5>totalCount}
        onClick={()=>setPage(page+1)}>Next</button>
      
    </div>
  );
};