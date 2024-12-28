import React, { useState } from 'react';

export const UseState03 = () => {
    const [color, setColor] = useState(0);
    const [textoColor, setTextoColor] = useState('');

    const boxStyles = {
        width: '100%',
        height: '500px',
        padding: '50px',
    };

    const colors = ['red', 'blue', 'green', 'yellow'];

    const handleColor = () => {
        const newColorIndex = color >= 3 ? 0 : color + 1;
        setColor(newColorIndex);
        setTextoColor(colors[newColorIndex]);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Ejercicio - 03</h2>
                        <hr />
                        <p>
                            Crea un componente que tenga un botón que cambie el
                            color de fondo de un cuadro cada vez que se haga
                            clic.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <button
                            className="btn btn-danger w-100"
                            onClick={handleColor}
                        >
                            Siguiente color
                        </button>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="card mt-5 shadow text-center"
                            style={{
                                background: `${colors[color]}`,
                                width: '100%',
                                height: '500px',
                                padding: '50px',
                            }}
                        >
                            <h2>Color de la card = {textoColor}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
