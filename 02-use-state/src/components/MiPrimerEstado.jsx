import React, { useState } from "react";

const MiPrimerEstado = () => {
  //   let nombre = "Alejandro Hernandez";

  //   const cambiarNombre = () => {
  //     nombre = "Paquito";
  //   };

  const [nombre, setNombre] = useState("Victor");

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
  };

  return (
    <div>
      <h3>Componente: mi primer estado</h3>
      <strong className="label">{nombre}</strong> <br />
      <button onClick={(e) => cambiarNombre(e, "Ale")}>
        Cambiar nombre por Fran
      </button>
      <input
        onKeyUp={(e) => cambiarNombre(e, e.target.value)}
        type="text"
        placeholder="Cambia el nombre"
      />
    </div>
  );
};

export default MiPrimerEstado;
