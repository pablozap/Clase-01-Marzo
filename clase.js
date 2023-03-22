//objetos
const persona = {
    primerNombre: 'Juan',
    apellido: 'Perez',
    edad: 22,
    documentoIdentidad: 5612,
    caracteristicas: {
        colorCabello: 'Rojo',
        etnicidad: 'Indoeuropeo',
        idiomaMaterno: 'Español'
    },
    saludar:function(){
        return `Hola ${this.primerNombre} ${this.apellido}`
    }
    
}
class Persona{
    constructor(PrimerNombreUsuario, apellidoUsuario){
        this.PrimerNombreUsuario = PrimerNombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
    }
    saludarPersona(){
        return `Hola ${this.PrimerNombreUsuario} ${this.apellidoUsuario}, como estas?`
    }
}

let personita = new Persona('Juan', 'Perez');
personita.PrimerNombreUsuario = 'Carlos';
personita.apellidoUsuario = 'Cantor';
console.log(personita);
console.log(personita.saludarPersona());

//herencia
class Animales{
    constructor(nombre, edad, sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }
    sonido(){
        return `${this.nombre} tiene el sonido: ${this.sonido}`;
    }
}
class Gatos extends Animales{
    constructor(nombre, edad, sonido, cazador){
        super(nombre,edad, sonido);
        this.cazador = cazador;
    }
    maullar(){
        return `Yo puedo hacer el sonido ${this.sonido}`
    }
}
let gato = new Gatos('Alberto', 52, 'Meow', true);
console.log(gato);

/* Actividad
1. Crear un objeto que tenga minimo dos metodos ademas debe tener una propiedad que sea un objeto
2. Crear una clase que herede de otra. Debe poseer minimo 3 propiedades para el constructor
3. crear una funcion tipo felcha que haga uso de la clase construida y el objeto declarado
*/
//Punto 1:
const objeto = {
    numero1: Math.random() * 10,
    numero2: Math.random() * 10,
    multiplicar:function(){
        return Math.floor(this.numero1 * this.numero2);
    },
    dividir:function(){
        return Math.floor(this.numero1 / this.numero2);
    },
    respuesta: {
        respuesta1: 'Hola',
        respuesta2: 'Buena multiplicacion'
    }
}
console.log(objeto.multiplicar());
console.log(objeto.dividir());
console.log(objeto.respuesta.respuesta1);
console.log(objeto.respuesta.respuesta2);
//Punto 2:
class Vehiculo{
    constructor(numeroNeumaticos, tipoTransporte, cantidadPasajeros){
        this.numeroNeumaticos = numeroNeumaticos;
        this.tipoTransporte = tipoTransporte;
        this.cantidadPasajeros = cantidadPasajeros;
    }
}
class Carro extends Vehiculo{
    constructor(numeroNeumaticos, tipoTransporte, cantidadPasajeros, modelo){
        super(numeroNeumaticos, tipoTransporte, cantidadPasajeros);
        this.modelo = modelo;
    }
}
carro = new Carro(4,'Terrestre',4, '2019');
console.log(carro);
//Punto 3:
const funcion = (clase, object) => {
    console.log(clase.numeroNeumaticos);
    console.log(object.multiplicar());
}
funcion(carro, objeto)