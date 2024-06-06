import React, { useState } from "react";
import { Header } from "./components/Header";
import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Add } from "./components/Add";
import { Footer } from "./components/Footer";

export const App = () => {
  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <div className="layout">
        {/* Header */}
        <Header />

        <nav className="nav">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Peliculas</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>

        <section id="content" className="content">
          {/* Listado */}
          <Listado
            listadoState={listadoState}
            setListadoState={setListadoState}
          />
        </section>

        <aside className="lateral">
          {/* Buscador */}
          <Buscador />

          {/* Add */}
          <Add setListadoState={setListadoState}/>
        </aside>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
