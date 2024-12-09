import React from 'react';

export const Components = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            ¿Qué es un componente de React?
                        </h2>
                        <hr />
                        <p>
                            Un <strong>componente</strong> de React es una pieza
                            reutilizable de la interfaz de usuario que puede
                            combinarse con otros componentes para construir
                            aplicaciones completas. Los componentes encapsulan
                            lógica, estado y diseño, y pueden recibir datos
                            dinámicos a través de las <strong>"props"</strong>.
                            En React, los componentes son fundamentales para
                            crear interfaces modernas y mantenibles.
                        </p>
                        <p>
                            Existen dos tipos principales de componentes en
                            React:
                        </p>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">
                                <strong>Componentes Funcionales:</strong> Son
                                funciones de JavaScript que retornan elementos
                                JSX. Son más comunes y modernos, ya que soportan
                                características como <em>hooks</em> para manejar
                                estado y efectos secundarios.
                            </li>
                            <li className="list-group-item">
                                <strong>Componentes de Clase:</strong> Son
                                clases de JavaScript que extienden de{' '}
                                <code>React.Component</code>. Aunque son menos
                                usados actualmente, siguen siendo compatibles.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h4>Ejemplo de Componente Funcional</h4>
                        <pre className="bg-light p-3 rounded">
                            {`import React from 'react';

const Greeting = () => {
    return <h1>Hello, World!</h1>;
};

export default Greeting;`}
                        </pre>
                    </div>
                    <div className="col-md-6">
                        <h4>Ejemplo de Componente de Clase</h4>
                        <pre className="bg-light p-3 rounded">
                            {`import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}

export default Greeting;`}
                        </pre>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <p className="text-center">
                            En la actualidad, los{' '}
                            <strong>componentes funcionales</strong> son la
                            opción preferida debido a su simplicidad y soporte
                            para <em>hooks</em>, que permiten manejar el estado
                            y los efectos secundarios de forma más sencilla.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
