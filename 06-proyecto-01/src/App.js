import "./App.css";
import Agregar from "./components/Agregar";
import Buscador from "./components/Buscador";
import Footer from "./components/Footer";
import Listado from "./components/Listado";

function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section id="content" className="content">
        {/*Aqui va el listado de peliculas*/}
        <Listado />
      </section>

      <aside className="lateral">
        {/* Aqui va el buscador */}
        <Buscador />

        {/* Aqui va el componente de agregar */}
        <Agregar />
      </aside>

      {/* Aqui va el footer*/}
      <Footer />
    </div>
  );
}

export default App;
