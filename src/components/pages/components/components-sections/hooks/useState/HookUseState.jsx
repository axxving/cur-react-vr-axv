import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const HookUseState = () => {
    const navigate = useNavigate();
    const initialCode = `
import React, { useState } from 'react';

const Counter = () => {
    // Declaramos un estado usando useState
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1); // Actualizamos el estado
    };

    const reset = () => {
        setCounter(0); // Reiniciamos el estado a su valor inicial
    };

    return (
        <div>
            <p>Valor del contador: {counter}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    );
};

export default Counter;
    `;

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            Trabajando con useState en React
                        </h2>
                        <hr />
                        <p>
                            El hook <code>useState</code> es una herramienta
                            esencial para manejar el estado en componentes
                            funcionales de React. Permite crear y actualizar
                            valores que determinan cómo se comporta o qué
                            muestra el componente. A continuación, exploraremos
                            un ejemplo de cómo usar <strong>useState</strong>{' '}
                            para manejar un contador.
                        </p>
                    </div>
                </div>

                {/* Ejemplo de uso de useState */}
                <div className="row bg-dark text-light p-4 rounded">
                    <div className="col-12">
                        <h4>Ejemplo: Contador con useState</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {initialCode}
                        </SyntaxHighlighter>
                        <p>
                            En este ejemplo, usamos <code>useState</code> para
                            manejar el estado de una variable{' '}
                            <code>counter</code>. La función{' '}
                            <code>setCounter</code> nos permite actualizar el
                            valor del contador y notificar a React que debe
                            re-renderizar el componente para reflejar el cambio.
                        </p>
                        <ul>
                            <li>
                                <strong>Inicialización:</strong>{' '}
                                <code>useState(0)</code> inicializa el estado
                                con el valor 0.
                            </li>
                            <li>
                                <strong>Actualización:</strong>{' '}
                                <code>setCounter(counter + 1)</code> actualiza
                                el valor y dispara un re-renderizado.
                            </li>
                            <li>
                                <strong>Reinicio:</strong> Podemos establecer el
                                estado de nuevo a su valor inicial llamando a{' '}
                                <code>setCounter(0)</code>.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="list-group">
                    <li className="list-group-item">
                        <a onClick={() => navigate('/useState01')}>
                            Ejercicio 01
                        </a>
                    </li>
                </div>
            </div>
        </>
    );
};
