export class Usuario {
    id: number;
    nombre: string;
    correo: string;
    contrasena: string;
    constructor(id: number, nombre: string, correo: string, contrasena: string ){
        this.id = id;
        this.nombre= nombre;
        this.correo= correo;
        this.contrasena = contrasena;
    }
}