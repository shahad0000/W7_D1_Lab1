import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
const [result, setResult] = useState(0)
  const increase1 = (num) => {
    
    setNum1(num1 + 1)
  }

  const decrease1 = () => {
    setNum1(num1 - 1)
  }

  const increase2 = (num) => {
    
    setNum2(num2 + 1)
  }

  const decrease2 = () => {
    setNum2(num2 - 1)
  }

const addition = () => {
  setResult(() => num1 + num2)
}
const substraction = () => {
  setResult(() => num1 - num2)
}
const multiplication = () => {
  setResult(() => num1 * num2)
}
const division = () => {
  setResult(() => num1 / num2)
}


  return (
    <>
      <div className="flex justify-around items-center">
        <div>First value: {num1}</div>
        <button onClick={increase1}>Increase +</button>
        <button onClick={decrease1}>Decrease -</button>

        <div>Second value: {num2}</div>
        <button onClick={increase2}>Increase +</button>
        <button onClick={decrease2}>Decrease -</button>
      </div>
      <div>Result {result}</div>
      <button onClick={addition}>Add </button>
      <button onClick={substraction}>substract </button>
      <button onClick={multiplication}>Multiply </button>
      <button onClick={division}>Divide</button>

    </>
  );
}

export default App;
