import { useState } from 'react';
import React from 'react';

export const KeyEvents = () => {
    const [name, setName] = useState('');

    const changeName = (e, nombreFijo) => {
        setName(nombreFijo);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            Eventos del teclado
                        </h2>
                        <p>Modificar comportamientos mediante el teclado.</p>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-6">
                        <strong className="mb-5">{name}</strong>
                        <div className="card shadow">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Cambia el nombre"
                                onKeyUp={e => changeName(e, e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
