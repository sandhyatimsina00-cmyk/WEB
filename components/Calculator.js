import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
  };

  return (
    <div>
      <h1>Calculator</h1>

      <input value={display} readOnly />

      <div>
        {[1,2,3,4,5,6,7,8,9,0].map(num => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
      </div>

      <div>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>

      <div>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}