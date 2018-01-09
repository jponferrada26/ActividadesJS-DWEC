{
    /**
     * Comprobar si esta correcto un radio o checkbox
     * @param input 
     * @param msgError 
     */
    let checkRadioChecbox = (input, msgError) => {
        for (element of input) {
            if (element.checked == true) {
                msgError.innerText = '';
                return true;
            }

        }
        msgError.innerText = 'Selecciona alguna opción';
        return false;

    }

    /**
     * Comprobar que los campos estén correctos a corde con su REGEX
     */
    let checkInput = function (inputCheck, elementmsgError, msg, regexInput) {
        if (!regexInput.test(inputCheck.value)) {
            inputCheck.style.background = INPUT_INCORRECTO;
            elementmsgError.innerText = msg;
            return false;

        }
        inputCheck.style.background = INPUT_CORRECTO;
        elementmsgError.innerText = '';
        return true;
    }

    /**
     * Comprobar que el campo contenga el formato correcto y su letra correspondiente.
     */
    let checkInputDNI = function () {
        let dni = inputDNI.value;
        if (REGEX_DNI.test(dni)) {
            let numero = dni.match(REGEX_DNI)[1];
            let letra = dni.match(REGEX_DNI)[2];

            if (LETRAS_DNI[numero % 23] == letra.toUpperCase()) {
                inputDNI.style.background = INPUT_CORRECTO;
                msgErrorDNI.innerText = '';
                return true;
            }


        }
        inputDNI.style.background = INPUT_INCORRECTO;
        msgErrorDNI.innerText = 'DNI no válido\n(00000000X)';
        return false;
    }

    /**
     * Comprobar que el campo fecha es correcto
     */
    let checkInputFecha = function () {
        let fecha = new Date(inputFecha.value);
        //(fecha.getFullYear() + '-' + ("0" + (fecha.getMonth()+1)).slice(-2) + '-' + ("0" + fecha.getDate()).slice(-2))
        if (fecha == 'Invalid Date' || fecha.getTime() == 'NaN') { //comprobar que las fecha es correcta.
            inputFecha.style.background = INPUT_INCORRECTO;
            msgErrorFecha.innerText = 'Fecha incorrecta\n(DD/MM/AAAA)';
            return false;
        }
        inputFecha.style.background = INPUT_CORRECTO;
        msgErrorFecha.innerText = '';
        return true;

    }
    /**
     * Comprobar que estén todos los campos correctos
     */
    let checkAllDatos = () => {
        checkRadioChecbox(inputRadio, msgErrorRadio);
        checkRadioChecbox(inputCheckbox, msgErrorCheckBox);
        checkInput(inputSelect, msgErrorSelect, 'Selección incorrecta', REGEX_SELECT);
        checkInput(inputNumber, msgErrorNumber, 'Debe contener un número\n(0 a XX...)', REGEX_NUMBER);
        checkInput(inputCorreo, msgErrorCorreo, 'Correo incorrecto\n (example@dominio.com)', REGEX_CORREO);        
        checkInputDNI();
        checkInputFecha();
        checkInput(inputTelefono, msgErrorTelefono, 'Teléfono incorrecto\n(000 000 000)', REGEX_TELEFONO);
        checkInput(inputCuentaCorriente, msgErrorCuentaCorriente, 'Cuenta incorrecta\n(XX0000000000000000000000)', REGEX_CUENTA_CORRIENTE);
        checkInput(inputURL, msgErrorUrl, 'Url no válida\n(http://example.es)', REGEX_URL);
    }

    const REGEX_NUMBER = /^[0-9]+$/g;
    const REGEX_SELECT = /^[^\-]+$/g;
    const REGEX_CORREO = /^([a-z0-9]{3,}\.)*([a-z0-9]{3,})@[a-z0-9]+([\.][a-z]{2,})+$/;
    const REGEX_DNI = /^([0-9]{8})[\-| ]?([a-hj-np-tv-z|A-HJ-NP-TV-Z])$/i;
    const REGEX_TELEFONO = /^(\+\d{1,3}[ |-]?)?((\d{9})|(\d{3}[ |-]\d{3}[ |-]\d{3}))$/;
    const REGEX_CUENTA_CORRIENTE = /^([A-Z]{2})(\d{2})(\d{4})(\d{4})(\d\d)(\d{10})$/i;
    const REGEX_URL = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    
    const LETRAS_DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    const INPUT_CORRECTO = '#ececec';
    const INPUT_INCORRECTO = '#dc5f5c';


    let inputRadio = document.getElementsByName('btnradio');
    let msgErrorRadio = document.getElementById('msgErrorRadio');

    let inputCheckbox = document.getElementsByName('checkbox');
    let msgErrorCheckBox = document.getElementById('msgErrorCheckbox');

    let inputSelect = document.getElementById('select');
    let msgErrorSelect = document.getElementById('msgErrorSelect');
    inputSelect.addEventListener('blur', function () {
        checkInput(inputSelect, msgErrorSelect, 'Selección incorrecta', REGEX_SELECT);
    });

    let inputNumber = document.getElementById('numero');
    let msgErrorNumber = document.getElementById('msgErrorNumero');
    inputNumber.addEventListener('blur', function () {
        checkInput(inputNumber, msgErrorNumber, 'Debe contener un número\n(0 a XX...)', REGEX_NUMBER);
    });

    let inputCorreo = document.getElementById('correo');
    let msgErrorCorreo = document.getElementById('msgErrorCorreo');
    inputCorreo.addEventListener('blur', function () {
        checkInput(inputCorreo, msgErrorCorreo, 'Correo incorrecto\n (example@dominio.com)', REGEX_CORREO);
    });

    let inputDNI = document.getElementById('dni');
    let msgErrorDNI = document.getElementById('msgErrorDNI');
    inputDNI.addEventListener('blur', checkInputDNI);

    let inputFecha = document.getElementById('fecha');
    let msgErrorFecha = document.getElementById('msgErrorFecha');
    inputFecha.addEventListener('blur', checkInputFecha);

    let inputTelefono = document.getElementById('telefono');
    let msgErrorTelefono = document.getElementById('msgErrorTelefono');
    inputTelefono.addEventListener('blur', function () {
        checkInput(inputTelefono, msgErrorTelefono, 'Teléfono incorrecto\n(000 000 000)', REGEX_TELEFONO);
    });

    let inputCuentaCorriente = document.getElementById('cuentaCorriente');
    let msgErrorCuentaCorriente = document.getElementById('msgErrorCuentaCorriente');
    inputCuentaCorriente.addEventListener('blur', function () {
        checkInput(inputCuentaCorriente, msgErrorCuentaCorriente, 'Cuenta incorrecta\n(XX0000000000000000000000)', REGEX_CUENTA_CORRIENTE);
    });
    
    let inputURL = document.getElementById('url');
    let msgErrorUrl = document.getElementById('msgErrorUrl');
    inputURL.addEventListener('blur', function () {
        checkInput(inputURL, msgErrorUrl, 'Url no válida\n(http://example.es)', REGEX_URL);
    });


    let button_validate = document.getElementById('btn_validarDatos');
    button_validate.addEventListener('click', checkAllDatos, false);


}