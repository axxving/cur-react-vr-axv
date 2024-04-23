// Importaciones del componente
import React, { Fragment } from "react";
import "./App.css";
import MiComponente from "./MiComponente";
import Segundo from "./components/Segundo";

// Funcion del componente
function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <MiComponente></MiComponente>
          <h2>Este es un nuevo componente:</h2>
          <Segundo></Segundo>
        </header>
      </div>
    </Fragment>
  );
}
// Exportando el componente
export default App;
