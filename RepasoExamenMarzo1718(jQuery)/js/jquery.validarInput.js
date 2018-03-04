jQuery.fn.validarInut = function (opciones) {
    let elemenThis = $(this);
    let patron = opciones.patron;
    let mensaje = opciones.mensaje;
    let contenedor = opciones.contenedor;
    let type = opciones.type;

    let fechaReal = function(date,datos){
        return (datos.anio == date.getFullYear() && datos.mes == date.getMonth() && datos.dia == date.getDate());
    };

    elemenThis.on('blur', function () {
        if (elemenThis.val() == "") {
            contenedor.text("Campo vacío.");
        } else {
            switch (type) {
                case 'date':
                    if (!patron.test(elemenThis.val())) {
                        contenedor.text(mensaje);
                    }else {
                        let dateSplit = elemenThis.val().split('-');
                        let dia = parseInt(dateSplit[0]);
                        let mes = parseInt(dateSplit[1]-1);
                        let anio = parseInt(dateSplit[2]);
                        let date = new Date(anio,mes,dia);
                        if(date == 'Invalid Date' || !fechaReal(date,{dia,mes,anio}))
                            contenedor.text("Fecha no real");
                        else
                            contenedor.empty();
                    }
                    break;
                case 'text':
                    if (!patron.test(elemenThis.val()))
                        contenedor.text(mensaje);
                    else 
                        contenedor.empty();
                    break;
            }

        }

    });


    return elemenThis;
};