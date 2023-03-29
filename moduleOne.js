class Vehiculo{
    constructor(numeroNeumaticos, tipoTransporte, cantidadPasajeros){
        this.numeroNeumaticos = numeroNeumaticos;
        this.tipoTransporte = tipoTransporte;
        this.cantidadPasajeros = cantidadPasajeros;
    }
}
export class Carro extends Vehiculo{
    constructor(numeroNeumaticos, tipoTransporte, cantidadPasajeros, modelo){
        super(numeroNeumaticos, tipoTransporte, cantidadPasajeros);
        this.modelo = modelo;
    }
}
export const objeto = {
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
