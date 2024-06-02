import React, { useState } from "react";

export const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = (e) => {
    e.preventDefault();

    let formElements = e.target.elements;

    const newUser = {
      nombre: formElements.nombre.value,
      apellido: formElements.apellido.value,
      genero: formElements.genero.value,
      bio: formElements.bio.value
    }

    console.log(newUser);

    setUsuario(newUser);
  }

  const cambiarDatos = (e) => {
    let nameInput = e.target.value;
    let usuarioModificado = usuario;

    setUsuario((estadoPrevio) => {
      return {
        ...estadoPrevio,
        [nameInput]: e.target.value 
      }
    })
  }

  return (
    <div>
      <h1>Formularios con React</h1>

      {
        usuario.bio && usuario.bio.length >= 1 ? 
          (
          <div className="card-usuario">
            <h2>{usuario.nombre}</h2>
            <br />
            <h2>{usuario.apellido}</h2>
            <br />
            <strong>{usuario.genero}</strong>
            <br />
            <p>{usuario.bio}</p>
          </div>
          )
        :
        <h2>Aun no hay usuarios</h2>
      }

      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" placeholder="Nombre" name="nombre" onChange={cambiarDatos}/>
        <input type="text" placeholder="Apellido" name="apellido" onChange={cambiarDatos}/>
        <select name="genero" onChange={cambiarDatos}>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <textarea name="bio" placeholder="Biografía" onChange={cambiarDatos} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
