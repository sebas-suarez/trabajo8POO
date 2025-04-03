import { alumno } from "./alumnos";
import { profesor } from "./profesores";
import { escuela } from "./escuela";

let alumno1 = new alumno('David','juarez',8,true);
let alumno2 = new alumno('David','Jimenez',0,false);
let lista1:alumno[] = [alumno1];
let lista2:alumno[] = [alumno1,alumno2];
alumno2.setNota(6);

let profesorBeto = new profesor('Beto','elProfe','POO',lista1);
let profesorRaul = new profesor('Raul','ElOtroProfe','Apis',lista2);
let profesores1:profesor[]=[profesorBeto,profesorRaul];

let escuela1 = new escuela('Cresta','Maipu',profesores1,lista2,8);

console.log(escuela1);

alumno1.notas();
alumno2.notas();
console.log('-------------------------------------------------');
    profesorBeto.listarAlumnos();
console.log("------------------------------------------------");
    escuela1.registroAlumnos();
console.log("------------------------------------------------");
    escuela1.registroProfesores();
console.log("------------------------------------------------");

escuela1.despedir(1);
escuela1.registroProfesores();
console.log('-------------------------------------------------');

let profeJorge = new profesor('Jorge','Feriado','SQL',lista2);
escuela1.contratar(profeJorge);
escuela1.registroProfesores();
console.log('-------------------------------------------------');

let alumno3 = new alumno('sebastian','suarez',7,true);
escuela1.matricular(alumno3);
escuela1.registroAlumnos();














