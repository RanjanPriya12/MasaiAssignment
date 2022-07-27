
import './App.css';
import {  useState } from 'react';
//import { Hello } from './component/hello';

function App() {

  const [counter,setCounter]=useState(0);
  // const [todos, setTodos]=useState([]);
  // useEffect(()=>{
  //   async function getData(){
  //     try {
  //       const data=await fetch(` http://localhost:8000/todos`).then((d)=>d.json());
  //       console.log(data);
  //       setTodos(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  // },[]);
  return (
    <div className="App">
      <h2>Counter : {counter}</h2>
      <button onClick={()=>{
        setCounter(counter+1);
      }}>Add 1</button>

      {/* {todos.map((todo)=>(
        <div>
          {todo.id}. {todo.Name}
          </div>
      ))} */}
      {/* {show? <Hello/>: null}
      <button onClick={()=>{
      //  setShow(!show);
      }}> {show? "Click To Hide" : "Click To Show"}</button> */}
    </div>
  );
}

export default App;
