import React, { useState } from "react";

const MiPrimerEstado = () => {
  //   let nombre = "Alejandro Hernandez";

  //   const cambiarNombre = () => {
  //     nombre = "Paquito";
  //   };

  const [nombre, setNombre] = useState("Victor");

  const cambiarNombre = (e) => {
    setNombre("Alejandro");
  };

  return (
    <div>
      <h3>Componente: mi primer estado</h3>
      <strong>{nombre}</strong> <br />
      <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  );
};

export default MiPrimerEstado;
