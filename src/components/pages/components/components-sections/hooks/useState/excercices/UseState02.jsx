import React, { useState } from 'react';

export const UseState02 = () => {
    const [visible, setVisible] = useState(true);

    // Manejar estado visible o invisible
    const mostrar = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Ejercicio - 02</h2>
                        <hr />
                        <p>
                            Crea un componente que muestre un botón para
                            alternar entre mostrar y ocultar un texto en la
                            pantalla.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <button
                            className="btn btn-primary w-100"
                            onClick={mostrar}
                        >
                            Mostrar Texto
                        </button>
                    </div>
                    <div className="col-md-6 text-center">
                        <h2>{visible ? 'Texto visible' : ''}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};
