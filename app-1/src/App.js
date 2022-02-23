import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState("")
  return (
    <div className="App">
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <p>{input}</p>
    </div>
  );
}

export default App;
