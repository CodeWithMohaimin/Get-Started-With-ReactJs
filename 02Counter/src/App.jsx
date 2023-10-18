import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);

      //propagation
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const deleteValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const make2 = () => {
    setCounter(2);
  };
  const make9 = () => {
    setCounter(9);
  };
  const make18 = () => {
    setCounter(18);
  };

  return (
    <>
      <h1>Code With Mohaimin</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={deleteValue}>- Delete Value</button>
      <button onClick={addValue}>+ Add Value</button>

      <p style={{ marginTop: "100px" }}>Set your your Default value</p>
      <button onClick={make2}>2</button>
      <button onClick={make9}>9</button>
      <button onClick={make18}>18</button>
    </>
  );
}

export default App;
