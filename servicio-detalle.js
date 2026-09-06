//el espauneador. Este sujeto trae la pipol del servicio para ponerlo en el detail uf

function mostrarDetalleServicio() {
  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get("id");

  const servicio = servicios.find(function (s) { return s.id === id; });
  const contenedor = document.getElementById("detalle-servicio");
  if (!contenedor) return;

  if (!servicio) {
    contenedor.innerHTML = "<p class='texto-parrafo'>Servicio no encontrado.</p>";
    return;
  }

  contenedor.innerHTML =
    "<div class='row'>" +
      "<div class='col-md-5'>" +
        "<img src='" + servicio.imagen + "' class='img-fluid' alt='" + servicio.nombre + "' " +
          "onerror=\"manejarErrorImagen(this, '" + servicio.nombre + "')\">" +
      "</div>" +
      "<div class='col-md-7'>" +
        "<h1 class='titulo-principal'>" + servicio.nombre + "</h1>" +
        "<p class='texto-parrafo'><strong>Categoría:</strong> " + servicio.categoria + "</p>" +
        "<p class='texto-parrafo'><strong>Especie:</strong> " + servicio.especie + "</p>" +
        "<p class='texto-parrafo'><strong>Duración aproximada:</strong> " + servicio.duracion + "</p>" +
        "<p class='precio-servicio fs-4'>$" + servicio.precio.toLocaleString("es-CL") + "</p>" +
        "<button class='btn btn-primary' onclick=\"agregarASeleccion('" + servicio.id + "')\">Agregar a mi selección</button>" +
      "</div>" +
    "</div>";
}
