export class user {
  nombre: string;
  apellido: string;
  correo: string;
  pass: string;
  genero: string;
  repite: string;
  constructor(
    nombre: string,
    apellido: string,
    correo: string,
    pass: string,
    repite: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.pass = pass;
    this.repite = repite;
  }
}
