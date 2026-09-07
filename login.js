function validarLogin(evento) {
    evento.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value.trim();
    const mensaje = document.getElementById("mensaje-login");

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Validaciones básicas de formato
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

    // 2. Definición de credenciales de prueba
    const usuarioAdmin = { correo: "admin@sanmarcos.cl", clave: "admin123", rol: "admin", nombre: "Administrador" };
    const usuarioCliente = { correo: "cliente@sanmarcos.cl", clave: "user123", rol: "cliente", nombre: "Juan Pérez" };

    // 3. Comprobación de credenciales y guardado en localStorage
    if (correo === usuarioAdmin.correo && clave === usuarioAdmin.clave) {
        
        // Guardamos la sesión del Admin
        localStorage.setItem("usuarioSesion", JSON.stringify(usuarioAdmin));
        
        mensaje.textContent = "¡Bienvenido Administrador! Redirigiendo...";
        mensaje.className = "mensaje-ok";

        // Redirección (opcional)
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 1500);

    } else if (correo === usuarioCliente.correo && clave === usuarioCliente.clave) {

        // Guardamos la sesión del Usuario Normal
        localStorage.setItem("usuarioSesion", JSON.stringify(usuarioCliente));

        mensaje.textContent = "¡Bienvenido Cliente! Redirigiendo...";
        mensaje.className = "mensaje-ok";

        // Redirección (opcional)
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    } else {
        mensaje.textContent = "Correo o contraseña incorrectos.";
        mensaje.className = "mensaje-error";
    }
}