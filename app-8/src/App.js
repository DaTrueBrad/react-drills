import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lukeSkywalker, setLukeSkywalker] = useState({})

  useEffect(
    axios
      .get("https://swapi.co/api/people/1")
      .then((res) => setLukeSkywalker(res.data))
  , [])

  return (
    <div className="App">
      <h1>Name: {lukeSkywalker.name}</h1>
      <h1>Birth Year: {lukeSkywalker.birth_year}</h1>
      <h1>Height: {lukeSkywalker.height}</h1>
      <h1>Eye Color: {lukeSkywalker.eye_color}</h1>
    </div>
  );
}

export default App;
