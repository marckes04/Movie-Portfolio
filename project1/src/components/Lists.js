import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Lists = ({ listadoState, setListadoState }) => {

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        // Carga inicial
        let pelis = JSON.parse(localStorage.getItem("pelis")) || [];
        setListadoState(pelis);
    }, [setListadoState]);

    const borraPeli = (id) => {
        let nuevo_array = listadoState.filter(peli => peli.id !== parseInt(id));
        setListadoState(nuevo_array);
        localStorage.setItem("pelis", JSON.stringify(nuevo_array));
    }

    return (
        <>
            {listadoState.length > 0 ? (
                listadoState.map(peli => (
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>

                        <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                        <button className="delete" onClick={() => borraPeli(peli.id)}>Borrar</button>

                        {/* Si el ID coincide, mostramos el formulario de edición */}
                        {editar === peli.id && (
                            <Editar 
                                peli={peli} 
                                listadoState={listadoState} 
                                setListadoState={setListadoState} 
                                setEditar={setEditar} 
                            />
                        )}
                    </article>
                ))
            ) : (
                <h2>No hay películas para mostrar</h2>
            )}
        </>
    )
}