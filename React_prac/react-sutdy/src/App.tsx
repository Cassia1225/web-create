import {Profile} from "./../components/Profile";
import {Form} from "./../components/Form";
import {useState} from "react";
import {Lesson5} from "./../components/Lesson5";
import {TestLesson6} from "./../components/TestLesson6";
import {Lesson6} from "./../components/Lesson6";

function App() {

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
  
  return(
    <div>
        <h1> profile</h1>
        <h2>カウント：{count}</h2>
        <button onClick={handlePlus}>+1</button>
        <button onClick={handleMinus}>-1</button>
        <button onClick={handlePlusFive}>+5</button>
        <button onClick={handleReset}>Reset</button>

        <Lesson6 />
    </div>
  );
}

export default App;