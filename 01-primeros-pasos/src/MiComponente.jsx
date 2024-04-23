// Importar modulos de react / dependencias
import React from "react";

// Funcion del componente
const MiComponente = () => {
  const nombre = "Victor";
  let web = "victorroblesweb.es";

  let usuario = {
    nombre: "Alejandro",
    apellidos: "Hernandez",
    web: "alejandro-hrz.netlify.app",
  };

  return (
    <>
      <p>Este es mi primer componente</p>
      <h3>Datos del usuario:</h3>
      <ul>
        <li>Nombre: {nombre}</li>
        <li>
          Web: <strong> {web} </strong>
        </li>
        <hr />
        <li>
          Nombre: <strong>{JSON.stringify(usuario.nombre)}</strong>
        </li>
        <li>
          Apellidos: <strong>{JSON.stringify(usuario.apellidos)}</strong>
        </li>
        <li>
          Web: <strong>{JSON.stringify(usuario.web)}</strong>
        </li>
      </ul>

      <p>Estoy usando fragmentos</p>
    </>
  );
};

// Export
export default MiComponente;
