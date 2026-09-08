let serviciosAdmin = JSON.parse(localStorage.getItem("servicios")) || serviciosIniciales;

function guardarServiciosEnLocalStorage() {
  localStorage.setItem("servicios", JSON.stringify(serviciosAdmin));
}

function mostrarTablaServicios() {
  const cuerpoTabla = document.getElementById("cuerpo-tabla-servicios");
  if (!cuerpoTabla) return;

  cuerpoTabla.innerHTML = "";

  serviciosAdmin.forEach(function (servicio) {
    const fila = document.createElement("tr");

    fila.innerHTML =
      "<td>" + servicio.id + "</td>" +
      "<td>" + servicio.nombre + "</td>" +
      "<td>" + servicio.categoria + "</td>" +
      "<td>$" + servicio.precio.toLocaleString("es-CL") + "</td>" +
      "<td>" +
        "<button class='btn btn-sm btn-outline-primary' onclick=\"cargarServicioEnFormulario('" + servicio.id + "')\">Editar</button>" +
      "</td>";

    cuerpoTabla.appendChild(fila);
  });
}





function cargarServicioEnFormulario(id) {
  const servicio = serviciosAdmin.find(function (s) {
    return s.id === id;
  });

  if (!servicio) return;

  document.getElementById("edit-id").value = servicio.id;
  document.getElementById("edit-nombre").value = servicio.nombre;
  document.getElementById("edit-categoria").value = servicio.categoria;
  document.getElementById("edit-precio").value = servicio.precio;

  document.getElementById("edit-nombre").focus();
}






function guardarEdicionServicio(evento) {
  evento.preventDefault();

  const id = document.getElementById("edit-id").value;
  const nombre = document.getElementById("edit-nombre").value.trim();
  const categoria = document.getElementById("edit-categoria").value.trim();
  const precio = Number(document.getElementById("edit-precio").value);
  const mensaje = document.getElementById("mensaje-admin-servicios");

  const servicio = serviciosAdmin.find(function (s) {
    return s.id === id;
  });

  if (!servicio) {
    mensaje.textContent = "Selecciona primero un servicio de la tabla.";
    mensaje.className = "mensaje-error";
    return;
  }

  if (nombre === "") {
    mensaje.textContent = "El nombre del servicio es obligatorio.";
    mensaje.className = "mensaje-error";
    return;
  }

  if (categoria === "") {
    mensaje.textContent = "La categoría es obligatoria.";
    mensaje.className = "mensaje-error";
    return;
  }

  if (precio <= 0 || isNaN(precio)) {
    mensaje.textContent = "El precio debe ser mayor a 0.";
    mensaje.className = "mensaje-error";
    return;
  }

  servicio.nombre = nombre;
  servicio.categoria = categoria;
  servicio.precio = precio;

  guardarServiciosEnLocalStorage();
  mostrarTablaServicios();

  mensaje.textContent = "Servicio actualizado correctamente.";
  mensaje.className = "mensaje-ok";
}