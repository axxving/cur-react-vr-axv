import React from 'react';
import {Header} from './components/Header';
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';
import { Add } from './components/Add';
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
       <div className="layout">

        {/* Header */}
        <Header />

        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <section id="content" className="content">

            {/* Listado */}
            <Listado />

        </section>

        <aside className="lateral">
            
            {/* Buscador */}
            <Buscador />

            {/* Add */}
            <Add />
        </aside>

        {/* Footer */}
        <Footer />
    </div>
    </>
  )
}
