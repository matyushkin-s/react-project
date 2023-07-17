import React, { useState } from 'react'
import Button from './components/Button';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => count - 1);
  };

  const reset = () =>{
    // console.log('RESET');
    setCounter(0)
  }

  return (
    <div className="App">
      <div className="counter">
        <h1 className="counter__header">It`s counter here</h1>
        <div className="counter__value">Counter: { counter }</div>

        <div className="counter__container">
          <Button class="control__btn" onClick={increase}>+</Button>
          <Button class="control__btn" onClick={decrease}>-</Button>
        </div>

        <Button
          class="reset__btn"
          isDisabled={counter === 0}
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
