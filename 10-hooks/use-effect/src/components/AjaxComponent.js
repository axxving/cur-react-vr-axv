import { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getUsuariosAjaxPms = () => {
    fetch('https://reqres.in/api/users?page=1')
      .then(respuesta => respuesta.json())
      .then(resultadoFinal => {
        setUsuarios(resultadoFinal.data);
        setCargando(false);
      })
      .catch(error => {
        console.log(error);
        setCargando(false);
      });
  }

  const getUsuariosAjaxAsyncAwait = async() => {
    try {
      const peticion = await fetch("https://reqres.in/api/users?page=1");
      const {data} = await peticion.json();
      console.log(data);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  } 

  useEffect(() => {
    getUsuariosAjaxAsyncAwait();
  }, []);

  return (
    cargando === true ? (
      <div className="cargando">
        Cargando datos
      </div>
    ) : (
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
    )
  );
};
