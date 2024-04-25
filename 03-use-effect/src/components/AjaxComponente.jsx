import React, { useEffect, useState } from "react";

const AjaxComponente = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Generico / basico
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "usuario1@example.com",
        first_name: "Juan",
        last_name: "Pérez",
        avatar: "avatar1.jpg",
      },
      {
        id: 2,
        email: "usuario2@example.com",
        first_name: "María",
        last_name: "González",
        avatar: "avatar2.jpg",
      },
      {
        id: 3,
        email: "usuario3@example.com",
        first_name: "Pedro",
        last_name: "Sánchez",
        avatar: "avatar3.jpg",
      },
    ]);
  };

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultadoFinal) => {
          setUsuarios(resultadoFinal.data);
          console.log(usuarios);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAW = async () => {
    try {
      const peticion = await fetch("https://reqres.in/api/users?page=1");
      const { data } = await peticion.json();
      setUsuarios(data);
      console.log(usuarios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);

  return (
    <div>
      <h2>Listado de usuarios via AJAX</h2>
      <ol className="usuarios">
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              {usuario.first_name} {usuario.last_name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default AjaxComponente;
