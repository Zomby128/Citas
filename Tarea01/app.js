// Función para convertir pesos a dólares
function convertirPesosADolares(pesos) {
  // Factor de conversión (cambia según la tasa de cambio actual)
  const factorConversion = 0.059; // 1 Peso Mexicano (MXN) = 0.059 Dólares (USD)
  return pesos * factorConversion;
}

// Crear elementos HTML
const titulo = document.createElement('h1');
titulo.innerText = 'Convertidor de Pesos a Dólares';

const pesosInput = document.createElement('input');
pesosInput.type = 'number';
pesosInput.placeholder = 'Cantidad en Pesos';

const convertButton = document.createElement('button');
convertButton.innerText = 'Convertir';

const resultadoSpan = document.createElement('span');

// Agregar elementos al DOM
document.body.appendChild(titulo);
document.body.appendChild(pesosInput);
document.body.appendChild(convertButton);
document.body.appendChild(resultadoSpan);

// Agregar un evento click al botón de conversión
convertButton.addEventListener('click', function() {
  // Obtener el valor ingresado por el usuario en el input
  const cantidadPesos = parseFloat(pesosInput.value);

  // Verificar si la entrada es un número válido
  if (!isNaN(cantidadPesos)) {
      // Realizar la conversión
      const cantidadDolares = convertirPesosADolares(cantidadPesos);

      // Mostrar el resultado en la página
      resultadoSpan.textContent = cantidadDolares.toFixed(2) + ' dólares'; // Limitar a 2 decimales
  } else {
      // Si la entrada no es un número válido, mostrar un mensaje de error
      resultadoSpan.textContent = 'Ingrese una cantidad válida';
  }
});

