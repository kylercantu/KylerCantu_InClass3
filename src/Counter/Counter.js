import "./Counter.css";

import React from "react";

const Counter = () => {
  // Initialize state management
  const [count, setCount] = React.useState(0);

  // Function to decrement the displayed counter value
  function decrementCounter(e) {
    setCount(count - 1);
  }
  // Function to increment the displayed counter value
  function incrementCounter(e) {
    setCount(count + 1);
  }

  return (
    <div className="parent-counter-container">
      <div className="decrement-container">
        <button className="decrement-button" onClick={decrementCounter}>
          -
        </button>
      </div>
      <div className="counter-display-container">{count}</div>
      <div className="increment-container">
        <button className="decrement-button" onClick={incrementCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
