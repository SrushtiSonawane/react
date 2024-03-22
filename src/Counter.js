import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1); 
  };

 
  const decrement = () => {
    setCount(count - 1); 
  };

  return (
    <div className='Counter'>
      <h2>Counter</h2>
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

