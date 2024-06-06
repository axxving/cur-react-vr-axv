import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Add = ({setListadoState}) => {
  const tituloComponente = "Agregar película";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  // Desestructuración de peliState
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    // Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    console.log(
      "Formulario enviado",
      "titulo: " + titulo + " descripcion: " + descripcion
    );

    // Generar objeto de la película a guardar
    let peli = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion,
    };

    // Guardar estado
    setPeliState(peli);

    // Actualizar el estado del listado principal
    setListadoState((elementos) => {
      return [...elementos, peli];
    });

    // Uso del método para guardar en el localStorage
    GuardarEnStorage("pelis", peli);

    console.log(peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <strong>
        {titulo && descripcion && "Has incluido la película: " + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Título" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
        />
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
