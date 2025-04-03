export class alumno {
    private nombre:string;
    private apellido:string;
    private nota:number;
    private aprovado:boolean;
    

    constructor(pNombre:string,pApellido:string,pNota:number,pAprovado:boolean){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.nota = pNota;
        this.aprovado = pAprovado;
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
    //nota
    setNota(pNota:number){
        this.nota = pNota;
    }
    getNota():number{
        return this.nota;
    }
    //aprovado
    setAprovado(pAprovado:boolean):void{
        this.aprovado = pAprovado;
    }        
    getAprovado():boolean{
        return this.aprovado
    }
    //notas
    notas():void{
        if(this.nota >= 7){
            this.aprovado = true;
            console.log(`${this.nombre} ${this.apellido} notas ${this.nota} usted esta aprovado.`);
            
        }else{
            console.log(`${this.nombre} ${this.apellido} notas ${this.nota} usted esta desaprovado.`);
        }  
        
    }
}