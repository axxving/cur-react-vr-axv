import React, { useEffect, useState } from "react";

const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Alejandro Hrz");
  const [fecha, setFecha] = useState("01-01-1998");

  const modusuario = (e) => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = () => {
    setFecha(new Date().toLocaleDateString());
  };

  useEffect(() => {
    console.log("Has cargado el componente de pruebas");
  }, []);

  useEffect(() => {
    console.log("Has cargado el componente de usuario");
  }, [usuario]);

  return (
    <div>
      <h1>El efecto use effect</h1>
      <strong className="label">{usuario}</strong>
      <p>
        <input
          type="text"
          onChange={modusuario}
          placeholder="Cambia el nombre"
        />

        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>
      <p>Fecha actual: {fecha}</p>
    </div>
  );
};

export default PruebasComponent;
