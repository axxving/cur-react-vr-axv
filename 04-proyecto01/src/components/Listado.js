import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  // Load movies from localStorage when the component mounts
  useEffect(() => {
    console.log("Componentes del listado de peliculas cargado!!");
    fetchMovies();
  }, []);

  // Function to get movies from localStorage
  const fetchMovies = () => {
    const peliculas = JSON.parse(localStorage.getItem("pelis")) || [];
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    // Conseguir las peliculas almacenadas
    const peliculasAlmacenadas = fetchMovies();

    // Filtrar las peliculas para que elimine del array la que quiero
    const peliculasFiltradas = peliculasAlmacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    // Actualizar estado del listado
    setListadoState(peliculasFiltradas);

    // Actualizar los datos del local storage
    localStorage.setItem("pelis", JSON.stringify(peliculasFiltradas));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button
              className="edit"
              onClick={() => {
                setEditar(peli.id);
              }}
            >
              Editar
            </button>
            <button className="delete" onClick={() => borrarPeli(peli.id)}>
              Borrar
            </button>

            {/* Aparece formulario de editar */}
            {editar === peli.id && (
              <Editar
                peli={peli}
                fetchMovies={fetchMovies}
                setEditar={setEditar}
                setListadoState={setListadoState}
              />
            )}
          </article>
        ))
      ) : (
        <h2>No hay peliculas</h2>
      )}
    </>
  );
};
