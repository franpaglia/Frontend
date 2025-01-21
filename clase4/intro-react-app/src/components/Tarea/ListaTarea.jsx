import React from "react";
import Tarea from "./Tarea";

function ListaTarea(){
    const tareas = [
        {id: 1, texto: "Hacer la compra"},
        {id: 2, texto: "Lavar la ropa"},
        {id: 3, texto: "Estudiar"}

    ]
    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>{
                tareas.map((tarea)=> (
                    <Tarea key={tarea.id} texto={tarea.texto} />
                ))
                }</ul>
        
        </div>
    )
}
export default ListaTarea;