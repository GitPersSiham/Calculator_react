import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';



function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);
                            useState(number1 - number2);
                            useState(number1 * number2);
                            useState(number1 / number2);
  

  function calculateTotalAddition() {
    setTotal(number1 + number2);
    
  }
  function calculateTotalSubstract() {
    
    setTotal(number1 - number2);
  }
  function calculateTotalMultiplcate() {
    
    setTotal(number1 * number2);
  }
  function calculateTotalDivision() {
    
    setTotal(number1 / number2);
  }


  return (
    <div className="App">
      <h1>calculer les deux nombres</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={calculateTotalAddition}>+</button>
      <button onClick={calculateTotalSubstract}>-</button>
      <button onClick={calculateTotalMultiplcate}>x</button>
      <button onClick={calculateTotalDivision}>/</button>
      <h2>{total}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

export default App;
