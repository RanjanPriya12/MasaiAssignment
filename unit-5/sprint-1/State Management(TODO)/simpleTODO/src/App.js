import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import  Todo  from './component/todo';

function App() {

  // const [message, setMessage]=useState("");

  // const getData=(data)=>{
  //   console.log('Data Received from child',data);
  //   setMessage(data);
  // };
  // return (
  //   <div className="App">
  //     <First datafn={getData}/>
  //     <Second message={message}/>
  //   </div>
  // );

  return (
    <div className='App'>
      <Todo/>
    </div>
  );
}

// function First({datafn}){
//   const data="Hello from C1";
//   return <div>
//     <h2>First Child</h2>
//     <button onClick={()=>{
//     datafn(data);
//   }}>Send Data</button>
//     </div>
// }

// function Second({message}){
//   return <h2>Second Child, {message}</h2>
// }

export default App;
