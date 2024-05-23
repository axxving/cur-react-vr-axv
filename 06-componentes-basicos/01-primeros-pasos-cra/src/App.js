import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "1.70",
    grupo: "A+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de React!!!
        </p>

        <div className='componentes'>
          <hr />
          {/* Tercer componente */}
          <TercerComponente
            nombre = "Alejandro"
            apellido = "Hernandez"
            ficha = {ficha_medica}
          />
          <hr />
          {/* cargar mi primer componente en el curso */}
          <MiComponente />
          <hr />
          {/* Segundo componente */}
          <SegundoComponente />
          {/* Eventos componentes */}
          <hr />
          <EventosComponente />
        </div>

      </header>
    </div>
  );
}

export default App;