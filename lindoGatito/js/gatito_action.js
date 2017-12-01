{
    let clickActionCat = function () {
        let buttonPushed = this;
        switch (buttonPushed.id) {
            case "btn_comer":
                gato.comer();
                break;
            case "btn_dormir":
                gato.dormir();
                break;
            case "btn_jugar":
                gato.jugar();
                break;
        }
        comprobarSiHaMuerto()
        actualizarPeso();
        changeImgStatusCat();
    }

    let comprobarSiHaMuerto = function (){
        if(gato.isMuerto()){
            contenedorBotones.style.display = 'none';
            msgCatDead.style.visibility = 'visible';
            msgCatDead.style.opacity = '1';
        }
            
    }

    let desableContentMsgDead = function(){
        msgCatDead.style.visibility = 'hidden';
        msgCatDead.style.opacity = '0';
    }

    let actualizarPeso = function () {
        pesoCat.innerHTML = gato.getPeso();
    };

    let actualizarGato = function () {
        nombreGato.innerHTML = gato.getNombre();
        razaGato.innerHTML = gato.getRaza();
        edad.innerHTML = gato.getEdad();
        pesoCat.innerHTML = gato.getPeso();
    }

    let changeImgStatusCat = function () {
        switch (gato.getEstado()) {
            case "Muerto":
                img_status_cat.src = "img/cat-muerto.png";
                break;
            case "Comiendo":
                img_status_cat.src = "img/cat-comiendo.png";
                break;
            case "Jugando":
                img_status_cat.src = "img/cat-jugando.png";
                break;
            default:
                img_status_cat.src = "img/cat-durmiendo.png";
                break;
        }
    }
    let gato = window.document.gatito;
    let msgCatDead = document.getElementById('content_msg_cat_dead');
    let contenedorBotones = document.getElementById('content_action_cat');
    document.getElementById('btn_ok').addEventListener('click',desableContentMsgDead,false);

    document.getElementById("btn_comer").addEventListener("click", clickActionCat, false);
    document.getElementById("btn_dormir").addEventListener("click", clickActionCat, false);
    document.getElementById("btn_jugar").addEventListener("click", clickActionCat, false);
    document.getElementById("btn_salir").addEventListener("click", function () {
        window.close();
    }, false);

    let img_status_cat = document.getElementById("img_status_cat");

    let nombreGato = document.getElementById("nombreGato");
    let razaGato = document.getElementById("razaGato");
    let edad = document.getElementById("fechaNacimiento");
    let pesoCat = document.getElementById("pesoCat");
    actualizarGato();
    changeImgStatusCat();

}