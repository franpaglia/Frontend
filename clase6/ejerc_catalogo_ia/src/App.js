import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaLibros from './components/ListaLibros';
import {libros} from "./data/libros.js";
import DetalleLibros from './components/DetalleLibros';
import FormularioCrearLibro from './components/FormularioCrearLibro';
function App() {
  return (
    //agregar el componente ListaLibros
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaLibros libros={libros}/>} />
          <Route path="/libros/:id" element={<DetalleLibros libros={libros} />} />
          <Route path="/libros/:crear" element={<FormularioCrearLibro libros={libros} />} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
