
window.addEventListener("load", () =>{
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });


  
let desplazamiento = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const slideWidth = slides[0].clientWidth; // Obtiene el ancho de una imagen
  const newTransformValue = -(index * slideWidth); // Calcula el valor de desplazamiento
  document.querySelector(".carrusel").style.transform = `translateX(${newTransformValue}px)`;
}

document.querySelector(".next").addEventListener("click", () => {
  if (desplazamiento < slides.length - 4) {
    desplazamiento += 1; // Desplazar una imagen a la derecha
  } else {
    desplazamiento = 0; // Volver al inicio
  }
  showSlide(desplazamiento);
});

document.querySelector(".prev").addEventListener("click", () => {
  if (desplazamiento > 0) {
    desplazamiento -= 1; // Desplazar una imagen a la izquierda
  } else {
    desplazamiento = slides.length - 4; // Volver al final
  }
  showSlide(desplazamiento);
});

showSlide(desplazamiento);



const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel-image');
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');
  let currentIndex = 0;

  function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${width * currentIndex}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Para que se ajuste automáticamente si cambian el tamaño de la ventana
  window.addEventListener('resize', updateCarousel);