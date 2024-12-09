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
                    </ul>
                </div>
            </div>
        </div>
    );
};
