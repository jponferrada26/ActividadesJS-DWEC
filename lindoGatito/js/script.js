{
    /**
     * Comprobar que el nombre del gato sea correcto
     */
    let checkNombre = () => {
        if (/^([a-z\dáéíóúÁÉÍÓÚüöÖÜ]\s?){2,}$/i.test(nombreCatCreation.value)) {
            nombreCatCreation.style.borderColor = '#7c4882';
            msgErrorNombre.innerText = '';
            return true;
        } else {
            msgErrorNombre.innerText = 'Nombre incorrecto ';
            nombreCatCreation.style.borderColor = '#ff2d2d';
            return false;
        }

    }

    /**
     * Comprobar que la fecha de nacimiento sea correcta
     */
    let checkFecha = () => {
        let fecha = new Date(fechaNacimientoCreation.value);
        if (fecha != 'Invalid Date' && fecha.getTime() <= Date.now()) {
            fechaNacimientoCreation.style.borderColor = '#7c4882';
            msgErrorFecha.innerText = '';
            return true;
        } else {
            msgErrorFecha.innerText = 'Fecha incorrecta ';
            fechaNacimientoCreation.style.borderColor = '#ff2d2d';
            return false;
        }

    }

    let checkPeso = () => {
        if (/^[0-9]+$/.test(pesoCatCreation.value) && pesoCatCreation.value >= Gatito.prototype.MIN_PESO && pesoCatCreation.value <= Gatito.prototype.MAX_PESO) {
            pesoCatCreation.style.borderColor = '#7c4882';
            msgErrorPeso.innerText = '';
            return true;
        } else {
            msgErrorPeso.innerText = 'Peso incorrecto entre (' + Gatito.prototype.MIN_PESO + ' - ' + Gatito.prototype.MAX_PESO + ') kg';
            pesoCatCreation.style.borderColor = '#ff2d2d';
            return false;
        }

    }


    let buttonSubmitCreateCat = document.getElementById('btn_createCat');
    let msgErrorNombre = document.getElementById('msgErrorNombre');
    let msgErrorFecha = document.getElementById('msgErrorFecha');
    let msgErrorPeso = document.getElementById('msgErrorPeso');

    let nombreCatCreation = document.getElementById('nombreCatCreation');
    let fechaNacimientoCreation = document.getElementById('fechaNacimientoCreation');
    let raza = document.getElementById('raza');
    let pesoCatCreation = document.getElementById('pesoCatCreation');
    nombreCatCreation.addEventListener('blur',checkNombre,false);
    fechaNacimientoCreation.addEventListener('blur',checkFecha,false);
    pesoCatCreation.addEventListener('blur',checkPeso,false);
    

    buttonSubmitCreateCat.addEventListener('click', function () {

        if (checkNombre() && checkPeso() && checkFecha()) {
            let newWindow = window.open('', '_blank', 'width=1000,height=700');
            newWindow.document.write('<html lang="es"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="author" content="Javier Ponferrada López"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <link rel="stylesheet" href="css/style.css"> <link rel="stylesheet" href="css/style_gato.css"> <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> <title>Gatito</title> <script src="js/Gatito.js"></script> </head> <body> <main> <div id="content_createCat"> <button class="btn" id="btn_salir">Salir</button> <p class="title">Gatito</p> <img class="img_cat" id="img_status_cat" src="img/cat.png" alt=""> <div id="content_action_cat"> <button id="btn_dormir" class="btn">Dormir</button> <button id="btn_comer" class="btn">Comer</button> <button id="btn_jugar" class="btn">Jugar</button> </div> <div class="content_inputCreateCat"> <label>Nombre</label> <p id="nombreGato"></p> </div> <div class="content_inputCreateCat"> <label>Raza</label> <p id="razaGato"></p> </div> <div class="content_inputCreateCat"> <label>Edad</label> <p id="fechaNacimiento"></p> </div> <div class="content_inputCreateCat"> <label>Peso kg</label> <p id="pesoCat"></p> </div> <div id="content_msg_cat_dead"> <p>Ups, Has matado al gato :(</p> <button id="btn_ok" class="btn">Ok</button> </div> </div> </main> </body> <script src="js/gatito_action.js"></script> </html>');
            newWindow.document.gatito = new Gatito(nombreCatCreation.value, raza.value, fechaNacimientoCreation.value, pesoCatCreation.value);
            newWindow.document.close();
        }
    }, false);
}