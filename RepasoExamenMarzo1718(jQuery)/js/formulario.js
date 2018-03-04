{
    let init = function(){
        $('#inputNombre').validarInut({
            patron:/^\w{3,}$/i,
            mensaje:'El formato del nombre no es correcto.',
            contenedor:$('#errorNombre'),
            type:'text'
        });

        $('#inputPrimerApellido').validarInut({
            patron:/^[a-záéíóúñ]{3,}$/i,
            mensaje:'El formato del apellido no es correcto.',
            contenedor:$('#errorPrimerApe'),
            type:'text'
        });

        $('#inputSegundoApellido').validarInut({
            patron:/^[a-záéíóúñ]{3,}$/i,
            mensaje:'El formato del apellido no es correcto.',
            contenedor:$('#errorSegundApe'),
            type:'text'
        });

        $('#inputFecha').validarInut({
            patron:/^\d{2}\-\d{2}\-\d{4}$/i,
            mensaje:'Formato de fecha incorrecto.',
            contenedor:$('#errorFecha'),
            type:'date'
        });

        $('#btnCrearAlumno').on('click',function(){
            $('#inputNombre').trigger('blur');
            $('#inputPrimerApellido').trigger('blur');
            $('#inputSegundoApellido').trigger('blur');
            $('#inputFecha').trigger('blur');
            if($('.errorForm:not(:empty)').length == 0)
                new Alumno($('#inputNombre').val(),$('#inputPrimerApellido').val(),$('#inputSegundoApellido').val(),$('#inputFecha').val());
            
        });

        $('#btnLimpiarAlumno').on('click',function(){
            $('#inputNombre').val('');
            $('#inputPrimerApellido').val('');
            $('#inputSegundoApellido').val('');
            $('#inputFecha').val('');
        });
    };
    
    $(init);
}