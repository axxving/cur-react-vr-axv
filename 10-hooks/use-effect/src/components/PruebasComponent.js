import React, { useEffect, useState } from "react";

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Nombre");
  const [contador, setContador] = useState(0);

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

  useEffect(() => {
    if (contador >= 20) {
      alert("Has llegado a 20");
    }
  }, [contador, usuario]);

  const aumentar = () => {
    setContador(contador + 1);
    console.log("Haz dado clic al boton de aumentar: " + contador);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const recet = () => {
    setContador(0);
  };

  return (
    <div>
      <strong className="nombre">{usuario}</strong>
      <form>
        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />
        <br />
        <h1 className={contador >= 10 ? "verde" : "rojo"}>{contador}</h1>
        <button type="button" onClick={aumentar}>
          Auemntar
        </button>
        <button type="button" onClick={decrementar}>
          Decrementar
        </button>
        <button type="button" onClick={recet}>
          Recetear
        </button>
      </form>
    </div>
  );
};
