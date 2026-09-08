document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener la sesión activa desde el localStorage
  const usuarioSesion = JSON.parse(localStorage.getItem("usuarioSesion"));

  // 2. Buscar elementos clave en el Navbar
  const navbar = document.querySelector("nav.navbar");
  const contenedorBotones = document.querySelector(".navbar .d-flex.gap-2");
  const navbarNav = document.querySelector("#navbarNav .navbar-nav");

  if (usuarioSesion && contenedorBotones) {
    const esAdmin = usuarioSesion.rol === "admin";

    // --- SI ES ADMIN: Estilar navbar y agregar enlace en menú público ---
    if (esAdmin) {
      if (navbar) {
        navbar.classList.remove("bg-body-tertiary");
        navbar.classList.add("bg-dark", "navbar-dark");
      }

      if (navbarNav) {
        const liAdmin = document.createElement("li");
        liAdmin.className = "nav-item";
        liAdmin.innerHTML = `
          <a class="nav-link text-warning fw-bold" href="index-admin.html">
             Panel Admin
          </a>
        `;
        navbarNav.appendChild(liAdmin);
      }
    }

    // --- RENDERIZAR BOTÓN SITIO PÚBLICO + USUARIO + CERRAR SESIÓN ---
    contenedorBotones.innerHTML = `
      <a href="index.html" class="btn btn-outline-light btn-sm fw-bold px-3 d-flex align-items-center gap-1">
        <span></span> Ver Sitio Público
      </a>
      <span class="navbar-text ms-2 me-2 fw-bold ${esAdmin ? 'text-warning' : 'text-primary'}">
        ${usuarioSesion.nombre}
      </span>
      <button id="btn-logout" class="btn btn-outline-danger btn-sm fw-bold">
        Cerrar Sesión
      </button>
    `;

    // 3. Evento para cerrar sesión
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        localStorage.removeItem("usuarioSesion");
        window.location.reload();
      });
    }
  }
});