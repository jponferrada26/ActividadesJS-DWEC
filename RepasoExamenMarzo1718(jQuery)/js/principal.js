{

    let abrirVentanaEj1 = function (event) {
        event.preventDefault();
        let nuevaVentana = window.open('', '');
        nuevaVentana.document.write(`
            <head>
                <meta charset="UTF-8"/>
                <script src="js/jquery-3.3.1.min.js"></script>
                <script src="js/fecha.js" charset="UTF-8"></script>
                <link rel="stylesheet" href="css/styles.css">
                <title>JavierPonferradaLópez</title>
            </head>
        
            <main>
                <h1>Javier Ponferrada López</h1>
                <p id="resultadoHoy">Hoy es </p>
                <p id="resultadoFinTrimestre">El fin del trimestre será </p>
                <p id="resultadoDiff">Y solo quedan </p>
                <button id="btnCerrarFecha">Cerrar</button>
            </main>
        `);
        nuevaVentana.document.close();
        $('#statusWindow').text('Ventana abierta');
    };

    let abrirVentanaEj2 = function (event) {
        event.preventDefault();
        let nuevaVentana = window.open('formulario.html', '');
    };

    let init = function () {
        $('#btnEje1').on('click', abrirVentanaEj1);
        $('#btnEje2').on('click', abrirVentanaEj2);
    };
    $(init);
}