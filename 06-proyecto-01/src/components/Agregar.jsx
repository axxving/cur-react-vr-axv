import React, { useState } from "react";

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
    guardarEnStorage(peli);
  };

  const guardarEnStorage = (peli) => {
    // Conseguir los elementos que ya tenemos en el local storage
    let elementos = JSON.parse(localStorage.getItem("pelis"));
    console.log(elementos);
    // Comprobar si es un array
    if (Array.isArray(elementos)) {
      // Agregar un elemento nuevo al array
      elementos.push(peli);
    } else {
      // Array con la nueva peli
      elementos = [peli];
    }

    // Guardar en el local storage
    localStorage.setItem("pelis", JSON.stringify(elementos));

    // Devolver un objeto
    return peli;
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
