import React, { useEffect, useState } from "react";

export const Listado = () => {
  const [listadoState, setListadoState] = useState([]);

  // Load movies from localStorage when the component mounts
  useEffect(() => {
    console.log("Componentes del listado de peliculas cargado!!");
    fetchMovies();
  }, []);

  // Function to get movies from localStorage
  const fetchMovies = () => {
    const peliculas = JSON.parse(localStorage.getItem("pelis")) || [];
    setListadoState(peliculas);
  };

  return (
    <>
      {listadoState != null ? 
        listadoState.map((peli) => (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>
        ))
      : <h2>No hay peliculas</h2>}
    </>
  );
};
