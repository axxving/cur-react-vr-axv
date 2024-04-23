// Importaciones del componente
import React, { Fragment } from "react";
import "./App.css";
import MiComponente from "./MiComponente";
import Segundo from "./components/Segundo";
import Tercer from "./components/Tercer";

// Funcion del componente
function App() {
  const fichamedica = {
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna",
  };

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <MiComponente></MiComponente>
          <h2>Este es un nuevo componente:</h2>
          <Segundo></Segundo>
          <h2> Este es el tercer componente </h2>
          <Tercer nombre="Alex" apellido="Hernandez" ficha={fichamedica} />
        </header>
      </div>
    </Fragment>
  );
}
// Exportando el componente
export default App;
