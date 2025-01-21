import logo from './logo.svg';
import './App.css';
import Usuario from './components/Usuario/Usuario';
import ListaTarea from './components/Tarea/ListaTarea';
import Contador from './components/Contador/Contador';
import Saludo from './components/Saludo/Saludo';
import { useState } from 'react';


function App() {
  const [mensaje, setMensaje] = useState('');
  const handleChange = (evento) => {
    setMensaje(evento.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Usuario nombre="Fran" />
        {/*<ListaTarea/> */} 
        <Contador/>
        <input 
        type='text'
        placeholder='Ingrese un mensaje'
        value={mensaje}
        onChange={handleChange}/>
        <Saludo mensaje={mensaje}/>

      </header>
    </div>
  );
}

export default App;
