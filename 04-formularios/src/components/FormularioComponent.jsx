import React, { useState } from "react";

const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = (e) => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
    };

    console.log(usuario);

    setUsuario(usuario);
  };

  return (
    <div>
      <h2>Formularios con React</h2>

      {usuario.bio && usuario.bio.length >= 1 && (
        <div className="infoUsuario label">
          {usuario.nombre} {usuario.apellido} {usuario.genero} {usuario.bio}
        </div>
      )}

      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" name="nombre" placeholder="nombre" />
        <br />
        <input type="text" name="apellido" placeholder="Apellido" />
        <br />
        <select name="genero">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <br />
        <textarea name="bio" placeholder="Biografia"></textarea>
        <br />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioComponent;
