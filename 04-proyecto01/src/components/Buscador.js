import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");

  const buscarPeli = (e) => {
    // Crear un estado y actualizarlo
    setBusqueda(e.target.value);

    // Filtrar para buscar coincidencias
    let peliculasFiltradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if (busqueda.length <= 1 || peliculasFiltradas.length === 0) {
      peliculasFiltradas = JSON.parse(localStorage.getItem("pelis"));
    }

    // Actualizar estado del listado principal con lo que he logrado filtrar
    setListadoState(peliculasFiltradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
