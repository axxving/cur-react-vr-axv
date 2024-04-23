import React from "react";

const EventosComponente = () => {
  // funcion de clic
  const hasDadodClic = (e, nombre) => {
    alert("Haz dado clic a el boton " + nombre);
  };

  return (
    <div>
      <h1>Eventos en React</h1>
      {/* Evento de Clic */}
      <button onClick={(e) => hasDadodClic(e, "Alex")}>Dame Clic</button>
    </div>
  );
};

export default EventosComponente;
