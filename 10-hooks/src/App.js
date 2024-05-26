import logo from './logo.svg';
import './App.css';
import { Practica } from './components/Practica';
import { useState } from 'react';

function App() {

  const [year, setYear] = useState(new Date().getFullYear());

  const definirYear = () => {
    setYear(
      new Date().getFullYear()
    );
  }

  const lastYear = () => {
    setYear(year - 1);
  }

  const proximoYear = () => {
    setYear(year + 1);
  }

  const yearEscrito = (e) => {
    setYear(Number(e.target.value));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>El estado en React - Hook useState</h1>
        <MiPrimerEstado /> */}
        <Practica
          yearEscrito={yearEscrito}
          year={year} 
          definirYear={definirYear} 
          lastYear={lastYear} 
          proximoYear={proximoYear}
        />
      </header>
    </div>
  );
}

export default App;