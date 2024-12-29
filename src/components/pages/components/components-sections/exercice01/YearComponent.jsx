import React, { useState } from 'react';

export const YearComponent = ({ year }) => {
    const [inYear, setInYear] = useState(year);

    const styleBox = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const nextYear = () => {
        setInYear(prevYear => prevYear + 1);
    };

    const prevYear = () => {
        setInYear(prevYear => prevYear - 1);
    };

    const definirFecha = (e, yearStatic) => {
        setInYear(Number(yearStatic));
    };

    const resetDate = () => {
        setInYear(year);
    };

    return (
        <>
            <h2>{inYear}</h2>

            <div style={styleBox}>
                <button className="btn btn-primary" onClick={prevYear}>
                    Anterior
                </button>
                <button className="btn btn-secondary ms-2" onClick={nextYear}>
                    Siguiente
                </button>

                <input
                    className="form-control ms-2"
                    type="text"
                    placeholder="Definir fecha"
                    onKeyUp={e => definirFecha(e, e.target.value)}
                />

                <button className="btn btn-danger ms-2" onClick={resetDate}>
                    Reset
                </button>
            </div>
        </>
    );
};
