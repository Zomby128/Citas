const button = document.querySelector('.boton button');
const mensajeDiv = document.getElementById('mensaje');

function handleEvent(e) {
  e.preventDefault();

  const userName = document.getElementById('userName').value;
  const userPass = document.getElementById('pass').value;

  if (userName === '' || userPass === '') {
    mostrarMensaje('Por favor, completa ambos campos.');
  } else if (userPass.length >= 4) {
    mostrarMensaje('La contraseña debe ser de 5 caracteres o mas.');
  } else {
    mostrarMensaje(`Nombre de usuario: ${userName}<br>Contraseña de usuario: ${userPass}`);
  }
}

function mostrarMensaje(mensaje) {
  mensajeDiv.innerHTML = mensaje;
}

button.addEventListener('click', handleEvent, false);
