let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let dropdown = document.querySelector('.dropdown');
let dropdownMenu = document.querySelector('.dropdown-content');
let dropdownToggle = document.querySelector('.dropdown-toggle');

// Menu hamburguesa
menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

// Cierra el menú al hacer scroll
window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}

// Despliegue del submenú "Services" en móvil
dropdownToggle.addEventListener('click', (e) => {
   e.preventDefault();
   
   // Se activa en pantallas de 768px o menos
   if (window.innerWidth <= 768) {
      dropdownMenu.classList.toggle('show');
      dropdownMenu.classList.remove('modal-color');
   }
});

// Cierra el submenú al hacer clic fuera de él
document.addEventListener('click', (e) => {
   if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target) && window.innerWidth <= 768) {
      dropdown.classList.remove('show');
   }
});

