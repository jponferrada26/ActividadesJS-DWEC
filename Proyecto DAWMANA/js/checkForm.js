/**
 * @author Javier Ponferrada López
 */

function CheckForm() {
    this.elementosIncorrectos = [];
}
CheckForm.prototype.COLOR_INCORRECTO = "#ffafaf";
CheckForm.prototype.ARRAY_DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
CheckForm.prototype.REGEXS = {
    "rx_nom_apell": /^(([a-záéíóúñ]{3,})[ ]?)+$/i,
    "rx_correo": /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/,
    "rx_dni": /^(\d{8})[\-| |]?([a-hj-np-tv-z])$/i,
    "rx_usuario": /^([a-z\d]{6,})$/i,
    "rx_contrasenia": /^(?=.*\d)(?=.*[\.$_;,])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
    "rx_date": /^(\d\d\/\d\d\/\d{4})$/,
    "rx_textShort": /^.{3,200}$/,
    "rx_textNormal": /.{3,}/,
    "rx_material": /^([ \d\w]{3,}[,]?)+$/i,
    "rx_numero": /^\d+$/
};

CheckForm.prototype.getElementosIncorrec = function () {
    return this.elementosIncorrectos;
};

CheckForm.prototype.check_input = function (input, elementError, msgError, REGEX) {
    input = $(input);
    elementError = $(elementError);
    switch (input.val()) {
        case "": //Si está vacío
            elementError.text('Campo vacío');
            input.css({
                "background": CheckForm.prototype.COLOR_INCORRECTO
            });
            this.elementosIncorrectos.push(input);
            break;
        default: //Si no está vacío.
            if (!REGEX.test(input.val())) {
                elementError.text(msgError);
                input.css({
                    "background": CheckForm.prototype.COLOR_INCORRECTO
                });
                this.elementosIncorrectos.push(input);
            } else {
                input.css({
                    "background": "#FFF"
                });
                elementError.empty();
            }
            break;
    }
};

CheckForm.prototype.check_dni = function (input, elementError, msgError) {
    input = $(input);
    elementError = $(elementError);
    switch (input.val()) {
        case "": //Si está vacío
            elementError.text('Campo vacío');
            input.css({
                "background": CheckForm.prototype.COLOR_INCORRECTO
            });
            this.elementosIncorrectos.push(input);
            break;
        default: //Si no está vacío.
            if (!CheckForm.prototype.REGEXS.rx_dni.test(input.val())) {
                elementError.text(msgError);
                input.css({
                    "background": CheckForm.prototype.COLOR_INCORRECTO
                });
                this.elementosIncorrectos.push(input);
            } else {
                let numero = input.val().match(CheckForm.prototype.REGEXS.rx_dni)[1];
                let letra = input.val().match(CheckForm.prototype.REGEXS.rx_dni)[2];
                if (CheckForm.prototype.ARRAY_DNI[(numero % 23)] != letra.toUpperCase()) {
                    input.css({
                        "background": CheckForm.prototype.COLOR_INCORRECTO
                    });
                    elementError.text("La letra del dni no es correcta");
                    this.elementosIncorrectos.push(input);
                } else {
                    input.css({
                        "background": "#FFF"
                    });
                    elementError.empty();
                }
            }
            break;
    }
};

CheckForm.prototype.checkInputFiles = function (inputFile, elementError) {
    if ($(inputFile)[0].files.length == 0 || $(inputFile)[0].files[0].name.lastIndexOf('.png') == -1) {
        this.elementosIncorrectos.push($(inputFile));
        $(inputFile).css({
            "background": CheckForm.prototype.COLOR_INCORRECTO
        });
        $(elementError).text('Solo se admiten las extensión (.png)');
    } else {
        $(inputFile).css({
            "background": "#FFF"
        });
        $(elementError).empty();
    }
};

CheckForm.prototype.clearArrayElmIncorrec = function () {
    this.elementosIncorrectos = [];
}