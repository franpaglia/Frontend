import {useParams} from "react-router-dom";

const DetalleLibros = ({libros}) => {
    const {id} = useParams();
    const {libro} = libros.find(libro => libros.id === parseInt(id)) || {}; //parseInt(id);
    return (
        <div>
            <h1>{libro.titulo}</h1>
            <p>{libro.sinopsis}</p>
            <p>Autor: {libro.autor}</p>
            <p>Precio: {libro.precio}</p>
            <p>Categoria: {libro.categoria}</p>
            
          
        </div>
    )
}

export default DetalleLibros