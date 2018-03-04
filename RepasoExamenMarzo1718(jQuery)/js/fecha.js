{
    /**
     * @author Javier Ponferrada López
     */

    $(function () {
        let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let dateTime = new Date();
        let finTrimestre = new Date('12/22/2018');
        let diffmilisegundos = (finTrimestre.getTime() - dateTime.getTime());
        let diffDias = Math.round(((((diffmilisegundos / 1000) / 60) / 60) / 24));

        $('#resultadoHoy').append(diasSemana[dateTime.getDay()] + ', ' + dateTime.getDate() + ' de ' + meses[dateTime.getMonth()] + ' de ' + dateTime.getFullYear());
        $('#resultadoFinTrimestre').append(diasSemana[finTrimestre.getDay()] + ', ' + finTrimestre.getDate() + ' de ' + meses[finTrimestre.getMonth()] + ' de ' + finTrimestre.getFullYear());
        $('#resultadoDiff').append(diffDias + ' días');

        $('#btnCerrarFecha').on('click', function (event) {
            event.preventDefault();
            $('#statusWindow',opener.document).text('Ventana Cerrada');
            window.close();
        });
    });
}