export const GuardarEnStorage = (clave, elemento) => {
  // Conseguir los elementos que ya se tiene en el localstorage
  let elementos = JSON.parse(localStorage.getItem(clave));

  // Comprobar si es un array
  if (Array.isArray(elementos)) {
    // Agregar dentro del array un elemento nuevo
    elementos.push(elemento);
  } else {
    // Generar un array con la nueva peli
    elementos = [elemento];
  }

  // Guardar en el localstorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  // devolver objeto guardado
  return elemento;
};
