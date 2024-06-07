import React from "react";

export const Editar = () => {
  const titulo_componente = "Editar un pelicula";
  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue="Titulo original de la pelicula"
        />
        <textarea 
          name="descripcion"
          defaultValue="Decripcion original"
          className="descripcion_editada"
        />
      </form>
    </div>
  );
};
