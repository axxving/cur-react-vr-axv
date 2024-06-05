import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Add = () => {
  const tituloComponente = "Agregar pelicula";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  // Deesestructuracion de peliState
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    // conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    console.log(
      "Formulario enviado",
      "titulo: " + titulo + " descripcion: " + descripcion
    );

    // generar objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion,
    };

    // guardar estado
    setPeliState(peli);

    // uso del metodo para guardar en el local storage
    GuardarEnStorage("peli", peli);

    console.log(peli);
  };

  return (
    <>
      <div class="add">
        <h3 class="title">{tituloComponente}</h3>

        <strong>
          {titulo && descripcion && "Haz incluido la pelicula: " + titulo}
        </strong>
        <form onSubmit={conseguirDatosForm}>
          <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
          />
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};
