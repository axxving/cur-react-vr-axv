import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Fragments = () => {
    const example1 = `
import React from 'react';

const FragmentExample = () => {
    return (
        <React.Fragment>
            <h1>Título Principal</h1>
            <p>Este es un párrafo dentro de un fragmento.</p>
        </React.Fragment>
    );
};

export default FragmentExample;
    `;

    const example2 = `
import React from 'react';

const ShortFragmentExample = () => {
    return (
        <>
            <h1>Título Principal</h1>
            <p>Este es un párrafo dentro de un fragmento corto.</p>
        </>
    );
};

export default ShortFragmentExample;
    `;

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            ¿Qué es un Fragmento en React?
                        </h2>
                        <hr />
                        <p>
                            Un <strong>Fragmento</strong> en React es una
                            característica que permite agrupar múltiples
                            elementos sin agregar nodos adicionales al DOM. Esto
                            es útil cuando deseas retornar varios elementos
                            desde un componente sin usar un elemento contenedor
                            como <code>&lt;div&gt;</code>.
                        </p>
                        <p>
                            Los fragmentos son ideales para optimizar el DOM y
                            evitar problemas de diseño o estructura generados
                            por contenedores innecesarios.
                        </p>
                        <p>
                            Existen dos formas principales de usar fragmentos:
                        </p>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">
                                <strong>1. Usar &lt;React.Fragment&gt;:</strong>{' '}
                                Es la forma completa y explícita de usar un
                                fragmento.
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    2. Usar la sintaxis corta &lt;&gt;&lt;/&gt;:
                                </strong>{' '}
                                Es más concisa y ampliamente utilizada.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sección de código oscuro */}
                <div className="row bg-dark text-light p-4 rounded">
                    <div className="col-md-6">
                        <h4>Ejemplo con &lt;React.Fragment&gt;</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {example1}
                        </SyntaxHighlighter>
                    </div>
                    <div className="col-md-6">
                        <h4>Ejemplo con la Sintaxis Corta</h4>
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
                            Los fragmentos son una herramienta poderosa para
                            organizar tu código React de manera más limpia y
                            eficiente, evitando la sobrecarga de nodos
                            innecesarios en el DOM.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
