import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Inicio } from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import { Error } from "../components/Error";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <div>
        <h2>Barra de navegacion</h2>

        <hr />

        <nav>
          <li>
            <NavLink 
                to="/inicio"
                className={({isActive}) => isActive ? 'active' : ''}
            >Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
                to="/articulos"
                className={({isActive}) => isActive ? 'active' : ''}
            >Articulos
            </NavLink>
          </li>
          <li>
            <NavLink 
                to="/contacto"
                className={({isActive}) => isActive ? 'active' : ''}
            >Contacto
            </NavLink>
          </li>
        </nav>
      </div>

      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
