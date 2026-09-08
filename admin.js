document.addEventListener("DOMContentLoaded", () => {
  const usuarioSesion = JSON.parse(localStorage.getItem("usuarioSesion"));

  if (!usuarioSesion || usuarioSesion.rol !== "admin") {
    window.location.href = "../login.html";
  }
});

//vale chaval donde mas lo metia :,v