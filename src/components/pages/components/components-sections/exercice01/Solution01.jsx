import React from 'react';
import { YearComponent } from './YearComponent';

export const Solution01 = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">
                            Solucion al Ejercicio 01
                        </h2>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <YearComponent year={currentYear} />
                </div>
            </div>
        </>
    );
};
