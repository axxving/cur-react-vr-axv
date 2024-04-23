import React from "react";
import PropTypes from "prop-types";

const Tercer = ({ nombre, apellido, ficha }) => {
  return (
    <div>
      <h1>Comunicacion</h1>
      <p>Tercer componente</p>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.grupo}</li>
        <li>{ficha.estado}</li>
      </ul>
    </div>
  );
};

export default Tercer;

// validacion de los datos que se van a ingresar a travez de los props
Tercer.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  ficha: PropTypes.object,
};

Tercer.defaultProps = {
  nombre: "Props default",
  apellido: "Props default",
  ficha: PropTypes.object,
};
