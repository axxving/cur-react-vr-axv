// Importaciones del componente
import React, { Fragment } from "react";
import "./App.css";
import MiComponente from "./MiComponente";

// Funcion del componente
function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <MiComponente></MiComponente>
        </header>
      </div>
    </Fragment>
  );
}
// Exportando el componente
export default App;
