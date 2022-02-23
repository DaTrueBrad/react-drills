import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [array, setArray] = useState(["Ducks","Owls","Pigeons","Falcons","Eagles"])

  let list = array.map((element, index) => {
    return <h2 key={index}>{element}</h2>
  })

  return (
    <div className="App">
      {list}
    </div>
  );
}

export default App;
