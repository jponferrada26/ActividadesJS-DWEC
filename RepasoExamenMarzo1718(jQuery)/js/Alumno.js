function Alumno(nombre, apellido1, apellido2, fechaNacimi) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.fechaNacimi = fechaNacimi;
    this.mostrarAlumno();
}

Alumno.prototype.mostrarAlumno = function () {
    let nuevaVentana = window.open('', 'width=300 height=200');
    nuevaVentana.document.write(`
        <head>
            <meta charset="UTF-8"/>
            <script src="js/jquery-3.3.1.min.js"></script>
            <link rel="stylesheet" href="css/styles.css">
            <title>Alumno</title>
        </head>

        <main>
            <h1>Alumno</h1>
            <p>Nombre: ` + this.nombre + `</p>
            <p>Apellido1: ` + this.apellido1 + `</p>
            <p>Apellido2: ` + this.apellido2 + `</p>
            <p>Edad: ` + this.getEdad(this.fechaNacimi) + `años</p>
        </main>
    `);
    nuevaVentana.document.close();
};

Alumno.prototype.getEdad = function (date) {
    let dateSplit = date.split('-');
    let dia = dateSplit[0];
    let mes = dateSplit[1];
    let anio = dateSplit[2];
    let dateNow = new Date();
    let dateNacimiento = new Date(anio, mes, dia);

    return dateNow.getFullYear() - dateNacimiento.getFullYear();
};