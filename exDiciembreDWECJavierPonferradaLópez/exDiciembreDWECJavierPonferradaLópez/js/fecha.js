// Javier Ponferrada López
{
    let btnCerrar;
    let parrafoFechaActual;
    let parrafoFechaFinTrimestre;
    let arrayDiasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let arraMesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let fechaActual;
    let fechaFinTrimestre;
    let diasRestantes;

    let mostrarFechaActual = function () {
        fechaActual = new Date();
        parrafoFechaActual.innerText = 'Hoy es ' + arrayDiasSemana[fechaActual.getDay()] + ', ' + fechaActual.getDate() + ' de ' + arraMesAnio[fechaActual.getMonth()] + ' de ' + fechaActual.getFullYear();
    };

    let mostrarFechaFinTrimestre = function () {
        fechaFinTrimestre = new Date(fechaActual.getFullYear(), 11, 22);
        parrafoFechaFinTrimestre.innerText += ' ' + arrayDiasSemana[fechaFinTrimestre.getDay()] + ', ' + fechaFinTrimestre.getDate() + ' de ' + arraMesAnio[fechaFinTrimestre.getMonth()] + ' de ' + fechaFinTrimestre.getFullYear();

        diasRestantes = Math.trunc((((((fechaFinTrimestre.getTime() - fechaActual.getTime()) / 1000) / 60) / 60) / 24));
        parrafoFechaFinTrimestre.innerText += '\nY solo quedan ' + diasRestantes + ' dias';
    };

    let cerrarVentana = function () {
        let msgVentanaCerrada = window.opener.document.getElementById('msgVentanaCerrada');
        msgVentanaCerrada.innerHTML = 'Ventana cerrada';
        window.close();
    };

    let init = function () {
        parrafoFechaActual = document.getElementById('parrafoFechaActual');
        mostrarFechaActual();

        parrafoFechaFinTrimestre = document.getElementById('parrafoFechaFinTrimestre');
        mostrarFechaFinTrimestre();

        btnCerrar = document.getElementById('btnCerrarVentana');
        btnCerrar.addEventListener('click', cerrarVentana);

    };
    window.onload = init;
}