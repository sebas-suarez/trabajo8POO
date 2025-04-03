import { alumno } from "./alumnos";

export class profesor {
    private nombre:string;
    private apellido:string;
    private materia:string;
    public listaAlumnos:alumno[];


    constructor(pNombre:string,pApellido:string,pMateria:string,pListaAlumnos:alumno[]){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.listaAlumnos = pListaAlumnos;
    }

    //set y get
    //nombre
    setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }

    getNombre():string{
        return this.nombre;
    }
    //apellido
    setApellido(pApellido:string):void{
        this.apellido = pApellido;
    }

    getApellido():string{
        return this.apellido;
    }
    //materia
    setMateria(pMateria:string):void{
        this.materia = pMateria;
    }

    getMateria():string{
        return this.materia;
    }
    //listaAlumnos
    setListaAlumnos(pListaAlumnos:alumno[]):void{
        this.listaAlumnos = pListaAlumnos;
    }

    getListaAlumnos():alumno[]{
        return this.listaAlumnos;
    }

    listarAlumnos(){

        console.log(`${this.getNombre()} ${this.getApellido()} - Alumnos: `);
        for(let i = 0; i < this.listaAlumnos.length;i++){
            console.log(`
        id:${i+1} nombre:${this.listaAlumnos[i].getNombre()}  apellido:${this.listaAlumnos[i].getApellido()} Nota:${this.listaAlumnos[i].getNota()}`);
            
        }
    }


}
