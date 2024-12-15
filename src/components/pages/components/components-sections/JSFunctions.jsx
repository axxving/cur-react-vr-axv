import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const JsFunctions = () => {
    const badExample = `
import React from 'react';

const CounterWithoutState = () => {
    let counter = 0;

    const increment = () => {
        counter += 1;
        console.log('Contador:', counter);
    };

    return (
        <div>
            <p>Contador: {counter}</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
};

export default CounterWithoutState;
    `;

    const goodExample = `
import React, { useState } from 'react';

const CounterWithState = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <p>Contador: {counter}</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
};

export default CounterWithState;
    `;

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            Problemas al Usar Variables JavaScript en Lugar de
                            useState
                        </h2>
                        <hr />
                        <p>
                            En React, intentar manejar el estado de los
                            componentes con variables normales de JavaScript
                            puede causar problemas, ya que las actualizaciones
                            del DOM no se reflejan automáticamente. Esto sucede
                            porque React no detecta cambios en variables fuera
                            del flujo de su estado administrado. Aquí
                            exploraremos este problema y cómo solucionarlo
                            usando <strong>useState</strong>.
                        </p>
                    </div>
                </div>

                {/* Ejemplo de mal uso */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>Ejemplo Incorrecto: Usar Variables Normales</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {badExample}
                        </SyntaxHighlighter>
                        <p>
                            En este ejemplo, aunque la variable{' '}
                            <code>counter</code> cambia su valor en la función{' '}
                            <code>increment</code>, el componente no se
                            re-renderiza para mostrar el nuevo valor. Esto
                            sucede porque React no "sabe" que debe actualizar el
                            DOM al cambiar una variable que no está administrada
                            con su sistema de estado.
                        </p>
                    </div>
                </div>

                {/* Ejemplo de buen uso */}
                <div className="row bg-dark text-light p-4 rounded">
                    <div className="col-12">
                        <h4>Ejemplo Correcto: Usar useState</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {goodExample}
                        </SyntaxHighlighter>
                        <p>
                            Este ejemplo soluciona el problema utilizando{' '}
                            <code>useState</code>, lo que permite que React
                            detecte el cambio de estado, actualice el DOM y
                            re-renderice el componente automáticamente.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
