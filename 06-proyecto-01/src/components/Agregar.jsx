import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Agregar = () => {
  const tituloComponente = "";

  const [pelistate, setPelistate] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = pelistate;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    // conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.titulo.value;

    // generando objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    setPelistate(peli);

    // Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
  };

  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>
          {titulo && descripcion && "Has generado la pelicula: " + titulo}
        </strong>

        <form onSubmit={conseguirDatosForm}>
          <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
          ></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};

export default Agregar;
