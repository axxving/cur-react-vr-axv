export const GuardarEnStorage = (clave, elemento) => {
  // Obtener elementos que ya están en el localStorage
  let elementos = JSON.parse(localStorage.getItem(clave)) || [];

  // Añadir la nueva película al array
  elementos.push(elemento);

  // Guardar en el localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  // Devolver el array actualizado
  return elementos;
};
