import { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuariosAjaxPms = () => {
    fetch('https://reqres.in/api/users?page=1')
      .then(respuesta => respuesta.json())
      .then(resultadoFinal => {
        setUsuarios(resultadoFinal.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const getUsuariosAjaxAsyncAwait = async() => {
    const peticion = await fetch("https://reqres.in/api/users?page=1");
    const {data} = await peticion.json();

    console.log(data);
    setUsuarios(data);
  } 

  useEffect(() => {
    //getUsuariosAjaxPms();
    getUsuariosAjaxAsyncAwait();
  }, []);

  return (
    <>
      <h2>Listado de usuarios via AJAX</h2>
      <ul>
        {
          usuarios.map((usuario, index) => (
            <li key={index}>
              {usuario.first_name} {usuario.last_name}
            </li>
          ))
        }
      </ul>
    </>
  );
};
