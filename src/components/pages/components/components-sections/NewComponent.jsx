import React from 'react';

export const NewComponent = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            ¿Cómo crear un nuevo componente en React paso a
                            paso?
                        </h2>
                        <hr />
                        <p>
                            En React, crear un nuevo componente es un proceso
                            sencillo y fundamental para construir aplicaciones
                            modulares y mantenibles. Aquí se describe el proceso
                            paso a paso:
                        </p>
                        <ol className="list-group list-group-numbered mb-4">
                            <li className="list-group-item">
                                <strong>1. Crea un nuevo archivo:</strong>{' '}
                                Comienza creando un archivo con un nombre
                                representativo de tu componente. Por ejemplo,{' '}
                                <code>NewComponent.jsx</code>.
                            </li>
                            <li className="list-group-item">
                                <strong>2. Importa React:</strong> En el
                                archivo, importa React usando la instrucción
                                <code>import React from 'react';</code>.
                            </li>
                            <li className="list-group-item">
                                <strong>3. Define el componente:</strong> Usa
                                una función de JavaScript para definir tu
                                componente funcional. Este componente debe
                                retornar el JSX que representa la interfaz de
                                usuario.
                            </li>
                            <li className="list-group-item">
                                <strong>4. Exporta el componente:</strong>{' '}
                                Exporta el componente para que pueda ser
                                utilizado en otros archivos con la instrucción{' '}
                                <code>export default</code> o
                                <code>export const</code>.
                            </li>
                            <li className="list-group-item">
                                <strong>5. Usa el componente:</strong> Importa y
                                utiliza tu nuevo componente en cualquier otro
                                archivo o componente.
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h4>Ejemplo de Componente Paso a Paso</h4>
                        <pre className="bg-light p-3 rounded">
                            {`// Paso 1: Crea un archivo llamado NewComponent.jsx

// Paso 2: Importa React
import React from 'react';

// Paso 3: Define el componente
const NewComponent = () => {
    return <div>NewComponent</div>;
};

// Paso 4: Exporta el componente
export default NewComponent;`}
                        </pre>
                    </div>
                    <div className="col-md-6">
                        <h4>Cómo Usar el Componente</h4>
                        <pre className="bg-light p-3 rounded">
                            {`// Importa el componente en otro archivo
import React from 'react';
import NewComponent from './NewComponent';

const App = () => {
    return (
        <div>
            <h1>Mi Aplicación</h1>
            <NewComponent />
        </div>
    );
};

export default App;`}
                        </pre>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <p className="text-center">
                            Siguiendo estos pasos, puedes crear componentes
                            reutilizables y estructurar tu aplicación React de
                            manera eficiente y organizada.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
