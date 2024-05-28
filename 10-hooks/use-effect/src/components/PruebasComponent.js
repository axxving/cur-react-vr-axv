import React, { useEffect, useState } from "react";

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Nombre");

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  // Se carga solo cuando se carga por primera vez el componente
  useEffect(() => {
    console.log("Se cargo el componente");
  }, []);

  // Se carga solo cuando de modifica el usuario
  useEffect(() => {
    console.log("Se actualizo el usuario");
  }, [usuario]);

  return (
    <div>
      <strong className="nombre">{usuario}</strong>
      <form>
        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />
      </form>
    </div>
  );
};
