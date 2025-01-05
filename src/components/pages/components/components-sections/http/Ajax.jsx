import React, { useEffect, useState } from 'react';

export const Ajax = () => {
    const [usuarios, setUsuarios] = useState([]);

    const getUsuariosEstaticos = [
        {
            id: 1,
            email: 'juan@reqres.in',
            first_name: 'Juan',
            last_name: 'Perez',
        },
        {
            id: 2,
            email: 'maria@reqres.in',
            first_name: 'Maria',
            last_name: 'Garcia',
        },
        {
            id: 3,
            email: 'pepe@reqres.in',
            first_name: 'Pepe',
            last_name: 'Lopez',
        },
        {
            id: 4,
            email: 'ana@reqres.in',
            first_name: 'Ana',
            last_name: 'Martinez',
        },
        {
            id: 5,
            email: 'carlos@reqres.in',
            first_name: 'Carlos',
            last_name: 'Ramirez',
        },
    ];

    useEffect(() => {
        setUsuarios(getUsuariosEstaticos);
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row text-center">
                    <h2>Ajax</h2>

                    <h5>Listado de usuarios via AJAX</h5>

                    <ol>
                        {usuarios.map(usuario => {
                            return (
                                <li key={usuario.id}>
                                    {usuario.first_name} {usuario.last_name}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};
