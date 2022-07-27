import React from 'react';

export const  CompleteTask=({todo}) =>{
    console.log(todo.title)
  return (
    <div className="completeTask">
        <div className='flex'>
        <input type="checkbox" checked />
        <span className='stricked'>{todo.title}</span>
        </div>
        <div>
        <div>Task is Copmleted</div>
        </div>
        
    </div>
  )
}
