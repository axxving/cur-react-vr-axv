import React from "react";

export const Editar = ({peli, fetchMovies, setEditar, setListadoState}) => {
  const titulo_componente = "Editar un pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    
    
    // Conseguir el target del evento
    const target = e.target;

    // Buscar el indice del objeto de la pelicula a actualizar
    const peliculasAlmacenadas = fetchMovies();
    const indice = peliculasAlmacenadas.findIndex(peli => peli.id === id);

    // Crear un objeto con ese indice
    const peliculaActualizada = {
      id: id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    // Actualizar el elemento con ese indice
    peliculasAlmacenadas[indice] = peliculaActualizada;

    // Guardarel nuevo array de objetos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(peliculasAlmacenadas));

    // Actualizar estados
    setListadoState(peliculasAlmacenadas);
    setEditar(0);
  }

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea 
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        />
        <input type="submit" className="editar" value="Actualizar"/>
      </form>
    </div>
  );
};
