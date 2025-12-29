import React, { useState } from 'react';

export const Searcher = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState('');

  const buscarPeli = (e) => {
    let valor = e.target.value;
    setBusqueda(valor);

    // SEGURIDAD 1: Leer del storage y asegurar que sea un Array
    let pelis_almacenadas = JSON.parse(localStorage.getItem("pelis"));
    if (!Array.isArray(pelis_almacenadas)) pelis_almacenadas = [];

    // SEGURIDAD 2: Filtrar sobre el array seguro
    let pelis_encontradas = pelis_almacenadas.filter(peli => {
      return peli.titulo.toLowerCase().includes(valor.toLowerCase());
    });

    // SEGURIDAD 3: Si borra el texto, restaurar todo
    if (valor.trim().length === 0) {
      pelis_encontradas = pelis_almacenadas;
    }

    setListadoState(pelis_encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={busqueda} onChange={buscarPeli} autoComplete="off" />
      </form>
    </div>
  );
};