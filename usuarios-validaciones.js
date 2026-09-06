function validarRun(run) {
    run = run.trim().toUpperCase();
    if (!/^[0-9]+[0-9K]$/.test(run)) return false;

    const cuerpo = run.slice(0, -1);
    const dv = run.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i], 10) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = 11 - (suma % 11);
    let dvEsperado = resto.toString();
    if (resto === 11) dvEsperado = "0";
    if (resto === 10) dvEsperado = "K";

    return dv === dvEsperado;
}
