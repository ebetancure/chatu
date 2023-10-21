export class Usuario {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    constructor(id: string, nombre: string, correo: string, contrasena: string ){
        this.id = id;
        this.nombre= nombre;
        this.correo= correo;
        this.contrasena = contrasena;
    }
}