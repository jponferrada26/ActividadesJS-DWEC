{

    let calculadora = {
        'buttonCalculPulsado': '',
        'resultadoAcumulado': 0,
        'inputResultado': undefined,
        'dibujarcalculadora': function () {
            let contentcalculadora = document.createElement('div');
            contentcalculadora.setAttribute('id', 'contentCalculadora');

            calculadora.inputResultado = document.getElementById('inputResultado');
            calculadora.inputResultado = document.createElement('input');
            calculadora.inputResultado.setAttribute('type', 'text');
            calculadora.inputResultado.setAttribute('id', 'inputResultado');
            calculadora.inputResultado.setAttribute('disabled', '');
            calculadora.inputResultado.value = 0;

            let arrayButtonText = ['CE', 'C', '%', '+', 7, 8, 9, '-', 4, 5, 6, 'x', 1, 2, 3, '/', 0, '+/-', '.', '='];
            contentcalculadora.appendChild(calculadora.inputResultado);

            let elementContentButtons = document.createElement('div');
            elementContentButtons.setAttribute('id', 'contentButtons');

            let button;
            for (let i = 0; i < arrayButtonText.length; i++) {
                button = document.createElement('button');
                button.appendChild(document.createTextNode(arrayButtonText[i]));
                //button.setAttribute('id', this.arrayClassContent[i]);
                button.addEventListener('click', calculadora.clickButtoncalculadora, false);
                elementContentButtons.appendChild(button);
            }
            contentcalculadora.appendChild(elementContentButtons);
            document.body.appendChild(contentcalculadora);
        },
        'sumar': (numero1, numero2) => {
            return numero1 + numero2;
        },
        'restar': (numero1, numero2) => {
            return numero1 - numero2;
        },
        'multiplicar': (numero1, numero2) => {
            return numero1 * numero2;
        },
        'dividir': (numero1, numero2) => {
            return numero1 / numero2;
        },
        'calcularResultadoAcumulado': (calculadora, inputResultado) => {

            switch (calculadora.buttonCalculPulsado) { //Comprobar que boton de calculo se ha pulsado previamente
                case '+':
                    return calculadora.sumar(parseFloat(calculadora.resultadoAcumulado), parseFloat(inputResultado.value));
                case '-':
                    return calculadora.restar(parseFloat(calculadora.resultadoAcumulado), parseFloat(inputResultado.value));
                case 'x':
                    return calculadora.multiplicar(parseFloat(calculadora.resultadoAcumulado), parseFloat(inputResultado.value));
                case '/':
                    return calculadora.dividir(parseFloat(calculadora.resultadoAcumulado), parseFloat(inputResultado.value));
            }
        },
        'clickButtoncalculadora': function () {
            let simbol = this.innerText;
            switch (simbol) {
                case 'CE': //Borrarlo todo
                    calculadora.inputResultado.value = '0';
                    calculadora.buttonCalculPulsado = '';
                    calculadora.resultadoAcumulado = 0;
                    break;
                case 'C': //Borrarlo un caracter
                    let cadenaRecortada = calculadora.inputResultado.value.slice(0, calculadora.inputResultado.value.length - 1);
                    if (cadenaRecortada == 0 || inputResultado.value.split('').indexOf('-') != -1) {
                        calculadora.inputResultado.value = 0;
                    } else {
                        calculadora.inputResultado.value = cadenaRecortada;
                    }


                    break;
                case '%': //Pasar a porcentaje
                    if (calculadora.inputResultado.value != '')
                        calculadora.inputResultado.value = parseFloat(calculadora.inputResultado.value) / 100;

                    break;
                case '+':
                case '-':
                case 'x':
                case '/':
                    if (calculadora.inputResultado.value != '') {
                        if (calculadora.buttonCalculPulsado != '') {
                            calculadora.resultadoAcumulado = calculadora.calcularResultadoAcumulado(calculadora, calculadora.inputResultado);
                            calculadora.buttonCalculPulsado = simbol;
                            calculadora.inputResultado.value = calculadora.resultadoAcumulado;
                        } else {
                            calculadora.resultadoAcumulado = parseFloat(calculadora.inputResultado.value);
                            calculadora.buttonCalculPulsado = simbol;
                            calculadora.inputResultado.value = calculadora.resultadoAcumulado;
                        }
                    }

                    break;
                case '+/-': //Convertir en negativo / positivo
                    if (calculadora.inputResultado.value != '' && calculadora.inputResultado.value != '0') {
                        let primerCaracter = calculadora.inputResultado.value.slice(0, 1);
                        if (primerCaracter == '-')
                            calculadora.inputResultado.value = calculadora.inputResultado.value.replace('-', '');
                        else
                            calculadora.inputResultado.value = '-' + calculadora.inputResultado.value;
                    }

                    break;
                case '.':
                    if (calculadora.inputResultado.value != '' && calculadora.inputResultado.value.match(/\./g) != '.') { //comprobar que contenga algo el input y a su vez no exista un punto
                        calculadora.inputResultado.value = calculadora.inputResultado.value + '.';
                    }
                    break;
                case '=':
                    if (calculadora.buttonCalculPulsado != '' && calculadora.inputResultado.value.length > 0) {
                        calculadora.resultadoAcumulado = calculadora.calcularResultadoAcumulado(calculadora, calculadora.inputResultado);
                        calculadora.inputResultado.value = calculadora.resultadoAcumulado;
                        calculadora.buttonCalculPulsado = '';
                    } else {
                        calculadora.buttonCalculPulsado = '';
                        calculadora.inputResultado.value = calculadora.resultadoAcumulado;
                    }

                    break;
                default: //Cualquier otra tecla(0,1,2,3,4...)

                    if (calculadora.inputResultado.value == '0' || calculadora.buttonCalculPulsado != '')
                        calculadora.inputResultado.value = simbol;
                    else
                        calculadora.inputResultado.value += simbol;

                    break;


            }

        }

    };

    calculadora.dibujarcalculadora();

}