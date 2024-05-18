import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de React!!!
        </p>

        <div className='componentes'>
          <hr />
          {/* cargar mi primer componente en el curso */}
          <MiComponente />
          <hr />
          {/* Segundo componente */}
          <SegundoComponente />
        </div>

      </header>
    </div>
  );
}

export default App;