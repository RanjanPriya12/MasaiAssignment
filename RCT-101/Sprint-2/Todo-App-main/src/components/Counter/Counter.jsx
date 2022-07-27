import React from "react";
import styles from "./counter.module.css";
const Counter = ({ taskId, count, updateCounter }) => {
  return (
    <div className={styles.counter}>
      <button
        className={styles.button}
        data-cy="task-counter-increment-button"
        onClick={() => updateCounter(count + 1)}
      >
        <span>+</span>
      </button>
      <span className={styles.currentValue} data-cy="task-counter-value">
        {count}
      </span>
      <button
        className={styles.button}
        data-cy="task-counter-decrement-button"
        onClick={() => updateCounter(count - 1)}
      >
        <span><p></p></span>
      </button>
    </div>
  );
};

export default Counter;
