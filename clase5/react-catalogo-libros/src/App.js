import logo from './logo.svg';
import './App.css';
import ListaLibros from './components/ListaLibros';
import {libros} from './data/libros';

function App() {
  return (
    <div className="container">
      <ListaLibros libros={libros}/>
    </div>
  );
}

export default App;
