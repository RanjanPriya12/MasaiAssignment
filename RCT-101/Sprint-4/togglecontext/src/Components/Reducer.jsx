import React from 'react';
import { useReducer } from 'react';

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT" :{
            return {...state, counter: state.counter+1};
        }
        case "DECREMENT" :{
            return {...state, counter: state.counter-1};
        }
        default:{
            return state;
        }
    }
}

const Hook = () => {
    const [state,dispatch]=useReducer(reducer, {counter:0});
  return (
    <div>
        Counter : {state.counter}
        <div>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        </div>
        

    </div>
  )
}

export default Hook;