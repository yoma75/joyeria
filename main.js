// scrollHeight: abarca desde el header hasta el footer de la página
// innerHeight: abarca el alto de la pantalla del dispositivo

const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
  const anchoFondo = (window.pageYOffset / altura) * 300; 
  if(anchoFondo <= 100) {
    fondo.style.width = anchoFondo + '%';
  }
}
