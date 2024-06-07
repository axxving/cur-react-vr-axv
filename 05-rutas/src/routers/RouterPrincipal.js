import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
};
