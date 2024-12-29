import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Exercice01 = () => {
    const navigate = useNavigate();

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
                        <ol>
                            <li>Crear un componente</li>
                            <li>Recibir una prop con el año actual</li>
                            <li>Ojo, usar funciones para sacar el año</li>
                            <li>
                                Usar estados y eventos para tener dos botones:
                                <ul>
                                    <li>Pasar al próximo año</li>
                                    <li>Ir al año anterior</li>
                                    <li>
                                        Mostrar en todo momento el año por
                                        pantalla
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Validar que el año sea un número y que sea
                                requerido (prop)
                            </li>
                            <li>
                                Cambiar el año mediante un input de texto y que
                                se cambie dinámicamente
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <a onClick={() => navigate('/solution-01')}>
                                    Solucion Ejercicio 01
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
