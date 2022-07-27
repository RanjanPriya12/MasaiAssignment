import { useState } from "react"
export const TodoItem=({todo, handleStatus })=>{
    return <div>{todo.title} - {todo.status? "Done" : "Not Done"}
    <button onClick={()=>handleStatus(todo.id)}>Toggle</button>
    <button onClick={()=>handleStatus(todo.id)}>Delete</button>
    </div>
}