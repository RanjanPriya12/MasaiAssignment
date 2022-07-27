import React, { useEffect, useState } from 'react';

function Timer() {
    const [timer,setTimer]=useState(100);
    useEffect(()=>{
        let interval=setInterval(()=>{
            if(timer<=0){
                console.log(timer);
                clearInterval(interval);
                setTimer(timer=>timer*0);
            }else if(timer>=1){
                setTimer(timer=>timer-1); 
            }
        },1000);
        
        return ()=>clearInterval(interval);
    },[timer]);
    
  return (
    <div className='timer'>Timer : {timer}</div>
  )
}

export default Timer;

