import React from "react";

const Segundo = () => {
  //   const libros = [
  //     "Harry Potter",
  //     "Juego de Tronos",
  //     "Clean code",
  //     "Otro libro",
  //   ];

  const libros = ["libro 1"];

  return (
    <div className="segundo-componente">
      <h2>Lista de libros</h2>
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </div>
  );
};

export default Segundo;
