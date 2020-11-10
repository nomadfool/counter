import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState( 0 )

  function incrementCount() {
    setCount(prevCount => prevCount  + 1)
  }

  function decrementCount() {
    setCount(prevCount => prevCount  - 1)
  }
  return (
   <div className='App'>
    <button className='Button' onClick={decrementCount}>-</button>
    <span className='Span'>{count}</span>
    <button className='Button' onClick={incrementCount}>+</button>
   </div>
  );
}

export default App;
