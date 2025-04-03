import { profesor } from "./profesores";
import { alumno } from "./alumnos";

export class escuela{

    private nombre:string;
    private direccion:string;
    private aulas:number;
    private profesores:profesor[];
    private alumnos:alumno[];

    constructor(pNombre:string,pDireccion:string,pProfesores:profesor[],pAlumnos:alumno[],pAulas?:number){
        this.nombre = pNombre;
        this.direccion = pDireccion;
        this.profesores = pProfesores;
        this.alumnos = pAlumnos;
        this.aulas = pAulas ?? 2;
    }

    //set y gets
    //nombre
    setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }
    getNombre():string{
        return this.nombre;
    }

    //direccion
    setDireccion(pDireccion:string):void{
        this.direccion = pDireccion;
    }
    getDireccion():string{
        return this.direccion;
    }

    //aulas
    setAulas(pAulas:number):void{
        this.aulas = pAulas;
    }
    getAulas():number{
        return this.aulas;
    }

    //profesores
    setProfesores(pProfesores:profesor[]):void{
        this.profesores = pProfesores;
    }
    getProfesores():profesor[]{
        return this.profesores;
    }

    //alumnos
    setAlumnos(pAlumnos:alumno[]):void{
        this.alumnos = pAlumnos;
    }
    getAlumnos():alumno[]{
        return this.alumnos;
    }

    registroAlumnos(){
        console.log(`${this.getNombre()} - Alumnos: `);
        
        for(let i = 0; i < this.alumnos.length;i++){
            
            
            console.log(`
        id:${i+1} nombre:${this.alumnos[i].getNombre()}  apellido:${this.alumnos[i].getApellido()} Nota:${this.alumnos[i].getNota()}`);
            
        }
    }

    registroProfesores(){
        console.log(`${this.getNombre()} - Profesores: `);
        
        for(let i = 0; i < this.profesores.length;i++){
            console.log(`
        id:${i+1} nombre:${this.profesores[i].getNombre()}  apellido:${this.profesores[i].getApellido()} Materia:${this.profesores[i].getMateria()}`);
            
        }
    }



    despedir(id):void{
        this.profesores.splice(id-1 ,1);
    }

    expulsar(id):void{
        this.alumnos.splice(id-1 ,1);
    }

    contratar(profeNuevo):void{
        this.profesores.push(profeNuevo);
    }

    matricular(alumnoNuevo):void{
        this.alumnos.push(alumnoNuevo);
    }

}