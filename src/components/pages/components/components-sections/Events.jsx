import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Events = () => {
    const mouseEventExample = `
import React from 'react';

const MouseEventComponent = () => {
    const handleClick = () => {
        alert('¡Hiciste clic!');
    };

    return <button onClick={handleClick}>Haz clic aquí</button>;
};

export default MouseEventComponent;
    `;

    const keyboardEventExample = `
import React from 'react';

const KeyboardEventComponent = () => {
    const handleKeyDown = (event) => {
        console.log('Tecla presionada:', event.key);
    };

    return (
        <input 
            type="text" 
            placeholder="Escribe algo" 
            onKeyDown={handleKeyDown} 
        />
    );
};

export default KeyboardEventComponent;
    `;

    const formEventExample = `
import React, { useState } from 'react';

const FormEventComponent = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Formulario enviado con el valor: ' + value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value} 
                onChange={handleChange} 
                placeholder="Escribe algo" 
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormEventComponent;
    `;

    const focusEventExample = `
import React from 'react';

const FocusEventComponent = () => {
    const handleFocus = () => {
        console.log('Elemento enfocado');
    };

    const handleBlur = () => {
        console.log('Elemento perdió el foco');
    };

    return (
        <input 
            type="text" 
            placeholder="Foco y desenfoque" 
            onFocus={handleFocus} 
            onBlur={handleBlur} 
        />
    );
};

export default FocusEventComponent;
    `;

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Eventos en React</h2>
                        <hr />
                        <p>
                            En React, los eventos son manejados mediante{' '}
                            <strong>SyntheticEvent</strong>, que es una capa de
                            abstracción sobre los eventos del navegador, para
                            garantizar la compatibilidad entre navegadores. A
                            continuación, exploraremos los principales tipos de
                            eventos en React con ejemplos.
                        </p>
                    </div>
                </div>

                {/* Ejemplo de eventos de ratón */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>Ejemplo 1: Eventos del Ratón</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {mouseEventExample}
                        </SyntaxHighlighter>
                        <p>
                            Este ejemplo demuestra cómo manejar un evento{' '}
                            <code>onClick</code> para mostrar una alerta al
                            hacer clic en un botón.
                        </p>
                    </div>
                </div>

                {/* Ejemplo de eventos de teclado */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>Ejemplo 2: Eventos de Teclado</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {keyboardEventExample}
                        </SyntaxHighlighter>
                        <p>
                            Aquí capturamos el evento <code>onKeyDown</code>{' '}
                            para registrar las teclas presionadas en un campo de
                            texto.
                        </p>
                    </div>
                </div>

                {/* Ejemplo de eventos de formulario */}
                <div className="row bg-dark text-light p-4 rounded mb-4">
                    <div className="col-12">
                        <h4>Ejemplo 3: Eventos de Formularios</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {formEventExample}
                        </SyntaxHighlighter>
                        <p>
                            Este ejemplo utiliza <code>onChange</code> para
                            manejar cambios en un campo de entrada y{' '}
                            <code>onSubmit</code> para gestionar el envío de
                            formularios.
                        </p>
                    </div>
                </div>

                {/* Ejemplo de eventos de foco */}
                <div className="row bg-dark text-light p-4 rounded">
                    <div className="col-12">
                        <h4>Ejemplo 4: Eventos de Foco</h4>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {focusEventExample}
                        </SyntaxHighlighter>
                        <p>
                            Este ejemplo muestra cómo manejar eventos{' '}
                            <code>onFocus</code> y <code>onBlur</code> en un
                            campo de entrada.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
