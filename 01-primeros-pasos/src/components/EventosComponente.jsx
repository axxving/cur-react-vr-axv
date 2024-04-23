import React from "react";

const EventosComponente = () => {
  const hasDadoClic = (e, nombre) => {
    alert("Has dado clic al botón " + nombre);
  };

  const hasDadoDobleClic = (e, nombre) => {
    alert("Has dado doble clic en " + nombre);
  };

  const hasEntrado = (accion) => {
    alert(
      `Has ${
        accion === "entrado" ? "entrado en" : "salido de"
      } la caja con el mouse`
    );
  };

  const estasDentro = (e) => {
    alert("Estas dentro del input, introduce tu nombre");
  };

  const estasFuera = (e) => {
    alert("Estas fuera del input");
  };

  return (
    <div>
      <h1>Eventos en React</h1>
      <p>
        <button onClick={(e) => hasDadoClic(e, "Alex")}>Dame Clic</button>
      </p>
      <p>
        <button onDoubleClick={(e) => hasDadoDobleClic(e, "Alex")}>
          Dame Doble Clic
        </button>
      </p>
      {/* <p>
        <div
          id="caja"
          onMouseEnter={() => hasEntrado("entrado")}
          onMouseLeave={() => hasEntrado("salido")}
        >
          Pasa por encima
        </div>
      </p>

      <p>
        <input
          type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="introduce tu nombre"
        />
      </p> */}
    </div>
  );
};

export default EventosComponente;
