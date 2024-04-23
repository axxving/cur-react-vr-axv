import React from "react";

const EventosComponente = () => {
  // funcion de clic
  const hasDadodClic = (e, nombre) => {
    alert("Haz dado clic a el boton " + nombre);
  };

  const hasDadoDobleClic = (e, nombre) => {
    alert("Has dado doble clic " + nombre);
  };

  return (
    <div>
      <h1>Eventos en React</h1>
      <p>
        {/* Evento de Clic */}
        <button onClick={(e) => hasDadodClic(e, "Alex")}>Dame Clic</button>
      </p>
      <p>
        {/* Evento de Doble Clic */}
        <button onDoubleClick={(e) => hasDadoDobleClic(e, "Alex")}>
          Dame Doble Clic
        </button>
      </p>
    </div>
  );
};

export default EventosComponente;
