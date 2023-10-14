const carrusel = document.querySelector(".carrusel_items");
const intervalDuration = 10; 
let intervalo = null;
let step = 1;
carrusel.style.width = "50%";


const moveCarousel = () => {
  carrusel.scrollLeft = carrusel.scrollLeft + step;
  if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.clientWidth) {
    carrusel.scrollLeft = 0;
  }
};

const startCarousel = () => {
  intervalo = setInterval(moveCarousel, intervalDuration);
};

const stopCarousel = () => {
  clearInterval(intervalo);
};

startCarousel();


carrusel.addEventListener("mouseenter", stopCarousel);

carrusel.addEventListener("mouseleave", startCarousel);

 