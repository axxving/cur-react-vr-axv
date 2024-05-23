import React from 'react'

export const EventosComponente = () => {

    // Funcion que dispara el evento del clic
    const handleClick = (e) => {
        console.log('Le haz dado clic al boton', e)
    }

    const hanldeClicWithEvent = (event, nombre) => {
        console.log(event, nombre)
    }

    const handleClickDouble = () => {
        console.log('Se le dio doble clic al boton')
    }

    const handleOpen = () => {
        console.log('Se habre');
    }

    const handleExit = () => {
        console.log('se cierra');
    }

    return (
        <div className='container'>
            <h2>EventosComponente</h2>

            {/* Evento Click sin parametros */}
            <button onClick={handleClick}>Dame clic</button>

            {/* Evento de clic con parametros */}
            <button onClick={(event) => hanldeClicWithEvent(event, 'Alejandro')}> Dame clic con parametros </button>

            {/* Evento de doble clic */}
            <button onDoubleClick={handleClickDouble}>Dame doble clic</button>

            {/* Evento de hover */}
            <div onMouseEnter={ handleOpen } onMouseLeave={handleExit} id='caja'>
                Pasa por encima
            </div>

        </div>
    )
}
