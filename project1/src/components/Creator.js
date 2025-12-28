import React, { useState } from 'react'
import{GuardarEnStorage} from "../Helpers/GuardarEnStorage";

export const Creator = ({setListadoState}) => {

    const title = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
        titulo : '',
        descripcion : ''
    })

    const conseguirDatosForm = e => { 
        e.preventDefault();
//conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        alert("El titulo es: " + titulo + " y la descripción es: " + descripcion);

        //crear objeto de la pelicula a guardar
        let peli = {
            id : new Date().getTime(),
            titulo: titulo,
            descripcion: descripcion
        };

            setPeliState(peli);

        //actualizar estado del listado principal
        setListadoState( elementos => {
            return [...elementos, peli];
        });

            GuardarEnStorage("peli", peli);


    }


return (
    <div>
        <div className="add">
                <h3 className="title">{title}</h3>
                <form onSubmit={conseguirDatosForm}>
                    <input  type="text" 
                            id="titulo" 
                            name="titulo"
                            placeholder="Titulo" />

                    <textarea 
                        id="descripcion" 
                        name="descripcion"
                        placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
    </div>
  )
}
