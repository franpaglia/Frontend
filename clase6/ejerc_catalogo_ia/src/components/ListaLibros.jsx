//dicho componente debe mostrar el listado de libros que se encuentra en el archivo ./data/libros.js


import { Link } from "react-router-dom";

//crear el componente

const ListaLibros = (libros) => {
    return ( 
        <div>
            <h1>Lista de libros</h1>
            <Link to="/libros/crear">Crear Libro</Link>
            <ul>
                {libros.map(libro => <li>{libros.titulo}
                <Link to={`/libros/${libros.id}`}>Detalles</Link>
                </li>)}
            </ul>
        </div> )
}
export default ListaLibros;