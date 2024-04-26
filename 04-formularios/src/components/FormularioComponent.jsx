// Importamos React y el hook useState desde la biblioteca 'react'
import React, { useState } from "react";

// Definimos un componente funcional llamado FormularioComponent
const FormularioComponent = () => {
  // Declaramos una variable de estado 'usuario' inicializada como un objeto vacío y una función 'setUsuario' para actualizar este estado
  const [usuario, setUsuario] = useState({});

  // Función que se ejecuta cuando se envía el formulario
  const conseguirDatosFormulario = (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe de forma predeterminada

    let datos = e.target; // Obtenemos los datos del formulario
    // Creamos un nuevo objeto 'nuevoUsuario' con los datos del formulario
    let nuevoUsuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value,
    };

    console.log(nuevoUsuario); // Mostramos el nuevo usuario en la consola

    // Actualizamos el estado 'usuario' con el nuevo usuario
    setUsuario(nuevoUsuario);
  };

  // Función que se ejecuta cuando se cambia un campo del formulario
  const cambiarDatos = (e) => {
    const nameDelInput = e.target.name; // Obtenemos el nombre del campo del formulario que cambió
    const valorDelInput = e.target.value; // Obtenemos el valor del campo del formulario que cambió

    // Actualizamos el estado 'usuario' utilizando una función de flecha y el spread operator
    // para mantener las propiedades existentes y solo cambiar la propiedad correspondiente al campo que cambió
    setUsuario((estadoPrevio) => ({
      ...estadoPrevio, // Mantenemos las propiedades existentes
      [nameDelInput]: valorDelInput, // Actualizamos la propiedad correspondiente al campo que cambió con su nuevo valor
    }));
  };

  return (
    <div>
      <h2>Formularios con React</h2>

      {/* Mostramos los datos del usuario si existen */}
      {usuario.enviar && (
        <div className="infoUsuario label">
          {usuario.nombre} {usuario.apellido} {usuario.genero} {usuario.bio}
        </div>
      )}

      {/* Formulario */}
      <form onSubmit={conseguirDatosFormulario}>
        {/* Campos del formulario */}
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          onChange={cambiarDatos} // Cuando cambia el campo, se ejecuta la función cambiarDatos
        />
        <br />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={cambiarDatos} // Cuando cambia el campo, se ejecuta la función cambiarDatos
        />
        <br />
        <select name="genero" onChange={cambiarDatos}>
          {/* Este espacio entre llaves se utiliza para agregar un espacio en blanco antes de la etiqueta */}{" "}
          {/* Abre la etiqueta 'select' para el campo de género y define el evento 'onChange' */}
          {/* Cuando cambia el campo, se ejecuta la función cambiarDatos */}
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <br />
        <textarea
          name="bio"
          placeholder="Biografía"
          onChange={cambiarDatos} // Cuando cambia el campo, se ejecuta la función cambiarDatos
        ></textarea>
        <br />

        {/* Botón para enviar el formulario */}
        <input type="submit" value="Enviar" name="enviar" />
      </form>
    </div>
  );
};

export default FormularioComponent; // Exportamos el componente FormularioComponent para poder utilizarlo en otros archivos
