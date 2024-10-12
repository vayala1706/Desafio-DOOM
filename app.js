// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('input', (e) => {
  const nuevoRojo = e.target.value;
  textoRojo.textContent = nuevoRojo; // Actualiza el texto
  actualizarColor(nuevoRojo, inputVerde.value, inputAzul.value); // Actualiza el color
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('input', (e) => {
  const nuevoVerde = e.target.value;
  textoVerde.textContent = nuevoVerde; // Actualiza el texto
  actualizarColor(inputRojo.value, nuevoVerde, inputAzul.value); // Actualiza el color
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('input', (e) => {
  const nuevoAzul = e.target.value;
  textoAzul.textContent = nuevoAzul; // Actualiza el texto
  actualizarColor(inputRojo.value, inputVerde.value, nuevoAzul); // Actualiza el color
});
