import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const PropsCommunication = () => {
    const example1 = `
import React from 'react';

const ParentComponent = () => {
    const message = "Hola desde el componente padre";

    return <ChildComponent message={message} />;
};

const ChildComponent = ({ message }) => {
    return <h1>{message}</h1>;
};

export default ParentComponent;
    `;

    const example2 = `
import React from 'react';

const GrandparentComponent = () => {
    const message = "Hola desde el componente abuelo";

    return <ParentComponent message={message} />;
};

const ParentComponent = ({ message }) => {
    return <ChildComponent message={message} />;
};

const ChildComponent = ({ message }) => {
    return <h1>{message}</h1>;
};

export default GrandparentComponent;
    `;

    const example3 = `
import React from 'react';

const App = () => {
    const user = {
        name: "Juan",
        age: 30,
    };

    return <Grandparent user={user} />;
};

const Grandparent = ({ user }) => {
    return <Parent user={user} />;
};

const Parent = ({ user }) => {
    return <Child user={user} />;
};

const Child = ({ user }) => {
    return (
        <div>
            <h1>Nombre: {user.name}</h1>
            <p>Edad: {user.age}</p>
        </div>
    );
};

export default App;
    `;

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            Comunicación entre Componentes usando Props
                        </h2>
                        <hr />
                        <p>
                            En React, la comunicación entre componentes se
                            realiza principalmente mediante <strong>props</strong>. Las
                            props permiten pasar datos de un componente padre a
                            un componente hijo. Aquí tienes ejemplos de cómo
                            hacerlo en diferentes niveles:
                        </p>
                    </div>
                </div>

                {/* Ejemplo 1 */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>Ejemplo 1: Comunicación entre un padre y un hijo</h4>
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                            {example1}
                        </SyntaxHighlighter>
                        <p>
                            En este caso, el componente padre pasa un mensaje al
                            componente hijo mediante props.
                        </p>
                    </div>
                </div>

                {/* Ejemplo 2 */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>Ejemplo 2: Comunicación a través de múltiples niveles</h4>
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                            {example2}
                        </SyntaxHighlighter>
                        <p>
                            Aquí el mensaje pasa del componente abuelo al hijo
                            a través del padre.
                        </p>
                    </div>
                </div>

                {/* Ejemplo 3 */}
                <div className="row bg-dark text-light p-4 rounded">
                    <div className="col-12">
                        <h4>Ejemplo 3: Pasar objetos complejos entre componentes</h4>
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                            {example3}
                        </SyntaxHighlighter>
                        <p>
                            En este caso, un objeto que contiene información
                            del usuario se pasa desde el componente raíz hasta
                            el componente más interno.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
