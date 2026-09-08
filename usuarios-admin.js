
const usuariosIniciales = [
  { run: "111111111", 
    nombre: "Camila", 
    apellidos: "Soto Pérez", 
    correo: "camila.soto@correo.cl", 
    tipo: "Administrador" },
  { run: "222222222", 
    nombre: "Pedro", 
    apellidos: "Muñoz Rojas", 
    correo: "pedro.munoz@correo.cl", 
    tipo: "Recepcionista" },
  { run: "333333333", 
    nombre: "Javiera", 
    apellidos: "López Díaz", 
    correo: "javiera.lopez@correo.cl", 
    tipo: "Cliente" }
];




let usuarios = JSON.parse(localStorage.getItem("usuarios")) || usuariosIniciales;

function guardarUsuariosEnLocalStorage() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function mostrarTablaUsuarios() {
    const cuerpoTabla = document.getElementById("cuerpo-tabla-usuarios");
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = "";

    usuarios.forEach(function (usuario, indice) {
        const fila = document.createElement("tr");

        fila.innerHTML =
        "<td>" + usuario.run + "</td>" +
        "<td>" + usuario.nombre + " " + usuario.apellidos + "</td>" +
        "<td>" + usuario.correo + "</td>" +
        "<td>" + usuario.tipo + "</td>" +
        "<td>" +
            "<button class='btn btn-sm btn-outline-primary me-2' onclick='cargarUsuarioEnFormulario(" + indice + ")'>Editar</button>" +
            "<button class='btn btn-sm btn-outline-danger' onclick='eliminarUsuario(" + indice + ")'>Eliminar</button>" +
        "</td>";

        cuerpoTabla.appendChild(fila);
    });
}



function cargarUsuarioEnFormulario(indice) {
    const usuario = usuarios[indice];

    document.getElementById("edit-indice").value = indice;
    document.getElementById("edit-run").value = usuario.run;
    document.getElementById("edit-nombre").value = usuario.nombre;
    document.getElementById("edit-apellidos").value = usuario.apellidos;
    document.getElementById("edit-correo").value = usuario.correo;
    document.getElementById("edit-tipo").value = usuario.tipo;

    document.getElementById("edit-nombre").focus();
}

//67



function guardarUsuario(evento) {
    evento.preventDefault();

    const indice = document.getElementById("edit-indice").value;
    const run = document.getElementById("edit-run").value.trim();
    const nombre = document.getElementById("edit-nombre").value.trim();
    const apellidos = document.getElementById("edit-apellidos").value.trim();
    const correo = document.getElementById("edit-correo").value.trim();
    const tipo = document.getElementById("edit-tipo").value;
    const mensaje = document.getElementById("mensaje-admin-usuarios");

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (run === "" || !validarRun(run)) {
        mensaje.textContent = "El RUN es obligatorio y debe ser válido.";
        mensaje.className = "mensaje-error";
        return;
    }

    if (nombre === "" || apellidos === "") {
        mensaje.textContent = "Nombre y apellidos son obligatorios.";
        mensaje.className = "mensaje-error";
        return;
    }

    if (correo === "" || !formatoCorreo.test(correo)) {
        mensaje.textContent = "Ingresa un correo válido.";
        mensaje.className = "mensaje-error";
        return;
    }

    if (tipo === "") {
        mensaje.textContent = "Debes seleccionar un tipo de usuario.";
        mensaje.className = "mensaje-error";
        return;
    }

    const datosUsuario = {
        run: run,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        tipo: tipo
    };

    if (indice === "") {
        usuarios.push(datosUsuario);
    } else {
        usuarios[indice] = datosUsuario;
    }

    guardarUsuariosEnLocalStorage();
    mostrarTablaUsuarios();

    document.getElementById("form-usuario").reset();
    document.getElementById("edit-indice").value = "";

    mensaje.textContent = "Usuario guardado correctamente.";
    mensaje.className = "mensaje-ok";
}




function eliminarUsuario(indice) {
    const confirmar = confirm("¿Seguro que quieres eliminar este usuario?");

    if (!confirmar) return;

    usuarios.splice(indice, 1);

    guardarUsuariosEnLocalStorage();
    mostrarTablaUsuarios();

    document.getElementById("form-usuario").reset();
    document.getElementById("edit-indice").value = "";
}