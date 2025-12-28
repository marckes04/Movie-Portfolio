import React, {useEffect,useState} from 'react'

export const Lists = ({listadoState, setListadoState}) => {

//const[listadoState, setListadoState] = useState([]);

useEffect(() => {
  conseguirPeliculas();
}, []);

const conseguirPeliculas = () => {
 let peliculas = JSON.parse(localStorage.getItem("pelis")) || [];
  
  setListadoState(peliculas);
}

const borraPeli = (id) => {
    // 1. Filtrar el estado actual para quitar la película con ese ID
    let nuevo_array_peliculas = listadoState.filter(peli => peli.id !== parseInt(id));

    // 2. Actualizar el estado para que la UI se refresque
    setListadoState(nuevo_array_peliculas);

    // 3. Actualizar el localStorage para que el borrado sea permanente
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
}


  return (
    <>
    { listadoState.length > 0 ? (
    listadoState.map(peli => {
        return (
            <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>
                <button className="edit">Editar</button>
                <button className="delete" onClick={() => borraPeli(peli.id)}>Borrar</button>
            </article>
        );
    })
) : (
    <h2>No hay películas para mostrar</h2>
)}

        </>

  )
}
