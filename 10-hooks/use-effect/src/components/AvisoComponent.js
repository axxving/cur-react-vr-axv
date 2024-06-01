import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        console.log("AvisoComponents se ha montado");

        return () => {
            alert("Componente desmontado");
        }
    }, [])

  return (
    <div>

        <h1>Como estas ALEX?</h1>
        <button onClick={e => {
            alert("La alerta se ha mostrado")
        }}>Mostrar una alerta</button>
    </div>
  )
}
