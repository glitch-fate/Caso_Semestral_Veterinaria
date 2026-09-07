document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener la sesión activa desde el localStorage
  const usuarioSesion = JSON.parse(localStorage.getItem("usuarioSesion"));

  // 2. Buscar el contenedor de botones de Login/Registro en el Navbar
  const contenedorBotones = document.querySelector(".navbar .d-flex.gap-2");

  if (usuarioSesion && contenedorBotones) {
    // Si hay un usuario logueado, reemplazamos los botones por su nombre y un botón de Salir
    const esAdmin = usuarioSesion.rol === "admin";
    
    contenedorBotones.innerHTML = `
      <span class="navbar-text me-2 fw-bold ${esAdmin ? 'text-danger' : 'text-primary'}">
        ${esAdmin ? 'Admin:' : '👤'} ${usuarioSesion.nombre}
      </span>
      <button id="btn-logout" class="btn btn-outline-danger btn-sm fw-bold">
        Cerrar Sesión
      </button>
    `;

    // 3. Evento para cerrar sesión
    document.getElementById("btn-logout").addEventListener("click", () => {
      localStorage.removeItem("usuarioSesion");
      window.location.reload(); // Recarga la página para actualizar la vista
    });
  }
});