{
    let main;
    const URL_SERVER = "./php/principal.php";

    let prepareSliderPatro = function () {
        $('#patrocinadores').slick({
            centerMode: true,
            centerMargin: '40px',
            slidesToShow: 3
        });
        $('.slick-arrow').text("");
    };
    let prepareOnScroll = function () {
        let nav = $('#nav');
        let header = $('#header');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= header.height()) {
                nav.css({
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    "z-index": '2000'
                });
                main.css({
                    "margin-top": "60px"
                });

            } else {
                nav.css({
                    position: 'static'
                });
                main.css({
                    "margin-top": "0px"
                });
            }
        });
    };

    let registroAsistente = function () {
        $('#containeRegistroAsistent').remove();
        main.append('<div id="containeRegistroAsistent"></div>');
        $('#containeRegistroAsistent').html(componentes.c_registroAsistente())
            .dialog({
                resizable: false,
                modal: true,
                width: 500,
                draggable: true,
                show: {
                    effect: "drop",
                    duration: 1000
                },
                hide: {
                    effect: "drop",
                    duration: 1000
                }
            });

        let form = new CheckForm();
        $('#nombreRegistAsist').on('keyup', form.check_input.bind(form, $('#nombreRegistAsist'), $('#errorMsgNombreRegistAsist'), 'El nombre no es correcto.', form.REGEXS.rx_nom_apell));
        $('#apellidoRegistAsist').on('keyup', form.check_input.bind(form, $('#apellidoRegistAsist'), $('#errorMsgApellidoRegistAsist'), 'El apellido no es correcto.', form.REGEXS.rx_nom_apell));
        $('#correoRegistAsist').on('keyup', form.check_input.bind(form, $('#correoRegistAsist'), $('#errorMsgCorreoRegistAsist'), 'El correo no es correcto.', form.REGEXS.rx_correo));
        $('#dniRegistAsist').on('keyup', form.check_dni.bind(form, $('#dniRegistAsist'), $('#errorMsgDniRegistAsist'), 'El dni no tiene un formato correcto(12345678Z).'));

        $('#btnSubmitRegistroAsist').on('click', function (event) {
            form.clearArrayElmIncorrec();
            event.preventDefault();
            form.check_input($('#nombreRegistAsist'), $('#errorMsgNombreRegistAsist'), 'El nombre no es correcto.', form.REGEXS.rx_nom_apell);
            form.check_input($('#apellidoRegistAsist'), $('#errorMsgApellidoRegistAsist'), 'El apellido no es correcto.', form.REGEXS.rx_nom_apell);
            form.check_input($('#correoRegistAsist'), $('#errorMsgCorreoRegistAsist'), 'El correo no es correcto.', form.REGEXS.rx_correo);
            form.check_dni($('#dniRegistAsist'), $('#errorMsgDniRegistAsist'), 'El dni no tiene un formato correcto(12345678Z).');
            if (form.elementosIncorrectos.length == 0) {
                printMsgOkDialog('Asistencia registrada');
                $('#containeRegistroAsistent').dialog('close');
            }
        });
    };


    let printPonencias = function (datosJSON) {
        $('#containerInsidePrograma', $('#containerPrograma')).remove();
        $('#containerPrograma').append('<div id="containerInsidePrograma"></div>');
        let containerInsidePrograma = $('#containerInsidePrograma');
        let imagenesPonentes = "";

        $(containerInsidePrograma).tooltip();

        $.each(datosJSON, function (i, ponencia) {
            containerInsidePrograma.append(componentes.c_ponenciaPrograma(ponencia.nombrePonencia,
                ponencia.hora, ponencia.local, ponencia.nombre, ponencia.empresa, ponencia.descripcion, ponencia.imagen));
            imagenesPonentes += '<img src="' + ponencia.imagen + '"/>';
        });

        $('.btnQuieroIrPonencia').on('click', registroAsistente);

        $('.imagenPonentePonencia').on('click', function () { //Haces click en la imagen de un ponente
            $('#containerIslider').remove();
            main.append('<div id="containerIslider"><div id="containerInsideSlider"></div></div>')
            $('#containerInsideSlider').html(imagenesPonentes);
            $('#containerInsideSlider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });

            $('#containerIslider').dialog({
                resizable: false,
                modal: true,
                width: 500,
                draggable: true,
                show: {
                    effect: "blind",
                    duration: 1000
                },
                hide: {
                    effect: "blind",
                    duration: 1000
                }
            });
        });

        containerInsidePrograma.accordion({ //Acordeón de las ponencias
            active: false,
            collapsible: true,
            heightStyle: "content"
        });
    };

    let getPonencias = function (thisclick) {
        $.getJSON(URL_SERVER, {
                diaSemana: $(thisclick).attr('href'),
                action: 'mostrarponencias'
            },
            function (data) {
                printPonencias(data);
            }
        );

    };

    let printContainerPrograma = function () {
        main.html('<section id="containerPrograma"><h2 class="titleSection">Programa</h2></section>');

        $('#containerPrograma')
            .append(componentes.c_diasSemana())
            .hide()
            .show("drop", {
                direction: "down"
            }, 500);

        let itemsdiasSemana = $('.itemDiaPrograma')
            .on('click', function (event) {
                event.preventDefault();
                getPonencias(this); //insertar las ponencias en el contendor del programa
            });
        $('#itemLunes').trigger('click'); //Cliquea en lunes automáticamente.
    };

    let showSliderPonentes = function () {
        $('#containerSliderPonentes').dialog();
    };

    let printContainerPonentes = function () {
        main.html('<section id="containerPonentes"><h2 class="titleSection">Ponentes</h2><div id="containerInsidePonentes"></div></section>');
        let containerPonentes = $('#containerInsidePonentes');
        let containerInsideSliderPonentes = $('#containerInsideSliderPonentes');

        $('#containerPonentes').hide()
            .show("drop", {
                direction: "down"
            }, 500);

        $.getJSON(URL_SERVER, {
                action: 'mostrarponentes'
            },
            function (data) {
                $.each(data, function (i, diaSemana) {
                    $.each(diaSemana, function (j, ponente) {
                        containerPonentes.append(componentes.c_ponente(ponente.nombre, ponente.nombrePonencia, ponente.imagen));
                    });
                });
            }
        );
    };

    let iniciarSesion = function (usuario) {
        sessionStorage.setItem('usuario', usuario);
        changeMenuToPonenteLogueado();
    };

    let cerrarSesion = function () {
        sessionStorage.clear();
        changeMenuToPonenteNoLogueado();
        printContainerPrograma(); //Una vez cerrada sesión se va al inicio
    };

    let printFormRegistroPonencia = function () {
        main.html('<section id="containerCrearPonencia"><h2 class="titleSection">Crear ponencia</h2><div id="containerInsideCrearPonencia"></div></section>');
        $('#containerInsideCrearPonencia').html(componentes.c_registroPonencia());

        $('#containerCrearPonencia').hide()
            .show("drop", {
                direction: "down"
            }, 500);

        let form = new CheckForm();
        $('#nombreCrearPonenc').on('keyup', form.check_input.bind(form, $('#nombreCrearPonenc'), $('#errorMsgNombCrePonen'), 'El nombre no es correcto', form.REGEXS.rx_nom_apell));
        $('#materialPoneCrearPonenc').on('keyup', form.check_input.bind(form, $('#materialPoneCrearPonenc'), $('#errorMsgMaterPoneCrePonen'), 'El material no es correcto (El material debe estar separado por , )', form.REGEXS.rx_material));
        $('#materialAsistCrearPonenc').on('keyup', form.check_input.bind(form, $('#materialAsistCrearPonenc'), $('#errorMsgMaterAsisCrePonen'), 'El material no es correcto (El material debe estar separado por , )', form.REGEXS.rx_material));
        $('#numAsistCrearPonenc').on('keyup', form.check_input.bind(form, $('#numAsistCrearPonenc'), $('#errorMsgNumAsiCrePonen'), 'Solo se admiten números.', form.REGEXS.rx_numero));
        $('#descrBreCrearPonenc').on('keyup', form.check_input.bind(form, $('#descrBreCrearPonenc'), $('#errorMsgDesBrCrePonen'), 'El formato no es correcto (máximo 200 caracteres)', form.REGEXS.rx_textShort));
        $('#descrExteCrearPonenc').on('keyup', form.check_input.bind(form, $('#descrExteCrearPonenc'), $('#errorMsgDescExCrePonen'), 'El formato no es correcto', form.REGEXS.rx_textNormal));
        $('#urlImagenCrearPonenc').on('change', form.checkInputFiles.bind(form, $('#urlImagenCrearPonenc'), $('#errorMsgImgCrePonen')))

        $('#btnSubmitCrearPonenc').on('click', function () {
            form.clearArrayElmIncorrec();
            form.check_input($('#nombreCrearPonenc'), $('#errorMsgNombCrePonen'), 'El nombre no es correcto', form.REGEXS.rx_nom_apell);
            form.check_input($('#materialPoneCrearPonenc'), $('#errorMsgMaterPoneCrePonen'), 'El material no es correcto (El material debe estar separado por , )', form.REGEXS.rx_material);
            form.check_input($('#materialAsistCrearPonenc'), $('#errorMsgMaterAsisCrePonen'), 'El material no es correcto (El material debe estar separado por , )', form.REGEXS.rx_material);
            form.check_input($('#numAsistCrearPonenc'), $('#errorMsgNumAsiCrePonen'), 'Solo se admiten números.', form.REGEXS.rx_numero);
            form.check_input($('#descrBreCrearPonenc'), $('#errorMsgDesBrCrePonen'), 'El formato no es correcto (máximo 200 caracteres)', form.REGEXS.rx_textShort);
            form.check_input($('#descrExteCrearPonenc'), $('#errorMsgDescExCrePonen'), 'El formato no es correcto', form.REGEXS.rx_textNormal);
            form.checkInputFiles($('#urlImagenCrearPonenc'), $('#errorMsgImgCrePonen'));

            if (form.elementosIncorrectos.length == 0) {
                printMsgOkDialog('Ponencia creada')
            }
        });
    };

    let printFormModificarPonente = function () {
        main.html('<section id="containerModificarPonencia"><h2 class="titleSection">Modificar mis datos</h2><div id="containerInsideModiPonente"></div></section>');
        $('#containerInsideModiPonente').html(componentes.c_modificarPonente());

        $('#containerModificarPonencia').hide()
            .show("drop", {
                direction: "down"
            }, 500)


        $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };

        $.datepicker.setDefaults($.datepicker.regional['es']);

        var dateFormat = "dd/mm/yy",
            from = $("#diasInicioPrefeModifPonent")
            .datepicker({
                showAnim: 'drop',
                dateFormat: 'dd/mm/yy',
                defaultDate: "+1w",
                changeMonth: true,
                maxDate: '02/02/2018',
                minDate: '29/01/2018',
            })
            .on("change", function () {
                to.datepicker("option", "minDate", $.datepicker.parseDate("dd/mm/yy", $(this).val()));
            }).prop('readonly', true),
            
            to = $("#diasFinPrefeModifPonent").datepicker({
                showAnim: 'drop',
                dateFormat: 'dd/mm/yy',
                defaultDate: "+1w",
                changeMonth: true,
                maxDate: '02/02/2018',
                minDate: '29/01/2018',
            })
            .on("change", function () {
                from.datepicker("option", "maxDate", $.datepicker.parseDate("dd/mm/yy", $(this).val()));
            }).prop('readonly', true);




        let form = new CheckForm();
        $('#nombreModifPonent').on('keyup', form.check_input.bind(form, $('#nombreModifPonent'), $('#errorMsgNomModifPon'), 'El nombre no es correcto', form.REGEXS.rx_nom_apell));
        $('#apellidoModifPonent').on('keyup', form.check_input.bind(form, $('#apellidoModifPonent'), $('#errorMsgApellModifPon'), 'El apellido no es correcto', form.REGEXS.rx_nom_apell));
        $('#usuarioModifPonent').on('keyup', form.check_input.bind(form, $('#usuarioModifPonent'), $('#errorMsgUsuModifPon'), 'El formato del usuario no es correcto (Mínimo 6 caracteres)', form.REGEXS.rx_usuario));
        $('#contrasModifPonent').on('keyup', form.check_input.bind(form, $('#contrasModifPonent'), $('#errorMsgPassModifPon'), '(Mínimo 6 caracteres + números, mayús, minus, [,;_$])', form.REGEXS.rx_contrasenia));
        $('#obserModifPonent').on('keyup', form.check_input.bind(form, $('#obserModifPonent'), $('#errorMsgObseModifPon'), 'Las observaciones no tienen el formato correcto', form.REGEXS.rx_textNormal));

        $('#btnSubmitModifPonent').on('click', function () {
            form.clearArrayElmIncorrec();
            form.check_input($('#nombreModifPonent'), $('#errorMsgNomModifPon'), 'El nombre no es correcto', form.REGEXS.rx_nom_apell);
            form.check_input($('#apellidoModifPonent'), $('#errorMsgApellModifPon'), 'El apellido no es correcto', form.REGEXS.rx_nom_apell);
            form.check_input($('#diasInicioPrefeModifPonent'), $('#errorMsgDiaInicioPrModifPon'), 'La fecha no tiene el formato correcto', form.REGEXS.rx_date);
            form.check_input($('#diasFinPrefeModifPonent'), $('#errorMsgDiaFinPrModifPon'), 'La fecha no tiene el formato correcto', form.REGEXS.rx_date);
            form.check_input($('#usuarioModifPonent'), $('#errorMsgUsuModifPon'), 'El formato del usuario no es correcto (Mínimo 6 caracteres)', form.REGEXS.rx_usuario);
            form.check_input($('#contrasModifPonent'), $('#errorMsgPassModifPon'), '(Mínimo 6 caracteres + números, mayús, minus, [,;_$])', form.REGEXS.rx_contrasenia);
            form.check_input($('#obserModifPonent'), $('#errorMsgObseModifPon'), 'Las observaciones no tienen el formato correcto', form.REGEXS.rx_textNormal);
            if (form.elementosIncorrectos.length == 0) {
                printMsgOkDialog('Datos modificados');
            }
        });


    };

    let printMsgOkDialog = function (msg) {
        $('<p id="textResultCheckSend"><img class="iconCheckSend" src="img/check-mark.svg"/>' + msg + '</p>').dialog({
            resizable: false,
            modal: true,
            width: 500,
            draggable: true,
            show: {
                effect: "drop",
                duration: 1000
            },
            hide: {
                effect: "drop",
                duration: 1000
            }
        });
    }


    let printFormRegisPonenciNoLogged = function () {
        $('#containeLoginPonente').remove();
        main.append('<div id="containeLoginPonente"></div>');

        $('#containeLoginPonente').html(componentes.c_loginPonente())
            .dialog({
                resizable: false,
                modal: true,
                width: 500,
                draggable: true,
                show: {
                    effect: "drop",
                    duration: 1000
                },
                hide: {
                    effect: "drop",
                    duration: 1000
                }
            });
        let form = new CheckForm();
        $('#usuaLogPonen').on('keyup', form.check_input.bind(form, $('#usuaLogPonen'), $('#errorMsgUsuarioLoginPon'), 'El formato del usuario no es correcto (Mínimo 6 caracteres)', form.REGEXS.rx_usuario));
        $('#contraseLogPonen').on('keyup', form.check_input.bind(form, $('#contraseLogPonen'), $('#errorMsgContrasenaLoginPon'), '(Mínimo 6 caracteres + números, mayús, minus, [,;_$])', form.REGEXS.rx_contrasenia));
        $('#btnSubmitLoginPonent').on('click', function () {
            form.clearArrayElmIncorrec();
            form.check_input($('#usuaLogPonen'), $('#errorMsgUsuarioLoginPon'), 'El formato del usuario no es correcto (Mínimo 6 caracteres)', form.REGEXS.rx_usuario);
            form.check_input($('#contraseLogPonen'), $('#errorMsgContrasenaLoginPon'), '(Mínimo 6 caracteres + números, mayús, minus, [,;_$])', form.REGEXS.rx_contrasenia);
            if (form.elementosIncorrectos.length == 0) {
                let usuario = $('#usuaLogPonen').val();
                let contrasenia = $('#contraseLogPonen').val();
                $.getJSON(URL_SERVER, {
                        "usuario": usuario,
                        "contrasenia": contrasenia,
                        action: 'comprobarponente'
                    },
                    function (data) {
                        if (data.correct) {
                            iniciarSesion(usuario);
                            $('#containeLoginPonente').dialog('close');
                        } else {
                            $('#msgErrorCredenciales').remove();
                            $('#btnSubmitLoginPonent').after('<span class="errorMsg" id="msgErrorCredenciales">Las credenciales son incorrectas</span>');
                        }

                    }
                );
            }
        });
    }

    let isLogueado = function () {
        return sessionStorage.getItem('usuario') != null;
    };

    let printContainerCrearPonencia = function () {
        if (isLogueado()) {
            printFormRegistroPonencia();
        } else {
            printFormRegisPonenciNoLogged();
        }
    };

    /**
     * Cambia los items de menu para cuando el ponente no esta logueado
     */
    let changeMenuToPonenteNoLogueado = function () {
        $('#itemSoyPonente').remove();
        $('#itemCrearPonencia').remove();
        $('#itemMofificarPonente').remove();
        $('#itemCerrarSesion').remove();

        $('#nav>ul').append('<li id="itemSoyPonente"><a href="soyponente" id="soyponente" class="itemMenu">Soy ponente</a></li>')

        $('#soyponente').on('click', clickItemMenu);
    };

    /**
     * Cambia los items de menu para cuando el ponente está logueado
     */
    let changeMenuToPonenteLogueado = function () {
        $('#itemSoyPonente').remove();

        $('#nav>ul').append('<li id="itemCrearPonencia"><a href="crearponencia" id="crearponencia" class="itemMenu">Crear ponencia</a></li>')
            .append('<li id="itemMofificarPonente"><a href="modificarponente" id="modificarponente" class="itemMenu">Modificar mis datos</a></li>')
            .append('<li id="itemCerrarSesion"><a href="cerrarsesion" id="cerrarsesion" class="itemMenu">Cerrar sesión</a></li>');

        $('#crearponencia').on('click', clickItemMenu);
        $('#modificarponente').on('click', clickItemMenu);
        $('#cerrarsesion').on('click', clickItemMenu);
    };

    let printAntiguasSysmanas = function () {
        $.getJSON(URL_SERVER, {
                "action": "atiguasysmanas"
            },
            function (data) {
                main.html('<section id="containerAntiguasSysmanas"><h2 class="titleSection">Antiguas Sysmanas</h2><div id="containerInsideAntiguasSysmanas"></div></section>');
                let containerInsideAntiguasSysmanas = $('#containerInsideAntiguasSysmanas');

                $.each(data, function (i, cartel) {
                    containerInsideAntiguasSysmanas.append(componentes.c_antiguaSysmana(cartel.ruta));
                });
                $('#containerAntiguasSysmanas').hide()
                    .show("drop", {
                        direction: "down"
                    }, 500);
            }
        );
    };

    let clickItemMenu = function (event) {
        event.preventDefault();
        let element = $(this);
        switch (element.attr('href')) {
            case 'programa':
                printContainerPrograma();
                break;
            case 'pontentes':
                printContainerPonentes();
                break;
            case 'crearponencia':
                printContainerCrearPonencia();
                break;
            case 'soyponente':
                printFormRegisPonenciNoLogged();
                break;
            case 'modificarponente':
                printFormModificarPonente();
                break;
            case 'cartelesantiguos':
                printAntiguasSysmanas();
                break;
            case 'cerrarsesion':
                cerrarSesion();
                break;
        }
    };

    let prepareImagenPortadaDawMana = function () {
        main.html('<div id="containerImgPortada"><img src="img/cartelSysmanaX.jpg" id="imgPortada"/></div>');
        $("#containerImgPortada").hide();
        $("header").hide();
        $("nav").hide();
        $("footer").fadeOut(100);

        $("#containerImgPortada").show("drop", 2000, function () {
            $('#containerImgPortada').delay(4000).effect("drop", 1000);
            $('header').delay(4000).show("drop", {
                direction: "right"
            }, 1500);
            $('nav').delay(4000).show("drop", {
                direction: "right"
            }, 2000, function () {
                printContainerPrograma();
            });
            $('footer').delay(4000).show("drop", {
                direction: "right"
            }, 2000);

        });
    };

    let init = function () {
        prepareOnScroll();
        prepareSliderPatro();
        main = $('main');
        prepareImagenPortadaDawMana();

        $('.itemMenu').on('click', clickItemMenu);
        if (isLogueado())
            changeMenuToPonenteLogueado();
        else
            changeMenuToPonenteNoLogueado();
    };

    $(init);
}