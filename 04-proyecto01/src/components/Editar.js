import React from "react";

export const Editar = ({peli}) => {
  const titulo_componente = "Editar un pelicula";
  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form>
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
      </form>
    </div>
  );
};
