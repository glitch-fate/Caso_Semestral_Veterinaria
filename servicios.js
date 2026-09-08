const serviciosIniciales = [
  // Consultas
  { id: "SV001", 
    categoria: "Consultas", 
    nombre: "Consulta general", 
    especie: "Perro / Gato", 
    duracion: "30 min", 
    precio: 15000, 
    imagen: "perrito1.jpg" 
},
  { id: "SV002", 
    categoria: "Consultas", 
    nombre: "Consulta urgencia", 
    especie: "Perro / Gato", 
    duracion: "30 min", 
    precio: 25000, 
    imagen: "perrito1.jpg" 
},
  { id: "SV003", 
    categoria: "Consultas", 
    nombre: "Control postoperatorio", 
    especie: "Perro / Gato", 
    duracion: "20 min", 
    precio: 10000, 
    imagen: "perrito1.jpg" 
},
  { id: "SV004", 
    categoria: "Consultas", 
    nombre: "Consulta ave / conejo", 
    especie: "Ave / Conejo", 
    duracion: "30 min", 
    precio: 18000, 
    imagen: "perrito1.jpg" 
},
  { id: "SV005", 
    categoria: "Consultas", 
    nombre: "Segunda opinión médica", 
    especie: "Todas", 
    duracion: "40 min", 
    precio: 20000, 
    imagen: "perrito1.jpg"
},

  // Vacunación
  { id: "VA001", 
    categoria: "Vacunación", 
    nombre: "Vacuna antirrábica canina", 
    especie: "Perro", 
    duracion: "10 min", 
    precio: 12000, 
    imagen: "perrito1.jpg" 
},
  { id: "VA002", 
    categoria: "Vacunación",
    nombre: "Vacuna sextuple canina", 
    especie: "Perro", 
    duracion: "10 min", 
    precio: 18000, 
    imagen: "perrito1.jpg" 
},
  { id: "VA003", 
    categoria: "Vacunación", 
    nombre: "Vacuna bivalente felina", 
    especie: "Gato", 
    duracion: "10 min", 
    precio: 15000, 
    imagen: "perrito1.jpg" 
},
  { id: "VA004", 
    categoria: "Vacunación", 
    nombre: "Vacuna triple felina",
    especie: "Gato", 
    duracion: "10 min", 
    precio: 17000, 
    imagen: "perrito1.jpg" 
},
  { id: "VA005", 
    categoria: "Vacunación", 
    nombre: "Vacuna Bordetella canina", 
    especie: "Perro",
    duracion: "10 min", 
    precio: 14000, 
    imagen: "perrito1.jpg" 
},
  { id: "VA006", 
    categoria: "Vacunación", 
    nombre: "Vacuna antirrábica felina", 
    especie: "Gato", 
    duracion: "10 min", 
    precio: 12000, 
    imagen: "perrito1.jpg" 
},

  // Cirugía
  { id: "CI001", 
    categoria: "Cirugía", 
    nombre: "Esterilización hembra canina", 
    especie: "Perra", 
    duracion: "90 min", 
    precio: 80000, 
    imagen: "perrito1.jpg" 
},
  { id: "CI002", 
    categoria: "Cirugía", 
    nombre: "Esterilización macho canino", 
    especie: "Perro", 
    duracion: "60 min", 
    precio: 60000, 
    imagen: "perrito1.jpg" 
},
  { id: "CI003", 
    categoria: "Cirugía", 
    nombre: "Esterilización hembra felina", 
    especie: "Gata", 
    duracion: "60 min", 
    precio: 65000, 
    imagen: "perrito1.jpg" 
},
  { id: "CI004", 
    categoria: "Cirugía", 
    nombre: "Esterilización macho felino", 
    especie: "Gato", 
    duracion: "45 min", 
    precio: 50000, 
    imagen: "perrito1.jpg" 
},
  { id: "CI005", 
    categoria: "Cirugía", 
    nombre: "Extirpación de tumor cutáneo", 
    especie: "Perro / Gato", 
    duracion: "60 min", 
    precio: 120000, 
    imagen: "perrito1.jpg" 
},
  { id: "CI006", 
    categoria: "Cirugía", 
    nombre: "Cesárea de urgencia", 
    especie: "Perra / Gata", 
    duracion: "120 min", 
    precio: 180000, 
    imagen: "perrito1.jpg" 
},

  // Desparasitación
  { id: "DE001", 
    categoria: "Desparasitación", 
    nombre: "Desparasitación interna pequeños (<10 kg)", 
    especie: "Perro", 
    duracion: "5 min", 
    precio: 8000, 
    imagen: "perrito1.jpg" 
},
  { id: "DE002", 
    categoria: "Desparasitación", 
    nombre: "Desparasitación interna medianos (10-25 kg)", 
    especie: "Perro", 
    duracion: "5 min", 
    precio: 9500,
    imagen: "perrito1.jpg" 
},
  { id: "DE003", 
    categoria: "Desparasitación", 
    nombre: "Desparasitación interna grandes (>25 kg)", 
    especie: "Perro", 
    duracion: "5 min", 
    precio: 11000, 
    imagen: "perrito1.jpg" 
},
  { id: "DE004", 
    categoria: "Desparasitación", 
    nombre: "Desparasitación interna felina", 
    especie: "Gato", 
    duracion: "5 min", 
    precio: 8000, 
    imagen: "perrito1.jpg" 
},
  { id: "DE005", 
    categoria: "Desparasitación", 
    nombre: "Antiparasitario externo (pipeta)", 
    especie: "Perro / Gato", 
    duracion: "5 min", 
    precio: 7500, 
    imagen: "perrito1.jpg" 
},

  // Exámenes
  { id: "EX001", 
    categoria: "Exámenes", 
    nombre: "Hemograma completo", 
    especie: "Perro / Gato", 
    duracion: "30 min", 
    precio: 22000, 
    imagen: "perrito1.jpg" 
},
  { id: "EX002", 
    categoria: "Exámenes", 
    nombre: "Perfil bioquímico completo", 
    especie: "Perro / Gato", 
    duracion: "30 min", 
    precio: 35000, 
    imagen: "perrito1.jpg" 
},
  { id: "EX003", 
    categoria: "Exámenes", 
    nombre: "Radiografía (1 proyección)", 
    especie: "Perro / Gato", 
    duracion: "20 min", 
    precio: 28000, 
    imagen: "perrito1.jpg" 
},
  { id: "EX004", 
    categoria: "Exámenes",
    nombre: "Ecografía abdominal", 
    especie: "Perro / Gato", 
    duracion: "30 min", 
    precio: 45000, 
    imagen: "perrito1.jpg" 
},
  { id: "EX005", 
    categoria: "Exámenes", 
    nombre: "Test de leishmaniasis", 
    especie: "Perro", 
    duracion: "20 min", 
    precio: 18000, 
    imagen: "perrito1.jpg" 
},

  // Otros
  { id: "OT001", 
    categoria: "Otros", 
    nombre: "Corte de uñas", 
    especie: "Perro / Gato", 
    duracion: "15 min", 
    precio: 5000, 
    imagen: "perrito1.jpg" 
},
  { id: "OT002", 
    categoria: "Otros",
    nombre: "Limpieza dental", 
    especie: "Perro / Gato", 
    duracion: "45 min", 
    precio: 55000, 
    imagen: "perrito1.jpg" 
},
  { id: "OT003", 
    categoria: "Otros", 
    nombre: "Microchip identificación", 
    especie: "Perro / Gato", 
    duracion: "10 min", 
    precio: 15000, 
    imagen: "perrito1.jpg" 
},
  { id: "OT004", 
    categoria: "Otros", 
    nombre: "Hospitalización (por día)", 
    especie: "Perro / Gato", 
    duracion: "24 h", 
    precio: 30000, 
    imagen: "perrito1.jpg" 
}
];

// esto pq me A B U R R I de que no siempre se ponen las fotos OK.
// aguante perrito1
function manejarErrorImagen(imgElemento) {
    imgElemento.onerror = null;
    imgElemento.src = "perrito1.jpg";
}

//servicio es diferente de servicios (serviciosIniciales)
// espauneador masivo
function pintarServicios(listaServicios, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    contenedor.innerHTML = "";

    listaServicios.forEach(function (servicio) {
        const columna = document.createElement("div");
        columna.className = "col-md-3 mb-4";

        columna.innerHTML =
        "<div class='tarjeta-item'>" +
            "<img src='" + servicio.imagen + "' alt='" + servicio.nombre + "' " +
            "onerror=\"manejarErrorImagen(this, '" + servicio.nombre + "')\">" +
            "<div class='cuerpo-tarjeta'>" +
            "<p class='texto-categoria'>" + servicio.categoria + "</p>" +
            "<h3 class='h6 mb-1'>" + servicio.nombre + "</h3>" +
            "<p class='texto-parrafo mb-1'>" + servicio.especie + " · " + servicio.duracion + "</p>" +
            "<p class='precio-servicio'>$" + servicio.precio.toLocaleString("es-CL") + "</p>" +
            "<a class='btn btn-outline-primary btn-sm me-2' href='servicio-detalle.html?id=" + servicio.id + "'>Ver detalle</a>" +
            "<button class='btn btn-outline-secondary btn-sm' onclick=\"agregarASeleccion('" + servicio.id + "')\">Agregar</button>" +
            "</div>" +
        "</div>";
        contenedor.appendChild(columna);
    });
}

function mostrarCatalogo() {
    pintarServicios(serviciosIniciales, "lista-servicios");
}

function mostrarDestacados(cantidad) {
    pintarServicios(servicios.slice(0, cantidad), "lista-servicios");
}

function filtrarPorCategoria(categoria) {
    const listaFiltrada = categoria === "Todos"
        ? serviciosIniciales
        : serviciosIniciales.filter(function (s) { return s.categoria === categoria; });

    pintarServicios(listaFiltrada, "lista-servicios");

    document.querySelectorAll(".filtro-categoria").forEach(function (enlace) {
        enlace.classList.remove("filtro-activo");
    });
    const activo = document.getElementById("filtro-" + categoria);
    if (activo) activo.classList.add("filtro-activo");
}
