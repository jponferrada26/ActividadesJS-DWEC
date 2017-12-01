function Gatito(nombre, raza, fechaNacimiento, peso) {
    this.estado = 'Durmiendo';
    this.setNombre(nombre);
    this.setRaza(raza);
    this.setEdad(fechaNacimiento);
    this.setPeso(peso);
}
Gatito.prototype.MAX_PESO = 15;
Gatito.prototype.MIN_PESO = 1;

Gatito.prototype.getEstado = function () {
    return this.estado;
}

Gatito.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
}

Gatito.prototype.getNombre = function () {
    return this.nombre;
}

Gatito.prototype.setRaza = function (raza) {
    this.raza = raza;
}

Gatito.prototype.getRaza = function () {
    return this.raza;
}

Gatito.prototype.setEdad = function (fechaNacimiento) {
    let milisegundosDif = Date.now() - new Date(fechaNacimiento).getTime();
    let aniosDif = Math.trunc((((((milisegundosDif / 1000) / 60) / 60) / 24) / 365)); //número de años
    let mesesDif = Math.trunc((((((milisegundosDif / 1000) / 60) / 60) / 24) / 27)); //número de meses
    let diasDif = Math.trunc(((((milisegundosDif / 1000) / 60) / 60) / 24)); //número de dias

    if (aniosDif > 0)
        this.edad = aniosDif + ' año/s';
    else if (mesesDif > 0)
        this.edad = mesesDif + ' mes/es';
    else
        this.edad = diasDif + ' dia/s';
}

Gatito.prototype.getEdad = function () {
    return this.edad;
}

Gatito.prototype.setPeso = function (peso) {
    this.peso = Math.round(peso * 100) / 100;
    if (this.isMuerto())
        this.estado = 'Muerto';        

}

Gatito.prototype.getPeso = function () {
    return this.peso;
}


Gatito.prototype.comer = function () {
    this.setPeso(this.getPeso() + 0.70);
    if (!this.isMuerto())
        this.estado = 'Comiendo';
}

Gatito.prototype.jugar = function () {
    this.setPeso(this.getPeso() - 0.50);
    if (!this.isMuerto())
        this.estado = 'Jugando';
}

Gatito.prototype.dormir = function () {
    if (!this.isMuerto())
        this.estado = 'Durmiendo';
}

Gatito.prototype.isMuerto = function () {
    return this.getPeso() > this.MAX_PESO || this.getPeso() < this.MIN_PESO;
}