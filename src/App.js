import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import './App.css';
import logo from './assets/logo.svg';


function App() {
  const [stateCar, setStateCar] = useState(false)
  const [contar, setContar] = useState(0)

  useEffect(() => {
    console.log("Total: " + contar)


  }, [contar])

  const  EncenderApagar = () => {
    setStateCar(!stateCar)
    setContar(contar + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        
      <h3> el coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
      <h4>Clicks : {contar} </h4>
      <Button onClick = {EncenderApagar}>Encender / Apagar</Button>
      </header>
    </div>);
}

export default App;
