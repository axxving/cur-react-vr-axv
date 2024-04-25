import React, { useEffect, useState } from "react";

const AjaxComponente = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

  const getUsuariosAjaxAW = async () => {
    try {
      const peticion = await fetch("https://reqres.in/api/users?page=1"); // Corregido el nombre de la URL
      const { data } = await peticion.json();
      setUsuarios(data);
      setCargando(false);
    } catch (error) {
      setErrores(error.message);
    }
  };

  useEffect(() => {
    getUsuariosAjaxAW();
  }, []);

  if (errores !== "") {
    return <div className="errores">{errores}</div>;
  } else if (cargando === true) {
    // Corregido el operador de comparación
    return <div className="cargando">Cargando datos...</div>;
  } else if (cargando === false && errores === "") {
    // Corregido el operador de comparación y el orden de verificación
    return (
      <div>
        <h2>Listado de usuarios via AJAX</h2>
        <ol className="usuarios">
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <img src={usuario.avatar} alt={usuario.first_name} />
              <br />
              {usuario.first_name} {usuario.last_name}
            </li>
          ))}
        </ol>
      </div>
    );
  }
};

export default AjaxComponente;
