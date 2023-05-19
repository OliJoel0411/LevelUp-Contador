let contador = 0;
const Elementos = document.getElementById('contador');

function actualizarContador() {
  Elementos.textContent = contador;

  if (contador > 0) {
    Elementos.classList.remove('cero', 'negativo');
    Elementos.classList.add('positivo');
  } else if (contador < 0) {
    Elementos.classList.remove('cero', 'positivo');
    Elementos.classList.add('negativo');
  } else {
    Elementos.classList.remove('positivo', 'negativo');
    Elementos.classList.add('cero');
  }
}

function decremento() {
  contador--;
  actualizarContador();
}

function reinicio() {
  contador = 0;
  actualizarContador();
}

function incremento() {
  contador++;
  actualizarContador();
}

document.getElementById('decremento').addEventListener('click', decremento);
document.getElementById('reiniciar').addEventListener('click', reinicio);
document.getElementById('incrementar').addEventListener('click', incremento);

actualizarContador();
