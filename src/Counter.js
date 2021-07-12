import { useState } from "react";

export default function Counter(props) {
  const [number, setNumber] = useState(0);

  const clickIncrease = () => {
    setNumber(number + 1);
  };

  const clickReset = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <h1>{props.name}</h1>
      <p>{number}</p>
      <button onClick={clickIncrease}>increase count</button>
      <button onClick={clickReset}>reset</button>
      <button onClick={() => props.functionPassed()}>Trigger Function</button>
    </div>
  );
}
