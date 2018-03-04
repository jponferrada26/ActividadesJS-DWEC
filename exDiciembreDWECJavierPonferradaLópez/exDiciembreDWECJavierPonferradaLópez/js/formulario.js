// Javier Ponferrada López
{
    let inputNombre;
    let msgErrorNombre;

    let inputPrimerApellido;
    let msgErrorPrimerApellido;

    let inputSegundoApellido;
    let msgErrorSegundoApellido;

    let inputFechaNacimiento;
    let msgErrorFechaNacimiento;

    let btnCrear;
    let btnLimpiar;

    let validaciones = [];

    let regexs = {
        'nombre': [/^([A-Z][a-záéíóúñ]{3,})$/, 'Nombre incorrecto. Primera letra en mayúscula y longitud minima de 3 caracteres'],
        'primerApellido': [/^([A-Z][a-záéíóúñ]{3,})$/, 'Primer apellido incorrecto. Primera letra en mayúscula y longitud minima de 3 caracteres'],
        'segundoApellido': [/^([A-Z][a-záéíóúñ]{3,})$/, 'Segundo apellido incorrecto. Primera letra en mayúscula y longitud minima de 3 caracteres'],
        'fechaNacimiento': [/^\d{2}-\d{2}-\d{4}$/, 'Formato de fecha incorrecta. (dd-mm-aaaa)']
    };

    let validar = {
        'comprobarInput': function (input, elementErrorMsg, thisRegex) {

            if (input.value != '') {
                if (thisRegex[0].test(input.value))
                    elementErrorMsg.innerHTML = '';
                else {
                    elementErrorMsg.innerHTML = thisRegex[1];
                    validaciones.push(input);
                }
            } else {
                elementErrorMsg.innerHTML = 'Campo vacío';
                validaciones.push(input);
            }
        },
        'fechaExist': function (fecha, valueInput) {
            let fechaValue = valueInput.split('-');
            return (fecha.getDate() == fechaValue[0].replace(0, '') && fecha.getMonth() == fechaValue[1].replace(0, '') && fecha.getFullYear() == fechaValue[2]);
        },
        'comprobarFecha': function (input, elementErrorMsg) {
            if (input.value != '') {
                if (regexs.fechaNacimiento[0].test(input.value)) {
                    let fechaValue = input.value.split('-');
                    let fecha = new Date(fechaValue[2], fechaValue[1], fechaValue[0]);

                    if (fecha == 'Invalid Date' || !validar.fechaExist(fecha, input.value)) {
                        elementErrorMsg.innerHTML = 'Fecha no existe';
                        validaciones.push(input);
                    } else
                        elementErrorMsg.innerHTML = '';
                } else {
                    elementErrorMsg.innerHTML = regexs.fechaNacimiento[1];
                    validaciones.push(input);
                }
            } else {
                elementErrorMsg.innerHTML = 'Campo vacío';
                validaciones.push(input);
            }
        }
    };

    let validarInput = function (input, msgError, thisRegex) {
        validar.comprobarInput(input, msgError, thisRegex);
    }

    let validarFecha = function (input, msgError) {
        validar.comprobarFecha(input, msgError);
    }
    let validarTodo = function () {
        validaciones = [];
        validarInput(inputNombre, msgErrorNombre, regexs.nombre);
        validarInput(inputPrimerApellido, msgErrorPrimerApellido, regexs.primerApellido);
        validarInput(inputSegundoApellido, msgErrorSegundoApellido, regexs.segundoApellido);
        validarFecha(inputFechaNacimiento, msgErrorFechaNacimiento);

        if (validaciones.length == 0) {
            let alumno = new Alumno(inputNombre.value, inputPrimerApellido.value, inputSegundoApellido.value, inputFechaNacimiento.value);
        }
    }

    let limpiarTodo = function () {
        inputNombre.value = '';
        inputPrimerApellido.value = '';
        inputSegundoApellido.value = '';
        inputFechaNacimiento.value = '';
    }

    let init = function () {
        msgErrorNombre = document.getElementById('msgErrorNombre');
        msgErrorPrimerApellido = document.getElementById('msgErrorPrimerApellido');
        msgErrorSegundoApellido = document.getElementById('msgErrorSegundoApellido');
        msgErrorFechaNacimiento = document.getElementById('msgErrorFechaNacimiento');

        inputNombre = document.getElementById('inputNombre');
        inputNombre.addEventListener('blur', validarInput.bind(null, inputNombre, msgErrorNombre, regexs.nombre));

        inputPrimerApellido = document.getElementById('inputPrimerApellido');
        inputPrimerApellido.addEventListener('blur', validarInput.bind(null, inputPrimerApellido, msgErrorPrimerApellido, regexs.primerApellido));

        inputSegundoApellido = document.getElementById('inputSegundoApellido');
        inputSegundoApellido.addEventListener('blur', validarInput.bind(null, inputSegundoApellido, msgErrorSegundoApellido, regexs.segundoApellido));

        inputFechaNacimiento = document.getElementById('inputFechaNacimiento');
        inputFechaNacimiento.addEventListener('blur', validarFecha.bind(null, inputFechaNacimiento, msgErrorFechaNacimiento));

        btnCrear = document.getElementById('btnCrear');
        btnCrear.addEventListener('click', validarTodo);

        btnLimpiar = document.getElementById('btnLimpiar');
        btnLimpiar.addEventListener('click', limpiarTodo);

    };
    window.onload = init;
}