import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [miliseconds, setMiliSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setMiliSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
          if(seconds>=59){
              setMinutes(minutes=>minutes+Math.floor(seconds/60)+1);
              setSeconds(0);
              if(minutes>=59){
                setHours(hours=>hours+Math.floor(minutes/60)+1);
                setMinutes(0); 
              }
              if(hours>=12){
                  reset();
              }
          }
        setSeconds(seconds => seconds + 1);
        setMiliSeconds((seconds*1000));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
      {hours} H  :{minutes} M  :{seconds} S : {miliseconds} MS
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;