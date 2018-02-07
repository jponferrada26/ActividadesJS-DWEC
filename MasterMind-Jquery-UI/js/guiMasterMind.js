{
    //GUI MASTERMIND + JQUERY + JQUERY-UI

    let $coloresAElegir,
        $arrayColoresSeleccionados,
        $colorPulsado,
        $containerIntentos,
        $colorElegidoIntento,
        $btnCheck,
        $arrayIntentoAComprobar,
        $numIntentos,
        $containerLeft,
        $containerUltimoIntento,
        $tituloResultadoMenuPartidaMasterMind,
        $numeroIntentosResultadoMenuPartidaMasterMind,
        $containerInsideMenuOpciones;


    let getUltimoIntento = function () {
        for (let i = $containerIntentos.children().length; i > 0; i--) {
            if ($containerIntentos.children()[i - 1].nodeName != '#text') {
                return $containerIntentos.children()[i - 1];
            }
        }

    };

    let insertarColorUltimoIntento = function () {
        let coloresUltimoIntento = $('.circleIntentoColor', $containerUltimoIntento);
        coloresUltimoIntento.each(function (index, color) {
            color = $(color);
            if (!color.hasClass('colorRelleno')) {
                $padding = color.css('padding').replace('px', '');
                color.animate({
                    padding: ($padding + 5) + 'px'
                }, 500);
                color.css('background', $colorPulsado);
                color.addClass('colorRelleno');
                return false;
            }
        });

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

    let insertColorEstadoUltimoIntento = function (color, posicion) {
        let classCirculo = $('.circleEstadoColor', $containerUltimoIntento)[posicion];
        $(classCirculo).css('background', color);
    };

    let drawIntentoColorEnSuSitio = function (numeroColorEnSuSitio, posicion) {
        for (let i = 0; i < numeroColorEnSuSitio; i++) {
            insertColorEstadoUltimoIntento('#000', posicion++);
        }
        return posicion;

    };

    let drawIntentoColorEsta = function (numeroColorEsta, posicion) {
        for (let i = 0; i < numeroColorEsta; i++) {
            insertColorEstadoUltimoIntento('#FFF', posicion++);
        }
    };

    let getNumeroColoresInsertados = function () {
        return $('.colorRelleno', $containerUltimoIntento).length;
    };

    /**
     * Nuevo intento
     */
    let nuevoIntento = function () {
        let ultimoIntentoAnterior = getUltimoIntento();
        if (ultimoIntentoAnterior != undefined) { //comprobar si existe un último intento
            $(getUltimoIntento()).css('pointerEvents', 'none');
        }
        $containerIntentos.append('<div class="containerIntentoColores">' +
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

    /**
     * Comprobar intento
     */
    let clickCheckIntento = function () {
        if (getNumeroColoresInsertados() == 4) {
            $arrayIntentoAComprobar = [];
            let coloresIntentoAComprobar = $('.circleIntentoColor', $containerUltimoIntento);
            coloresIntentoAComprobar.each(function (index, element) {
                $arrayIntentoAComprobar.push(getColor($(element).css('background-color')));
            });

            let resultadoMasterMind = mastermind.comprobarEstado($arrayIntentoAComprobar);

            let posicion = 0;
            posicion = drawIntentoColorEnSuSitio(resultadoMasterMind.colorEnSuSitio, posicion);
            drawIntentoColorEsta(resultadoMasterMind.colorEsta, posicion);
            if (resultadoMasterMind.colorEnSuSitio != 4) {
                nuevoIntento();
                $containerUltimoIntento = getUltimoIntento();
                updateContadorIntentos();
                iniciarCalbackSeleccionColorIntento();
                goToScrollBottom();

            } else {
                viewMenu(true);
            }

        }

    };


    /**
     * 
     */
    let clickBotonElegir = function () {
        $colorPulsado = $(this).css('background');
        insertarColorUltimoIntento();
    };

    let clickcolorElegidoIntento = function () {
        let elementoPulsado = $(this);
        if (elementoPulsado.hasClass('colorRelleno')) {
            elementoPulsado.removeClass('colorRelleno');
        }

        $padding = elementoPulsado.css('padding').replace('px', '');
        elementoPulsado.animate({
            padding: ($padding - 5) + 'px'
        }, 500);

        elementoPulsado.css('background', '#d6d6d6fa');

    }


    let iniciarCalbackColoresElegir = function () {
        $coloresAElegir.on('click', clickBotonElegir);
    };

    /**
     * Asignar los calback al a los colores de cada intento
     */
    let iniciarCalbackSeleccionColorIntento = function () {
        $colorElegidoIntento = $('.circleIntentoColor', $containerUltimoIntento);
        $colorElegidoIntento.on('click', clickcolorElegidoIntento);
    };

    /**
     * Asignar los calback al botón de chequear.
     */
    let iniciarCalbackBtnCheck = function () {
        $btnCheck.on('click', clickCheckIntento);
    };


    /**
     * Actualizar el contador de intentos
     */
    let updateContadorIntentos = function () {
        $numIntentos.html('Intentos: ' + mastermind.getNumIntentos());
    };

    /**
     * Ir al final del scroll del contenedor que almacena los intentos.
     */
    let goToScrollBottom = function () {
        $containerLeft.scrollTop($containerLeft.scrollHeight);
    };

    /**
     * Salir de la partida
     */
    let salir = function () {
        window.close();
    };

    /**
     * Mostrar Menu
     */
    let viewMenu = function () {
        if (arguments[0] == true) { //comprobar si existe un argumento con true que significa que tiene que ha ganado la partida
            $tituloResultadoMenuPartidaMasterMind.html('¡Has Ganado!');
            $numeroIntentosResultadoMenuPartidaMasterMind.html('Intentos: ' + mastermind.getNumIntentos());
            $containerInsideMenuOpciones.dialog('open');
        }

    };

    /**
     * Cerrar menu
     */
    let closeMenu = function () {
        $containerInsideMenuOpciones.dialog('close');

    };

    let clearAllIntententos = function () {
        $containerIntentos.empty();

        nuevoIntento();

    };

    let actualizar$containerIntentos = function () {
        $containerIntentos = $('#containerIntento');
    };


    /**
     * Empezar nueva partida
     */
    let start = function () {
        closeMenu();

        mastermind.init();
        mastermind.mostrar();

        $coloresAElegir = $('.colorEleccion');
        $containerIntentos = $('#containerIntento');
        clearAllIntententos();
        $arrayColoresSeleccionados = [];
        $containerLeft = $('#containerLeft');
        $numIntentos = $('#contadorIntentos');
        $btnCheck = $('#btn-checkColores');

        $containerUltimoIntento = getUltimoIntento();
        iniciarCalbackColoresElegir();
        iniciarCalbackSeleccionColorIntento();
        iniciarCalbackBtnCheck();
        updateContadorIntentos();
        goToScrollBottom();
    };


    /*-------Init---------*/

    let init = function () {
        $containerInsideMenuOpciones = $('#containerInsideMenuOpciones');
        $containerInsideMenuOpciones.dialog({
            modal: true,
            closeOnEscape: false,
            autoOpen: true,
            title:'MasterMind-jQueryUI',
            open: function (event, ui) {
                $('.ui-dialog-titlebar-close', ui.dialog).hide();
            },
            show: {
                effect: "explode",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            },
            buttons: [{
                    text: "Nueva partida",
                    click: function () {
                        start();
                    }
                },
                {
                    text: "Salir",
                    click: function () {
                        salir();
                    }
                }
            ]
        });


        $tituloResultadoMenuPartidaMasterMind = $('#titleResultadoMenuPartida');
        $numeroIntentosResultadoMenuPartidaMasterMind = $('#numeroIntentosMenuPartida');
        

    };

    $(window).ready(init);

}