import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        Counter :{" "}
        <span className={`${counter % 2 === 0 ? "Even" : "Odd"}`}>
          {counter}
        </span>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Increament</button>
      <button onClick={() => setCounter(counter - 1)}>Decreament</button>
      <button onClick={() => setCounter(counter * 2)}>Double</button>
    </div>
  );
};
