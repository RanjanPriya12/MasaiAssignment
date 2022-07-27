import {useState} from 'react';
export const Todoinput=({getData})=>{
    const [text,setText]=useState("");
    return <div>
        <input onChange={(e)=>{
            setText(e.target.value);
        }}
            type="text" name="" id="" placeholder="Enter your todo"/>
        <button onClick={()=>{
            getData(text);
        }}>Add</button>
    </div>
}