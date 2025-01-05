import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-2 py-2">
            <h2>Inicio</h2>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a onClick={() => navigate('/componentes')}>
                                Que es un componente de React?
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/nuevo-componente')}>
                                Como se hace un componente en React?
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/fragmentos')}>
                                Que son y para que sirven los fragmentos?
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/mostrar-datos')}>
                                Mostrar datos en el template?
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/props')}>
                                Comunicacion entre componentes
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/default-props')}>
                                Default Props y Parametros por defecto
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/events')}>
                                Eventos de React
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/js-functions')}>
                                El problema de usar funciones de JavaScript
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/hook-usestate')}>
                                Como se usa el Hook useState?
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/ejercicio-01')}>
                                Ejercicio 01
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a onClick={() => navigate('/useeffect')}>
                                Como se usa el Hook useEffect?
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
