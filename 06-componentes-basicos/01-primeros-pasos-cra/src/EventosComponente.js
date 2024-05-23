import React from 'react'

export const EventosComponente = () => {

    // Funcion que dispara el evento del clic
    const handleClick = (e) => {
        console.log('Le haz dado clic al boton', e)
    }

    const hanldeClicWithEvent = (event, nombre) => {
        console.log(event, nombre)
    }

    return (
        <div className='container'>
            <h2>EventosComponente</h2>

            {/* Evento Click sin parametros */}
            <button onClick={handleClick}>Dame clic</button>

            {/* Evento de clic con parametros */}
            <button onClick={(event) => hanldeClicWithEvent(event, 'Alejandro')}> Dame clic con parametros </button>

        </div>
    )
}
