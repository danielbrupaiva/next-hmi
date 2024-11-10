"use client";
import { useState } from 'react'

export default function Counter() {
    // Define a state variable for the counter
    const [count, setCount] = useState(0);
    // Function to increment the counter
    const incrementCounter = () => {
        setCount(count + 1);
    };

  return (
      <div className="p-4 text-center">
          <h1 className="h1 p-2">Counter</h1>
          <h2 className="h2 p-2">count: {count}</h2>
          <button className="btn btn-primary p-2" onClick={incrementCounter}> Click </button>
      </div>
  );
}
