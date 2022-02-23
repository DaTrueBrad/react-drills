import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [array, setArray] = useState(["Ducks","Owls","Pigeons","Falcons","Eagles"])
  const [filter, setFilter] = useState("")

  let list = array.filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

  return (
    <div className="App">
      <input type="text" onChange={(e) = setFilter(e.target.value)}/>
      {list}
    </div>
  );
}

export default App;
