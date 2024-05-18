import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = (
    {
        nombre = "Valor por defecto", 
        apellido = "Valor por defecto", 
        ficha
    }) => {

    return (
        <div>
            <h2>Comunicacion entre componentes</h2>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
            </ul>
        </div>
    )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object.isRequired,
}

// TercerComponente.defaultProps = {
//     nombre: "Juan",
//     apellido: "Martinez",
// }