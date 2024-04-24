import React, { useEffect } from "react";

const Aviso = () => {
  useEffect(() => {
    // Cuando el componente se monta
    alert("El componente aviso component esta montado");

    // Cuando el componente se desmonta
    return () => {
      alert("Componente des montado");
    };
  }, []); // Se jecuta una vez por que le paso el array vacio

  return (
    <div>
      <hr />
      <h3>Saludos Alex</h3>
      <button
        onClick={(e) => {
          alert("Bienvenido Alex");
        }}
      >
        Mostrar alerta
      </button>
    </div>
  );
};

export default Aviso;
