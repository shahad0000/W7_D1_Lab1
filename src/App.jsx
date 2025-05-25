import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const increase1 = (num) => {
    setNum1(num1 + 1);
  };

  const decrease1 = () => {
    setNum1(num1 - 1);
  };

  const increase2 = (num) => {
    setNum2(num2 + 1);
  };

  const decrease2 = () => {
    setNum2(num2 - 1);
  };

  const addition = () => {
    setResult(() => num1 + num2);
  };
  const substraction = () => {
    setResult(() => num1 - num2);
  };
  const multiplication = () => {
    setResult(() => num1 * num2);
  };
  const division = () => {
    setResult(() => num1 / num2);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 p-5">
        <div>First value: {num1}</div>
        <div className="flex gap-4">
          <button className="border bg-blue-300" onClick={increase1}>
            Increase +
          </button>
          <button className="border bg-red-200" onClick={decrease1}>
            Decrease -
          </button>
        </div>

        <div>Second value: {num2}</div>
        <div className="flex gap-4">
          <button className="border bg-blue-300" onClick={increase2}>
            Increase +
          </button>
          <button className="border bg-red-200" onClick={decrease2}>
            Decrease -
          </button>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center gap-4">
        <div>Result {result}</div>
        <div className="flex gap-5">
          <button className="border bg-green-200" onClick={addition}>Add </button>
          <button className="border bg-green-200" onClick={substraction}>substract </button>
          <button className="border bg-green-200" onClick={multiplication}>Multiply </button>
          <button className="border bg-green-200" onClick={division}>Divide</button>
        </div>
      </div>
    </>
  );
}

export default App;
