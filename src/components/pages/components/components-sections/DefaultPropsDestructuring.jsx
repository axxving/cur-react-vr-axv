import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const DefaultPropsDestructuring = () => {
    const example1 = `
import React from 'react';

const Greeting = ({ name = "Invitado" }) => {
    return <h1>Hola, {name}!</h1>;
};

export default Greeting;
    `;

    const example2 = `
import React from 'react';

const UserInfo = ({ user: { name, age } }) => {
    return (
        <div>
            <h1>Nombre: {name}</h1>
            <p>Edad: {age}</p>
        </div>
    );
};

const App = () => {
    const user = { name: "Juan", age: 30 };

    return <UserInfo user={user} />;
};

export default App;
    `;

    const example3 = `
import React from 'react';

const Product = ({ name, price = 0 }) => {
    return (
        <div>
            <h1>Producto: {name}</h1>
            <p>Precio: {price} USD</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Product name="Laptop" price={1200} />
            <Product name="Teclado" /> {/* Usa el valor por defecto */}
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
                            Default Props y Desestructuración en React
                        </h2>
                        <hr />
                        <p>
                            En React, <strong>default props</strong> y la{' '}
                            <strong>desestructuración</strong> son herramientas
                            útiles para simplificar la gestión de las
                            propiedades (props) en los componentes.
                        </p>
                        <p>
                            Las default props permiten establecer valores
                            predeterminados para las props que no son provistas
                            por el componente padre. Por otro lado, la
                            desestructuración facilita acceder a valores
                            específicos de las props u objetos de forma clara y
                            concisa.
                        </p>
                    </div>
                </div>

                {/* Ejemplo 1 */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>Ejemplo 1: Uso de Default Props</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {example1}
                        </SyntaxHighlighter>
                        <p>
                            En este ejemplo, se establece un valor por defecto
                            para la prop <code>name</code>, de manera que si no
                            se pasa, el componente usa "Invitado".
                        </p>
                    </div>
                </div>

                {/* Ejemplo 2 */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>
                            Ejemplo 2: Desestructuración de Objetos en Props
                        </h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {example2}
                        </SyntaxHighlighter>
                        <p>
                            Aquí, la desestructuración permite acceder
                            directamente a las propiedades <code>name</code> y{' '}
                            <code>age</code>
                            del objeto <code>user</code> pasado como prop.
                        </p>
                    </div>
                </div>

                {/* Ejemplo 3 */}
                <div className="row bg-dark text-light p-4 rounded">
                    <div className="col-12">
                        <h4>
                            Ejemplo 3: Combinación de Default Props y
                            Desestructuración
                        </h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {example3}
                        </SyntaxHighlighter>
                        <p>
                            Este ejemplo combina default props con
                            desestructuración para manejar valores
                            predeterminados y acceder a las props de manera
                            eficiente.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
