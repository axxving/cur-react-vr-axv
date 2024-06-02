import React from "react";

export const Buscador = () => {
  return (
    <>
      <div class="search">
        <h3 class="title">Buscador</h3>
        <form>
          <input type="text" id="search_field" />
          <button id="search">Buscar</button>
        </form>
      </div>
    </>
  );
};
