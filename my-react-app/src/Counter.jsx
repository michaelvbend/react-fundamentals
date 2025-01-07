import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
  const handleButtonClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleButtonClick}>Increment counter</button>
    </div>
  );
};

export default Counter;