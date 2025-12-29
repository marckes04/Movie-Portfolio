import React, { useEffect, useState } from 'react';
import { Editar } from './Editar';

export const Lists = ({ listadoState, setListadoState }) => {

    // Estado para controlar qué película se está editando
    const [editar, setEditar] = useState(0);

    useEffect(() => {
        // Carga inicial de datos desde el LocalStorage
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let pelis = JSON.parse(localStorage.getItem("pelis")) || [];
        setListadoState(pelis);
        return pelis;
    }

    const borraPeli = (id) => {
        // 1. Obtener películas almacenadas
        let pelis_almacenadas = JSON.parse(localStorage.getItem("pelis")) || [];

        // 2. Filtrar para eliminar la que no queremos
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        // 3. Actualizar estado del listado
        setListadoState(nuevo_array_peliculas);

        // 4. Actualizar datos en el LocalStorage
        localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
    }

    return (
        <>
            {listadoState.length > 0 ? (
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={() => setEditar(peli.id)}>
                                Editar
                            </button>
                            <button className="delete" onClick={() => borraPeli(peli.id)}>
                                Borrar
                            </button>

                            {/* Aparece el formulario de editar si el ID coincide */}
                            {editar === peli.id && (
                                <Editar 
                                    peli={peli} 
                                    listadoState={listadoState}
                                    setListadoState={setListadoState}
                                    setEditar={setEditar}
                                />
                            )}
                        </article>
                    );
                })
            ) : (
                <h2>No hay películas para mostrar</h2>
            )}
        </>
    );
}