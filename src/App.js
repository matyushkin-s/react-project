import React, { useState } from 'react'
import './App.css';
import List from './components/List';
import Box from './components/Box';

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      <List />

      <div className='box-wrapper'>
        <button onClick={() => setIsShow(!isShow)}>Toggle</button>
        {isShow && <Box className='test' />}
      </div>
    </div>
  );
}

export default App;
