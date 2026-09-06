const LOCALSTORAGE = "seleccionServicios";

//auxilio.

function obtenerSeleccion() {
    const datos = localStorage.getItem(LOCALSTORAGE);
    return datos ? JSON.parse(datos) : [];
}


function guardarSeleccion(lista) {
    localStorage.setItem(LOCALSTORAGE, JSON.stringify(lista));
}



function agregarASeleccion(idServicio) {
    const lista = obtenerSeleccion();
    if (!lista.includes(idServicio)) {
        lista.push(idServicio);
        guardarSeleccion(lista);
        alert("Servicio agregado a tu selección.");
    } else {
        alert("Ese servicio ya está en tu selección.");
    }
}



function quitarDeSeleccion(idServicio) {
    let lista = obtenerSeleccion();
    lista = lista.filter(function (id) {
        return id !== idServicio;
    });
    guardarSeleccion(lista);
    mostrarSeleccion();
}








function mostrarSeleccion() {
    const contenedor = document.getElementById("lista-seleccion");
    const totalTexto = document.getElementById("total-seleccion");
    if (!contenedor) return;

    const idsSeleccionados = obtenerSeleccion();
    contenedor.innerHTML = "";

    if (idsSeleccionados.length === 0) {
        contenedor.innerHTML = "<p class='texto-parrafo'>Aún no has seleccionado servicios.</p>";
        if (totalTexto) totalTexto.textContent = "";
        return;
    }

    let total = 0;

    idsSeleccionados.forEach(function (id) {
        const servicio = servicios.find(function (s) { return s.id === id; });
        if (!servicio) return;

        total += servicio.precio;

        const fila = document.createElement("div");
        fila.className = "d-flex justify-content-between align-items-center border-bottom py-2";
        fila.innerHTML =
        "<span>" + servicio.nombre + " - $" + servicio.precio.toLocaleString("es-CL") + "</span>" +
        "<button class='btn btn-sm btn-outline-danger' onclick=\"quitarDeSeleccion('" + servicio.id + "')\">Quitar</button>";

        contenedor.appendChild(fila);
    });

    if (totalTexto) {
        totalTexto.textContent = "Total: $" + total.toLocaleString("es-CL");
    }
}
