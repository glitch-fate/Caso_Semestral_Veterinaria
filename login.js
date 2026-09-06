function validarLogin(evento) {
    evento.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value.trim();
    const mensaje = document.getElementById("mensaje-login");

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "" || correo.length > 100 || !formatoCorreo.test(correo)) {
        mensaje.textContent = "Ingresa un correo válido (máximo 100 caracteres).";
        mensaje.className = "mensaje-error";
        return;
    }

    if (clave === "" || clave.length < 4 || clave.length > 10) {
        mensaje.textContent = "La contraseña es obligatoria y debe tener entre 4 y 10 caracteres.";
        mensaje.className = "mensaje-error";
        return;
    }

    mensaje.textContent = "Inicio de sesión válido (simulado, sin conexión a base de datos).";
    mensaje.className = "mensaje-ok";
}
