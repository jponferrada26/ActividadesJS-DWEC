/**
 * Componentes web
 * @author Javier Ponferrada López
 */
componentes = (function () {
    /** 
     * Componente
     * @return componente menu dias de la semana del programa.
     */
    function c_diasSemana() {
        return `
            <article id="diasSemana_programa">
                <ul>
                    <li><a href="lunes" id="itemLunes" class="itemDiaPrograma">Lunes</a></li>
                    <li><a href="martes" class="itemDiaPrograma">Martes</a></li>
                    <li><a href="miercoles" class="itemDiaPrograma">Miércoles</a></li>
                    <li><a href="jueves" class="itemDiaPrograma">Jueves</a></li>
                    <li><a href="viernes" class="itemDiaPrograma">Viernes</a></li>
                </ul>
            </article>
        `;
    }

    /**
     * Componente
     * @return compoenente de una ponencia con los datos introducidos.
     * @param {*} nombrePonencia 
     * @param {*} hora 
     * @param {*} localizacion 
     * @param {*} ponentes 
     * @param {*} empresa 
     * @param {*} descripcion 
     */
    function c_ponenciaPrograma(nombrePonencia, hora, localizacion, ponentes, empresa, descripcion, imagenPonente) {
        return `
            <h3 title="` + nombrePonencia + `">` + nombrePonencia + `</h3>
            <article class="ponencia_programa">
                <div class="containerLeftPonencia">
                    <div class="containerImgPonentePonencia">
                        <img src="` + imagenPonente + `" class="imagenPonentePonencia"/>
                    </div>
                </div>
                <div class="containerRightPonencia">
                    <p class="nombrePonencia">` + nombrePonencia + `</p>
                    <div class="infoIconsPonencia">
                        <p class="horaPonencia">
                            <i class="far fa-clock"></i>` + hora + `</p>
                        <p class="localPonencia">
                            <i class="fas fa-map-marker"></i>` + localizacion + `</p>
                        <p class="nombrePonentesPonencia">
                            <i class="far fa-comments"></i>` + ponentes + `</p>
                        <p class="empresaPonentePonencia">
                            <i class="far fa-building"></i>` + empresa + `</p>
                    </div>
                    
                    <p class="descripcionPonencia">` + descripcion + `</p>
                    <a class="btnQuieroIrPonencia"><i class="fas fa-assistive-listening-systems"></i>Asistir</a>
                </div>
            </article>
        `;
    }

    /**
     * Componente
     * @return componente de un ponente con los datos introducidos.
     * @param {*} nombre 
     * @param {*} nombrePonencia 
     * @param {*} imgPonente 
     */
    function c_ponente(nombre, nombrePonencia, imgPonente) {
        return `
            <article class="ponente">
                <div class="containerInsidePonente">
                    <img src="` + imgPonente + `" alt="" class="imagenPonenteView">
                    <div class="containerInfoPonente">
                        <p class="nombrePonenteView">` + nombre + `</p>
                        <p class="nombrePonenciaView">` + nombrePonencia + `</p>
                    </div>
                </div>
            </article>
        `;
    }

    /** 
     * Componente
     * @return componente del formulario registro para los asistentes.
     */
    function c_registroAsistente() {
        return `
            <section id="containerRegistroAsist">
                    <div id="containerTitleRegisAsist">
                        <p id="titleRegisAsist">Regístrate para disfrutar de la charla</p>
                    </div>
                    <div id="formRegistroAsist">
                        <div class="containerInput">
                            <label for="nombreRegistAsist">Nombre</label>
                            <input id="nombreRegistAsist" class="inputNomApellReAs" type="text">
                            <span class="errorMsg" id="errorMsgNombreRegistAsist"></span>
                        </div>

                        <div class="containerInput">
                            <label for="apellidoRegistAsist">Apellidos</label>
                            <input id="apellidoRegistAsist" class="inputNomApellReAs" type="text">
                            <span class="errorMsg" id="errorMsgApellidoRegistAsist"></span>
                        </div>

                        <div class="containerInput">
                            <label for="correoRegistAsist">Correo</label>
                            <input id="correoRegistAsist" type="text">
                            <span class="errorMsg" id="errorMsgCorreoRegistAsist"></span>
                        </div>

                        <div class="containerInput">
                            <label for="dniRegistAsist">DNI</label>
                            <input id="dniRegistAsist" type="text">
                            <span class="errorMsg" id="errorMsgDniRegistAsist"></span>
                        </div>
                        
                        <div class="containerInput">
                            <label for="procedRegistAsist">Procedencia</label>
                            <select name="" id="procedRegistAsist">
                                <option value="instituto">Instituto</option>
                                <option value="universidad">Universidad</option>
                                <option value="empresa">Empresa</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <input type="submit" id="btnSubmitRegistroAsist" value="Registrar">
                    </div>
                    
            </section>
        `;
    }

    /** 
     * Componente
     * @return componente del formulario para el login de los ponentes.
     */
    function c_loginPonente() {
        return `
            <section id="containerLoginPonente">
                <div id="containerTitleLoginPonente">
                    <p id="titleLogPonen">¿Eres ponente?</p>
                </div>
                <div id="formLoginPonente">
                    <div class="containerInput">
                        <label for="usuaLogPonen">Usuario</label>
                        <input id="usuaLogPonen" type="text">
                        <span class="errorMsg" id="errorMsgUsuarioLoginPon"></span>
                    </div>
        
                    <div class="containerInput">
                        <label for="contraseLogPonen">Contraseña</label>
                        <input id="contraseLogPonen" type="password">
                        <span class="errorMsg" id="errorMsgContrasenaLoginPon"></span>
                    </div>
                    <input type="submit" id="btnSubmitLoginPonent" value="Iniciar sesión">
                </div>
            </section>
        `;
    }

    /** 
     * Componente
     * @return componente del formulario para el registro de ponentes.
     */
    function c_modificarPonente() {
        return `
            <section id="containerModifPonent">
                <div id="formModifPonent">
                    <div class="containerInput">
                        <label for="nombreModifPonent">Nombre</label>
                        <input id="nombreModifPonent" type="text">
                        <span class="errorMsg" id="errorMsgNomModifPon"></span>
                    </div>

                    <div class="containerInput">
                        <label for="apellidoModifPonent">Apellidos</label>
                        <input id="apellidoModifPonent" type="text">
                        <span class="errorMsg" id="errorMsgApellModifPon"></span>
                    </div>

                    <div class="containerInput">
                        <label for="procedModifPonent">Procedencia</label>
                        <select name="" id="procedModifPonent">
                            <option value="instituto">Instituto</option>
                            <option value="universidad">Universidad</option>
                            <option value="empresa">Empresa</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div class="containerInput">
                        <label for="patrocinioModifPonent">Posibilidad patrocinio</label>
                        <input id="patrocinioModifPonent" type="checkbox" checked>
                    </div>
                    <div id="containerPrefeModfPonent">
                        <div class="containerInput">
                            <label for="diasInicioPrefeModifPonent">Día inicio</label>
                            <input id="diasInicioPrefeModifPonent" type="text">
                            <span class="errorMsg" id="errorMsgDiaInicioPrModifPon"></span>
                        </div>
                        <p>a</p>
                        <div class="containerInput">
                            <label for="diasFinPrefeModifPonent">Día fin</label>
                            <input id="diasFinPrefeModifPonent" type="text">
                            <span class="errorMsg" id="errorMsgDiaFinPrModifPon"></span>
                        </div>
                    </div>

                    <div class="containerInput">
                        <label for="usuarioModifPonent">Usuario</label>
                        <input id="usuarioModifPonent" type="text">
                        <span class="errorMsg" id="errorMsgUsuModifPon"></span>
                    </div>

                    <div class="containerInput">
                        <label for="contrasModifPonent">Contraseña</label>
                        <input id="contrasModifPonent" type="password">
                        <span class="errorMsg" id="errorMsgPassModifPon"></span>
                    </div>

                    <div class="containerInput">
                        <label for="obserModifPonent">Observaciones</label>
                        <textarea name="" id="obserModifPonent"></textarea>
                        <span class="errorMsg" id="errorMsgObseModifPon"></span>
                    </div>

                    <input type="submit" id="btnSubmitModifPonent" value="Modificar">
                </div>
            </section>
        `;
    }

    function c_antiguaSysmana(rutaImg) {
        return `
            <article class="containerImgAntiguaSysmana">
                <img src="`+rutaImg+`" class="imgAntiguaSysmana" alt="">
            </article>
        `;
    }

    function c_registroPonencia() {
        return `
            <section id="containerCrearPonenc">
                <div id="formCrearPonenc">
                    <div class="containerInput">
                        <label for="nombreCrearPonenc">Nombre ponencia</label>
                        <input id="nombreCrearPonenc" type="text">
                        <span class="errorMsg" id="errorMsgNombCrePonen"></span>
                    </div>

                    <div class="containerInput">
                        <label for="urlImagenCrearPonenc">URL imagen</label>
                        <input id="urlImagenCrearPonenc" type="file">
                        <span class="errorMsg" id="errorMsgImgCrePonen"></span>
                    </div>
                    
                    <div class="containerInput">
                        <label for="materialPoneCrearPonenc">Material ponente</label>
                        <input id="materialPoneCrearPonenc" type="text">
                        <span class="errorMsg" id="errorMsgMaterPoneCrePonen"></span>
                    </div>

                    <div class="containerInput">
                        <label for="materialAsistCrearPonenc">Material asistentes</label>
                        <input id="materialAsistCrearPonenc" type="text">
                        <span class="errorMsg" id="errorMsgMaterAsisCrePonen"></span>
                    </div>

                    <div class="containerInput">
                        <label for="numAsistCrearPonenc">Nº de asistentes recomendable</label>
                        <input id="numAsistCrearPonenc" type="number">
                        <span class="errorMsg" id="errorMsgNumAsiCrePonen"></span>
                    </div>

                    <div class="containerInput">
                        <label for="descrBreCrearPonenc">Descripción breve</label>
                        <input name="" id="descrBreCrearPonenc"/>
                        <span class="errorMsg" id="errorMsgDesBrCrePonen"></span>
                    </div>

                    <div class="containerInput">
                        <label for="descrExteCrearPonenc">Descripción extensa</label>
                        <textarea name="" id="descrExteCrearPonenc"></textarea>
                        <span class="errorMsg" id="errorMsgDescExCrePonen"></span>
                    </div>

                    <input type="submit" id="btnSubmitCrearPonenc" value="Crear">
                </div>
            </section>
        `;
    }

    return {
        c_diasSemana: c_diasSemana,
        c_loginPonente: c_loginPonente,
        c_ponenciaPrograma: c_ponenciaPrograma,
        c_ponente: c_ponente,
        c_registroAsistente: c_registroAsistente,
        c_modificarPonente: c_modificarPonente,
        c_registroPonencia: c_registroPonencia,
        c_antiguaSysmana:c_antiguaSysmana
    }
})();