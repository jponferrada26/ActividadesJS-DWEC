// Javier Ponferrada López
{
    let btn_ejercicio1;
    let btn_ejercicio2;
    let msgVentanaCerrada;

    let generarDocumentoEjercicio1 = function () {
        let ventanaNueva = window.open('', '');
        ventanaNueva.document.write('<html><head>' +
            '<meta charset="UTF-8"/> <script src="js/fecha.js" charset="UTF-8"></script> <title>JavierPonferradaLópez</title><link rel="stylesheet" href="css/style.css">' +
            '</head>' +
            '<body>' +
            '<h1>Javier Ponferrada López</h1>' +
            '<p id="parrafoFechaActual"></p>' +
            '<p id="parrafoFechaFinTrimestre">El fin de trimestre será </p>' +
            '<button id="btnCerrarVentana">Cerrar</button>' +
            '</body>'+
            '</html>'
        );
        ventanaNueva.document.close();
        msgVentanaCerrada.innerHTML = 'Ventana abierta';
    };

    let crearVentanaEjercicio2 = function () {
        let nuevaVentana = window.open('formulario.html','');
    };

    let init = function () {
        btn_ejercicio1 = document.getElementById('btn_ejercicio1');
        btn_ejercicio1.addEventListener('click', generarDocumentoEjercicio1);

        btn_ejercicio2 = document.getElementById('btn_ejercicio2');
        btn_ejercicio2.addEventListener('click', crearVentanaEjercicio2);

        msgVentanaCerrada = document.getElementById('msgVentanaCerrada');
    };

    window.onload = init;
}