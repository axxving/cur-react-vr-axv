import React, { useState } from 'react';

export const UseState01 = () => {
    const [contador, setContador] = useState(1);
    const [value, setValue] = useState('');

    // Manejar el estado del input
    const handleChange = e => {
        setValue(Number(event.target.value));
    };

    // Manejar el envio del numero
    const handleSubmit = () => {
        setContador(Number(value));
    };

    // Manejar incremento
    const increment = () => {
        setContador(contador + value);
    };

    // Manejar decremento
    const decrement = () => {
        setContador(contador - value);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Ejercicio - 01</h2>
                        <p>
                            Crea un componente que tenga un contador, pero esta
                            vez permite al usuario especificar cuanto desea
                            incrementar o decrementar el valor del contador.
                        </p>
                    </div>
                </div>

                <hr />

                <h2>Elije el numero a incrementar</h2>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <input
                            type="number"
                            value={value}
                            onChange={handleChange}
                            placeholder="Ingresa el numero"
                            className="form-control"
                        />
                        <button
                            className="btn btn-primary ms-2"
                            onClick={handleSubmit}
                        >
                            Definir
                        </button>

                        <button
                            className="btn btn-success ms-2"
                            onClick={increment}
                        >
                            +
                        </button>
                        <button
                            className="btn btn-danger ms-2"
                            onClick={decrement}
                        >
                            -
                        </button>
                    </div>

                    <div className="col-md-6">
                        <h2>Numero incrementado es igual a: {contador}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};
