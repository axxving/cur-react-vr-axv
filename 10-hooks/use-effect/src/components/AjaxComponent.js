import { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState('');

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
      setErrores(error.message)
    } finally {
      setCargando(false);
    }
  } 

  useEffect(() => {
    getUsuariosAjaxAsyncAwait();
  }, []);

  if (errores != "" && cargando === true){
    return (
      <div className="error">
        {errores}
      </div>
    )
      
  } else if (errores === "" && cargando === true) {
    return (
      <div>
        Cargando...
      </div>
    )
    
  } else {
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
    )
  }
};
