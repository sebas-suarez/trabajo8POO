"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escuela = void 0;
var escuela = /** @class */ (function () {
    function escuela(pNombre, pDireccion, pProfesores, pAlumnos, pAulas) {
        this.nombre = pNombre;
        this.direccion = pDireccion;
        this.profesores = pProfesores;
        this.alumnos = pAlumnos;
        this.aulas = pAulas !== null && pAulas !== void 0 ? pAulas : 2;
    }
    //set y gets
    //nombre
    escuela.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    //direccion
    escuela.prototype.setDireccion = function (pDireccion) {
        this.direccion = pDireccion;
    };
    escuela.prototype.getDireccion = function () {
        return this.direccion;
    };
    //aulas
    escuela.prototype.setAulas = function (pAulas) {
        this.aulas = pAulas;
    };
    escuela.prototype.getAulas = function () {
        return this.aulas;
    };
    //profesores
    escuela.prototype.setProfesores = function (pProfesores) {
        this.profesores = pProfesores;
    };
    escuela.prototype.getProfesores = function () {
        return this.profesores;
    };
    //alumnos
    escuela.prototype.setAlumnos = function (pAlumnos) {
        this.alumnos = pAlumnos;
    };
    escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    escuela.prototype.registroAlumnos = function () {
        console.log("".concat(this.getNombre(), " - Alumnos: "));
        for (var i = 0; i < this.alumnos.length; i++) {
            console.log("\n        id:".concat(i + 1, " nombre:").concat(this.alumnos[i].getNombre(), "  apellido:").concat(this.alumnos[i].getApellido(), " Nota:").concat(this.alumnos[i].getNota()));
        }
    };
    escuela.prototype.registroProfesores = function () {
        console.log("".concat(this.getNombre(), " - Profesores: "));
        for (var i = 0; i < this.profesores.length; i++) {
            console.log("\n        id:".concat(i + 1, " nombre:").concat(this.profesores[i].getNombre(), "  apellido:").concat(this.profesores[i].getApellido(), " Materia:").concat(this.profesores[i].getMateria()));
        }
    };
    escuela.prototype.despedir = function (id) {
        this.profesores.splice(id - 1, 1);
    };
    escuela.prototype.expulsar = function (id) {
        this.alumnos.splice(id - 1, 1);
    };
    escuela.prototype.contratar = function (profeNuevo) {
        this.profesores.push(profeNuevo);
    };
    escuela.prototype.matricular = function (alumnoNuevo) {
        this.alumnos.push(alumnoNuevo);
    };
    return escuela;
}());
exports.escuela = escuela;
