export const GuardarEnStorage = (clave, elemento) => {
  // Conseguir los elementos que ya tenemos en el local storage
  let elementos = JSON.parse(localStorage.getItem(clave));
  console.log(elementos);
  // Comprobar si es un array
  if (Array.isArray(elementos)) {
    // Agregar un elemento nuevo al array
    elementos.push(elemento);
  } else {
    // Array con la nueva peli
    elementos = [elemento];
  }

  // Guardar en el local storage
  localStorage.setItem(clave, JSON.stringify(elementos));

  // Devolver un objeto
  return elemento;
};
