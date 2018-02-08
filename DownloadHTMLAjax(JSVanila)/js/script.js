let urlServer, containerInsideContenidosArchivo, btnMostrarContenidos, containerInsideEstadoPeticion, containerInsideCabeceras, containerInsideCodigosEstado;

let vaciarElementosDOM = function () {
    containerInsideEstadoPeticion.innerHTML = '';
    containerInsideCodigosEstado.innerHTML = '';
    containerInsideContenidosArchivo.innerText = '';
    containerInsideCabeceras.innerText = '';
};

let escribirEstado = function (httpRequest) {
    switch (httpRequest.readyState) {
        case 0: //UNINITIALIZED
            containerInsideEstadoPeticion.insertAdjacentHTML('beforeend', '<li>NO INICIADA</li>');
            break;
        case 1: //LOADING
            containerInsideEstadoPeticion.insertAdjacentHTML('beforeend', '<li>CARGANDO/li>');
            break;
        case 2: //LOADED
            containerInsideEstadoPeticion.insertAdjacentHTML('beforeend', '<li>CARGADO</li>');
            break;
        case 3: //INTERACTIVE
            containerInsideEstadoPeticion.insertAdjacentHTML('beforeend', '<li>INTERACTIVO</li>');
            break;
        case 4: //COMPLETE
            containerInsideEstadoPeticion.insertAdjacentHTML('beforeend', '<li>COMPLETADO</li>');
            containerInsideContenidosArchivo.innerText = httpRequest.responseText;
            containerInsideCabeceras.innerText = httpRequest.getAllResponseHeaders();
            break;
    }
    containerInsideCodigosEstado.insertAdjacentHTML('beforeend', '<li>' + httpRequest.readyState + '</li>');
};

let escribirContenido = function () {
    vaciarElementosDOM();
    let httpRequest = new XMLHttpRequest();
    let tiempoPeticion = new Date();
    httpRequest.open('GET', urlServer.value, true);
    httpRequest.onreadystatechange = function (aEvt) {
        if (httpRequest.status == 200)
            escribirEstado(httpRequest);
    };
    httpRequest.send(null);


};

let init = function () {
    urlServer = document.getElementById('urlServer');


    containerInsideContenidosArchivo = document.getElementById('containerInsideContenidosArchivo');

    btnMostrarContenidos = document.getElementById('btnMostrarContenidos');
    btnMostrarContenidos.addEventListener('click', escribirContenido);

    containerInsideEstadoPeticion = document.getElementById('containerInsideEstadoPeticion');

    containerInsideCabeceras = document.getElementById('containerInsideCabeceras');

    containerInsideCodigosEstado = document.getElementById('containerInsideCodigosEstado');
};


window.onload = init;