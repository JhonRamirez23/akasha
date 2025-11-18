const carousel = document.getElementById("testimonial-carousel");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

// Distancia del scroll (ajusta si tus cajas son más anchas)
const scrollAmount = carousel.clientWidth * 0.85;

leftBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Auto slide cada 5 segundos
let autoSlide = setInterval(() => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // Si llega al final, vuelve al inicio
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
  }
}, 5000);

// Pausar el auto-slide al pasar el mouse (opcional)
carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    if (
      carousel.scrollLeft + carousel.clientWidth >=
      carousel.scrollWidth - 10
    ) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 5000);
});
