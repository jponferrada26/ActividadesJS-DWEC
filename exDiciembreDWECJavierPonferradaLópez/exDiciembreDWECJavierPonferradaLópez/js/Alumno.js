// Javier Ponferrada López
function Alumno(nombre, primerApellido, segundoApellido, fechaNacimiento) {
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.fechaNacimiento = fechaNacimiento;
    this.mostrar();
}

Alumno.prototype.getNombre = function () {
    return this.nombre;
};

Alumno.prototype.getPrimerApellido = function () {
    return this.primerApellido;
};

Alumno.prototype.getSegundoApellido = function () {
    return this.segundoApellido;
};

Alumno.prototype.getFechaNacimiento = function () {
    return this.fechaNacimiento;
};

Alumno.prototype.getEdad = function () {
    let fechaNacimientoSplit =  this.getFechaNacimiento().split('-');
    let fechaNacimiento = new Date(fechaNacimientoSplit[2],fechaNacimientoSplit[1],fechaNacimientoSplit[0]);
    let fechaActual = new Date();
    let edad;
    edad = parseInt(fechaActual.getFullYear()) - parseInt(fechaNacimiento.getFullYear());
    if (edad < 1)
        throw {
            'message': 'No se ha podido calcular la edad (Todavia no has nacido)'
        };
    else
        return edad;
};

Alumno.prototype.mostrar = function () {
    let edad;
    try {
        edad = this.getEdad();
    } catch (e) {
        edad = e.message;
    }

    let nuevaVentana = window.open('', '_black', 'width=300,height=200');
    nuevaVentana.document.write('<html><head>' +
        '<meta charset="UTF-8"/><title>JavierPonferradaLópez</title><link rel="stylesheet" href="css/style.css">' +
        '</head>' +
        '<body>' +
        '<h1>Javier Ponferrada López</h1>' +
        '<p>Nombre: ' + this.getNombre() + '</p>' +
        '<p>Primer apellido: ' + this.getPrimerApellido() + '</p>' +
        '<p>Segundo apellido: ' + this.getSegundoApellido() + '</p>' +
        '<p>Fecha nacimiento: ' + this.getFechaNacimiento() + '</p>' +
        '<p>Edad: ' + edad + ' años</p>' +
        '</body>' +
        '</html>'
    );
    nuevaVentana.document.close();

};