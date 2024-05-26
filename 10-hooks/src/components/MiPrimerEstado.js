import React, { useState, useRef } from "react";

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState("Alex");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const cambiarNombre = (e, nombre) => {
    setNombre(nombre);
  };

  const restaurarNombre = (e) => {
    setNombre('...');
    inputRef1.current.value = '';
    inputRef2.current.value = '';
  }

  return (
    <div>
      <h3>Mi primer estado</h3>
      <strong>{nombre}</strong> <br/>
      <button onClick={restaurarNombre}>Restaurar Nombre</button>
      <br/>
      <input 
        type="text" 
        placeholder="usando onKeyDown" 
        onKeyDown={e => cambiarNombre(e, e.target.value)} 
        ref={inputRef1}
      />
      <input 
        type="text" 
        placeholder="usando onchange" 
        onChange={e => cambiarNombre(e, e.target.value)} 
        ref={inputRef2}
      />
    </div>
  );
};
