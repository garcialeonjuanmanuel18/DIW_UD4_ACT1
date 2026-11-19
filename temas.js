// Ayuda proporcionada: no hay que modificar ni explicar este JavaScript.
document.querySelectorAll('[data-tema]').forEach(boton => boton.addEventListener('click', () => {
 const hojas = document.querySelectorAll('link[rel~="stylesheet"][title]');
 const titulo = boton.dataset.tema;
 if (![...hojas].some(hoja => hoja.title === titulo)) {
   document.getElementById('estado').textContent = 'Completa primero los enlaces de A03.';
   return;
 }
 hojas.forEach(hoja => { hoja.disabled = hoja.title !== titulo; });
 document.getElementById('estado').textContent = 'Presentación: ' + titulo;
}));