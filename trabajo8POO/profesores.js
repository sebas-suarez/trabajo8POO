"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profesor = void 0;
var profesor = /** @class */ (function () {
    function profesor(pNombre, pApellido, pMateria, pListaAlumnos) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.listaAlumnos = pListaAlumnos;
    }
    //set y get
    //nombre
    profesor.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    //apellido
    profesor.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    //materia
    profesor.prototype.setMateria = function (pMateria) {
        this.materia = pMateria;
    };
    profesor.prototype.getMateria = function () {
        return this.materia;
    };
    //listaAlumnos
    profesor.prototype.setListaAlumnos = function (pListaAlumnos) {
        this.listaAlumnos = pListaAlumnos;
    };
    profesor.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    profesor.prototype.listarAlumnos = function () {
        console.log("".concat(this.getNombre(), " ").concat(this.getApellido(), " - Alumnos: "));
        for (var i = 0; i < this.listaAlumnos.length; i++) {
            console.log("\n        id:".concat(i + 1, " nombre:").concat(this.listaAlumnos[i].getNombre(), "  apellido:").concat(this.listaAlumnos[i].getApellido(), " Nota:").concat(this.listaAlumnos[i].getNota()));
        }
    };
    return profesor;
}());
exports.profesor = profesor;
