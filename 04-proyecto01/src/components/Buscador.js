import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);

    if (valorBusqueda.trim() === "") {
      setNoEncontrado(false);
      setListadoState(JSON.parse(localStorage.getItem("pelis")));
      return;
    }

    const peliculasFiltradas = listadoState.filter((peli) => 
      peli.titulo.toLowerCase().includes(valorBusqueda.toLowerCase())
    );

    if (peliculasFiltradas.length === 0) {
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    setListadoState(peliculasFiltradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {noEncontrado && (
        <span className="no-encontrado">
          No se ha encontrado ninguna coincidencia
        </span>
      )}
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search" type="button">Buscar</button>
      </form>
    </div>
  );
};
