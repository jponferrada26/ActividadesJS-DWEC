
    let $numIntentos,
        $formularioMenu,
        $backgroundMenu,
        $tituloResultadoMenuPartidaMasterMind,
        $numeroIntentosResultadoMenuPartidaMasterMind;

    let getUltimoIntento = function () {
        return $('.containerIntentoColores:last-child');
    };
    
    let getColor = function (rgb) {
        switch (rgb) {
            case 'rgb(255, 34, 34)':
                return 'rojo';
            case 'rgb(255, 255, 255)':
                return 'blanco';
            case 'rgb(0, 0, 0)':
                return 'negro';
            case 'rgb(255, 251, 34)':
                return 'amarillo';
            case 'rgb(255, 115, 34)':
                return 'naranja';
            case 'rgb(185, 97, 24)':
                return 'marron';
            case 'rgb(34, 156, 255)':
                return 'azul';
            case 'rgb(34, 255, 89)':
                return 'verde';
        }
    };

    let getNumeroColoresInsertados = function () {
        return $('.colorRelleno', getUltimoIntento()).length;
    };

    let nuevoIntento = function () {
        $(getUltimoIntento()).css('pointerEvents', 'none');
        $('#containerIntento').append('<div class="containerIntentoColores">' +
            '<div class="circleIntentoColor"></div>' +
            '<div class="circleIntentoColor"></div>' +
            '<div class="circleIntentoColor"></div>' +
            '<div class="circleIntentoColor"></div>' +
            '' +
            '<div class="circleEstadoColor"></div>' +
            '<div class="circleEstadoColor"></div>' +
            '<div class="circleEstadoColor"></div>' +
            '<div class="circleEstadoColor"></div>' +
            '</div>');
        mastermind.incrementarIntentos();
    };

    let clickCheckIntento = function () {
        if (getNumeroColoresInsertados() == 4) {
            let $arrayIntentoAComprobar = [];
            $('.circleIntentoColor', getUltimoIntento()).each(function (index, element) {
                $arrayIntentoAComprobar.push(getColor($(element).css('background-color')));
            });
            let resultadoMasterMind = mastermind.comprobarEstado($arrayIntentoAComprobar);
            $($('.circleEstadoColor', getUltimoIntento())).slice(0,resultadoMasterMind.colorEnSuSitio).css('background', '#000');
            $($('.circleEstadoColor', getUltimoIntento())).slice(resultadoMasterMind.colorEnSuSitio,resultadoMasterMind.colorEsta+resultadoMasterMind.colorEsta).css('background', '#FFF');
    
            if (resultadoMasterMind.colorEnSuSitio != 4) {
                nuevoIntento();
                updateContadorIntentos();
                iniciarCalbackSeleccionColorIntento();
                goToScrollBottom();
            } else {
                viewMenu(true);
            }
        }
    };

    let iniciarCalbackSeleccionColorIntento = function(){
        $('.circleIntentoColor', getUltimoIntento()).on('click', clickcolorElegidoIntento);
    };

    let clickBotonElegir = function () {
        $($('.circleIntentoColor:not([class="circleIntentoColor colorRelleno"])', getUltimoIntento())[0])
        .css('background', $(this).css('background'))
        .addClass('colorRelleno')
        .animate({
            padding: '5px'
        }, 500)
        .animate({
            padding: '0px'
        }, 500);
    };

    let clickcolorElegidoIntento = function () {
        $(this).removeClass('colorRelleno').css('background', '#d6d6d6fa');
    };

    let updateContadorIntentos = function () {
        $numIntentos.html('Intentos: ' + mastermind.getNumIntentos());
    };

    let goToScrollBottom = function () {
        $('#containerLeft').scrollTop($(this).height());
    };

    let salir = function () {
        window.close();
    };

    let viewMenu = function () {
        if (arguments[0] == true) { //comprobar si existe un argumento con true que significa que tiene que ha ganado la partida
            $tituloResultadoMenuPartidaMasterMind.html('¡Has Ganado!');
            $numeroIntentosResultadoMenuPartidaMasterMind.html('Intentos: ' + mastermind.getNumIntentos());
        }
        $formularioMenu.css('top', '0%');
        $backgroundMenu.css({
            'visibility': 'visible',
            'opacity': '0.5'
        });
    };

    let closeMenu = function () {
        $formularioMenu.css('top', '-200%');
        $backgroundMenu.css({
            'visibility': 'hidden',
            'opacity': '0'
        });
    };

    let start = function () {
        closeMenu();
        mastermind.init();
        mastermind.mostrar();
        $('#containerIntento').empty();
        nuevoIntento();
        $numIntentos = $('#contadorIntentos');
        $('#btn-checkColores').on('click', clickCheckIntento);       
        iniciarCalbackSeleccionColorIntento();
        updateContadorIntentos();
        goToScrollBottom();
    };

    let init = function () {
        $('#btn-Start').on('click', start);
        $('#btn-Salir').on('click', salir);
        $formularioMenu = $('#containerMenuOpciones');
        $backgroundMenu = $('#backgroundMenuOpciones');
        $tituloResultadoMenuPartidaMasterMind = $('#titleResultadoMenuPartida');
        $numeroIntentosResultadoMenuPartidaMasterMind = $('#numeroIntentosMenuPartida');
        $('.colorEleccion').on('click', clickBotonElegir);
    };
    $(init);
