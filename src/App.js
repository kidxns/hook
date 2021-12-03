import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setIpVal] = useState("VIP");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const changeText = (e) => {
    const newText = e.target.value;
    setIpVal(newText);
  }

  return (
    <div>
      <div>
        <button onClick={decrement}>Decrement</button> {count}
        <button onClick={increment}>Increment</button>
      </div>


      <div><input onChange={changeText}></input>{inputVal}</div>
    </div>
  );
}

export default App;
