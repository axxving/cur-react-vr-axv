import React from "react";
import { useParams } from "react-router-dom";

export const Persona = () => {

  const {nombre} = useParams();

  return (
    <>
      <h2>Pagina de persona: {nombre}</h2>
      <p>Esta es la pagina de persona</p>
    </>
  );
};
