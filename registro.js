function validarRegistro(evento) {
    evento.preventDefault();

    const run = document.getElementById("run").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tipoUsuario = document.getElementById("tipoUsuario").value;
    const direccion = document.getElementById("direccion").value.trim();
    const mensaje = document.getElementById("mensaje-registro");

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (run === "" || !validarRun(run)) {
        mensaje.textContent = "El RUN es obligatorio y debe ser válido (sin puntos ni guion).";
        mensaje.className = "mensaje-error";
        return;
    }

    if (nombre === "" || nombre.length > 50) {
        mensaje.textContent = "El nombre es obligatorio y debe tener máximo 50 caracteres.";
        mensaje.className = "mensaje-error";
        return;
    }

    if (apellidos === "" || apellidos.length > 100) {
        mensaje.textContent = "Los apellidos son obligatorios y deben tener máximo 100 caracteres.";
        mensaje.className = "mensaje-error";
        return;
    }

    if (correo === "" || correo.length > 100 || !formatoCorreo.test(correo)) {
        mensaje.textContent = "Ingresa un correo válido (máximo 100 caracteres).";
        mensaje.className = "mensaje-error";
        return;
    }

    if (tipoUsuario === "") {
        mensaje.textContent = "Debes seleccionar un tipo de usuario.";
        mensaje.className = "mensaje-error";
        return;
    }

    if (direccion === "" || direccion.length > 300) {
        mensaje.textContent = "La dirección es obligatoria y debe tener máximo 300 caracteres.";
        mensaje.className = "mensaje-error";
        return;
    }

    mensaje.textContent = "¡Registro exitoso! (simulado, sin conexión a base de datos).";
    mensaje.className = "mensaje-ok";
    document.getElementById("form-registro").reset();
}
