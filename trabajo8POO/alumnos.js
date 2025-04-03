"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumno = void 0;
var alumno = /** @class */ (function () {
    function alumno(pNombre, pApellido, pNota, pAprovado) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.nota = pNota;
        this.aprovado = pAprovado;
    }
    //set y get
    //nombre
    alumno.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    //apellido
    alumno.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    //nota
    alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    alumno.prototype.getNota = function () {
        return this.nota;
    };
    //aprovado
    alumno.prototype.setAprovado = function (pAprovado) {
        this.aprovado = pAprovado;
    };
    alumno.prototype.getAprovado = function () {
        return this.aprovado;
    };
    //notas
    alumno.prototype.notas = function () {
        if (this.nota >= 7) {
            this.aprovado = true;
            console.log("".concat(this.nombre, " ").concat(this.apellido, " notas ").concat(this.nota, " usted esta aprovado."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " notas ").concat(this.nota, " usted esta desaprovado."));
        }
    };
    return alumno;
}());
exports.alumno = alumno;
