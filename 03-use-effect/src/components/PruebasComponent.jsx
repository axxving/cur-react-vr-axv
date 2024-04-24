import React, { useEffect, useState } from "react";
import Aviso from "./Aviso";

const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Alejandro Hrz");
  const [fecha, setFecha] = useState("01-01-1998");
  const [contador, setContador] = useState(0);

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = () => {
    setFecha(new Date().toLocaleDateString());
  };

  useEffect(() => {
    console.log("Has cargado el componente de pruebas");
  }, []);

  useEffect(() => {
    setContador((prevContador) => prevContador + 1);
    console.log(`Has cargado el componente de usuario ${contador}`);
  }, [usuario]);

  return (
    <div>
      <h1>El efecto use effect</h1>
      <strong className={contador >= 10 ? "label label-green" : "label"}>
        {usuario}
      </strong>
      <p>
        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />
        <br />
        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>
      <p>Fecha actual: {fecha}</p>

      {usuario == "ALEX" && <Aviso></Aviso>}
    </div>
  );
};

export default PruebasComponent;
