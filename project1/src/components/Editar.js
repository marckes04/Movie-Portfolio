import React from 'react'

export const Editar = ({ peli, listadoState, setListadoState, setEditar }) => {
    const titulo_componente = "Editar Película";

    const guardarEdiciones = (e, id) => {
        // 1. Evitar que la página se refresque
        e.preventDefault();

        // 2. Conseguir el target del evento
        let target = e.target;

        // 3. Buscar el índice del objeto a actualizar en el array del estado
        const indice = listadoState.findIndex(p => p.id === id);

        // 4. Crear objeto actualizado con los datos de los inputs
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        // 5. Crear una copia del array para no mutar el estado original
        let pelis_almacenadas = [...listadoState];

        // 6. Actualizar el elemento en el índice correspondiente
        pelis_almacenadas[indice] = peli_actualizada;

        // 7. Guardar en el LocalStorage (Clave "pelis")
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // 8. Actualizar el estado para que la UI cambie sin recargar
        setListadoState(pelis_almacenadas);

        // 9. Cerrar el formulario de edición
        setEditar(0);
    }

    return (
        <div className="edit_form">
            <h3 className="title">{titulo_componente}</h3>
            <form onSubmit={e => guardarEdiciones(e, peli.id)}>
                <input type="text" 
                       name="titulo" 
                       className="titulo_editado"
                       defaultValue={peli.titulo}/>

                <textarea 
                       name="descripcion" 
                       className="descripcion_editada"
                       defaultValue={peli.descripcion}></textarea>

                <input type="submit" className="editar" value="Actualizar"/>
            </form>
        </div>
    )
}