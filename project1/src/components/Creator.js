import React, { useState } from 'react';
import { GuardarEnStorage } from '../Helpers/GuardarEnStorage';

export const Creator = ({ setListadoState }) => {

    const tituloComponente = "Añadir película";

    // Estado local para el formulario
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const conseguirDatosForm = e => {
        e.preventDefault();

        // 1. Obtener datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // 2. Crear el objeto de la película
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // 3. Guardar en el estado local del componente
        setPeliState(peli);

        // 4. ACTUALIZAR EL ESTADO PRINCIPAL (Aquí es donde se conectan Lists y Searcher)
        // Usamos una función dentro de setListadoState para asegurar que tenemos
        // el listado más reciente y no lo perdemos.
        setListadoState(elementos => {
            // Si por algún error 'elementos' no es un array, creamos uno nuevo
            if (!Array.isArray(elementos)) {
                return [peli];
            }
            // Retornamos el array anterior MÁS la película nueva
            return [...elementos, peli];
        });

        // 5. Guardar en el LocalStorage usando tu Helper
        // IMPORTANTE: Asegúrate de usar siempre "pelis" en plural
        GuardarEnStorage("pelis", peli);

        // 6. (Opcional) Limpiar el formulario después de guardar
        target.reset();
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            {/* Mostrar el título de la película recién creada solo para confirmar */}
            {(peliState.titulo && peliState.descripcion) && (
                <div className="peli_creada">
                    <strong>Has creado la película: {peliState.titulo}</strong>
                </div>
            )}

            <form onSubmit={conseguirDatosForm}>
                <input 
                    type="text" 
                    id="titulo" 
                    name="titulo" 
                    placeholder="Título" 
                    required 
                />

                <textarea 
                    id="descripcion" 
                    name="descripcion" 
                    placeholder="Descripción" 
                    required
                ></textarea>

                <input 
                    type="submit" 
                    id="save" 
                    value="Guardar" 
                />
            </form>
        </div>
    );
}