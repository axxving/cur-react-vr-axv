import React from "react";
import PropTypes from "prop-types";

const Tercer = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Comunicacion</h1>
      <p>Tercer componente</p>
      <ul>
        <li>{props.nombre}</li>
        <li>{props.apellido}</li>
        <li>{props.ficha.grupo}</li>
        <li>{props.ficha.estado}</li>
      </ul>
    </div>
  );
};

export default Tercer;

// validacion de los datos que se van a ingresar a travez de los props
Tercer.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string,
  ficha: PropTypes.object,
};
