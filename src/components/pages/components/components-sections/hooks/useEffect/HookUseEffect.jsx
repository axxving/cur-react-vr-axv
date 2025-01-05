import React, { useEffect, useState } from 'react';

export const HookUseEffect = () => {
    const styleCard = {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
    };
    const [usuario, setUsuario] = useState('Alejandro');
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log('Se ha cargado el componente al cargar la pagina');
    }, []);

    useEffect(() => {
        console.log('El usuario se ha actualizado: ' + contador);

        setContador(contador + 1);
    }, [usuario]);

    const modificarNombre = e => {
        setUsuario(e.target.value);
    };

    return (
        <>
            <div className="container mt-4 p-4">
                <div className="row text-center">
                    <h2>Hook useEffect</h2>
                    <strong
                        className={`card text-white ${
                            contador > 10 ? 'bg-success' : 'bg-danger'
                        }`}
                        style={styleCard}
                    >
                        {usuario}
                    </strong>

                    <div className="col-md-6">
                        <form action="">
                            <input
                                type="text"
                                onChange={modificarNombre}
                                placeholder="Cambia el nombre"
                                className="form-control mt-3"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
