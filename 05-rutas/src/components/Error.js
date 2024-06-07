import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <h2>Error 404</h2>
      <p>Esta pagina web no existe</p>
      <Link to={"/inicio"}>
        Volver al inicio
      </Link>
    </>
  );
};
