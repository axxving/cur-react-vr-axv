import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const DisplayData = () => {
    const example1 = `
import React from 'react';

const SimpleDataDisplay = () => {
    const name = 'Juan';
    const age = 25;

    return (
        <div>
            <h1>Hola, mi nombre es {name}</h1>
            <p>Tengo {age} años.</p>
        </div>
    );
};

export default SimpleDataDisplay;
    `;

    const example2 = `
import React, { useState } from 'react';

const DynamicDataDisplay = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Incrementar
            </button>
        </div>
    );
};

export default DynamicDataDisplay;
    `;

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            ¿Cómo mostrar datos en JSX?
                        </h2>
                        <hr />
                        <p>
                            En React, los datos del componente se pueden mostrar
                            dentro del JSX utilizando{' '}
                            <strong>expresiones de JavaScript</strong>. Para
                            ello, se encierran las variables o expresiones en
                            llaves <code>{'{}'}</code>.
                        </p>
                        <p>Aquí tienes dos ejemplos:</p>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">
                                <strong>1. Mostrar variables simples:</strong>{' '}
                                Utilizando variables declaradas dentro del
                                componente.
                            </li>
                            <li className="list-group-item">
                                <strong>2. Mostrar datos dinámicos:</strong>{' '}
                                Utilizando el estado del componente para
                                actualizar valores en tiempo real.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sección de código oscuro */}
                <div className="row bg-dark text-light p-4 rounded">
                    <div className="col-md-6">
                        <h4>Ejemplo 1: Variables simples</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {example1}
                        </SyntaxHighlighter>
                    </div>
                    <div className="col-md-6">
                        <h4>Ejemplo 2: Datos dinámicos</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {example2}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <p className="text-center">
                            Mostrar datos en JSX es una característica
                            fundamental de React que permite crear interfaces
                            dinámicas y personalizadas basadas en datos del
                            componente o del estado.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
