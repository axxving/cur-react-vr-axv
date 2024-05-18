import React from 'react';

export const MiComponente = () => {

    let usuario = {
        nombre: "Alejandro",
        apellidos: "Hernandez Ramirez",
        web: "alex.ing.hz@gmail.com"
    }

    return (
        <div className='mi-comonente'>
            <hr />
            <h2>Componente generado</h2>
            <p>Datos del usuario:</p>
            <ul>
                <li>
                    Nombre: <strong> {usuario.nombre} </strong>
                </li>
                <li>
                    Apellidos: <strong> {usuario.apellidos} </strong>
                </li>
                <li>
                    Web: <strong> {usuario.web} </strong>
                </li>
            </ul>
            <p>Este es mi primer componente en el curso de Victor Robles</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    )
}
