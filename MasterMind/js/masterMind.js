//Master Mind Javier Ponferrada López
mastermind = (function () {
    let lineaOrigen;
    let copiaLineaOrigen;
    let colorEsta;
    let colorEnSuSitio;
    let numIntentos;


    let colores = ['rojo', 'blanco', 'negro', 'amarillo', 'naranja', 'marron', 'azul', 'verde'];

    function genearColor() {
        return colores[Math.floor(Math.random() * colores.length)];
    }

    function init() {
        lineaOrigen = [];
        numIntentos = 0;
        for (let i = 0; i < 4; i++) {
            lineaOrigen.push(genearColor());
        }
    }

    function comprobarEstado(comprobar) {
        copiaLineaOrigen = lineaOrigen.slice();
        colorEsta = 0;
        colorEnSuSitio = 0;
        if (Array.isArray(comprobar)) {
            comprobar.forEach(function (element, index) {
                if (copiaLineaOrigen[index] == element) {
                    copiaLineaOrigen[index] = 0;
                    comprobar[index] = 1;
                    colorEnSuSitio++;
                }
            });

            comprobar.forEach(function (element, index) {
                let inidiceOrigen = copiaLineaOrigen.indexOf(element);
                if (inidiceOrigen != -1) {
                    copiaLineaOrigen[inidiceOrigen] = 0;
                    colorEsta++;
                }
            });

        }
        return {
            copiaLineaOrigen: copiaLineaOrigen,
            colorEsta: colorEsta,
            colorEnSuSitio: colorEnSuSitio
        }
    }

    function getNumIntentos() {
        return numIntentos;
    }

    function incrementarIntentos() {
        numIntentos++;
    }

    function mostrar() {
        console.log(lineaOrigen);
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobarEstado: comprobarEstado,
        getNumIntentos: getNumIntentos,
        incrementarIntentos: incrementarIntentos
    }

})();