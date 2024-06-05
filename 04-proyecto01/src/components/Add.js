import React, { useState } from "react";

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
    guardarEnStorage(peli);

    console.log(peli);
  };

  const guardarEnStorage = (peli) => {

    // Conseguir los elementos que ya se tiene en el localstorage
    let elementos = JSON.parse(localStorage.getItem('pelis'));

    // Comprobar si es un array
    if (Array.isArray(elementos)){
      // Agregar dentro del array un elemento nuevo
      elementos.push(peli);
    } else {
      // Generar un array con la nueva peli
      elementos = [peli];
    }

    // Guardar en el localstorage
    localStorage.setItem('peli', JSON.stringify(elementos));

    console.log(elementos)

    // devolver objeto guardado
    return peli;
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
