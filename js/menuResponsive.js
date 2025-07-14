//link para hacer funcionar al icono de hamburgesa para desplegar la barra de navegacion


const menuIcon = document.getElementById("menu-icono");
const navLinks = document.getElementById("navLinks");

// Mostrar/ocultar menú al hacer clic en el ícono
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Cerrar menú al hacer clic en una opción
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    });
});


