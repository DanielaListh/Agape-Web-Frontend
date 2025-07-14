//link para hacer funcionar al icono de hamburgesa para desplegar la barra de navegacion

  const hamburgerBtn = document.getElementById('menu-icono');
  const navLinks = document.getElementById('navLinks');

  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

