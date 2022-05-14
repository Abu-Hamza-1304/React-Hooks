import React from "react";
import UseCounter from "./UseCounter";

function CounterTwo() {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  //   const reset = () => {
  //     setCount(0);
  //   };

  const [count, increment, decrement, reset] = UseCounter(10, 10);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
