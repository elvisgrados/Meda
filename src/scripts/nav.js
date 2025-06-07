 const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active'); // <- esto activa la animación de la X
    });

    let lastScroll = 0;
const navbar = document.getElementById('Navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 60) {
    // Bajando
    navbar.classList.add('hide');
  } else {
    // Subiendo
    navbar.classList.remove('hide');
  }

  lastScroll = currentScroll;
});
