import { Todoinput } from "./todoinput";
import { useState } from 'react';
import { TodoItem } from './todoItem';
import { nanoid } from 'nanoid'
function Todo(){
    const [todoList, setTodoList]=useState([]);
    const [show, setShow]=useState(true);
    const getData=(todo)=>{
        console.log(todo);
        const payload={
            title:todo,
            status:false,
            id:nanoid(6),
        }
        setTodoList([...todoList,payload]);
    }

    const handleStatus=(id)=>{
        console.log(id);
        setTodoList([todoList.map((e)=> e.id===id ? {...e, status: !e.status}: e)]);
    }

    return (<div>
        <Todoinput getData={getData}/>
        {todoList.map((e)=>
            <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
        )}
    </div>);
}

export default Todo;