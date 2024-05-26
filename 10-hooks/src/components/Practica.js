import React from "react";

// Importando prop types
import PropTypes from "prop-types";

export const Practica = ({year, proximoYear, lastYear, definirYear}) => {

  return (
        <div>
            <h1>Practica</h1>
            {/*Year actual*/}
            <strong>El year actual es: {year}</strong> <br />
            <button onClick={proximoYear}>Next Year</button>
            <button onClick={lastYear}>Last Year</button>
            <button onClick={definirYear}>Restablecer year </button>
        </div>
    );
};

// Prop types
Practica.propTypes = {
    year: PropTypes.number.isRequired
}

