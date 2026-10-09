import {useState} from "react";

export function Lesson4() {
    const [count, setCount] = useState(0);

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }

  function handlePlusFive() {
    setCount((prevCount)=> prevCount + 5);
  }

  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
        <h1> profile</h1>
        <h2>カウント：{count}</h2>
        <button onClick={handlePlus}>+1</button>
        <button onClick={handleMinus}>-1</button>
        <button onClick={handlePlusFive}>+5</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  );
}