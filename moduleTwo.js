/*Crear minimo 2 modulos:
    El primer modulo debe tener una clase que hereda de otra
    un objeto que dentro de sus propiedades tenga otro objeto.

    El segundo modulo debe tener importacion de la clase y el objeto
    Funcion tipo flecha que realice el uso de la clase y el objeto importado

Oros adicionales:
 Tercer modulo que contenga una funcion que manipule arreglos con los metodos de arreglos
 dee tener como parametros de entrada el arreglo y una callbackFunction 
 debe poderse exportar
*/
import {Carro, objeto} from './moduleOne.js';
let ferrari = new Carro(4, 'Terrestre', 4, '2000');
const funcion = (clase, object) => {
    console.log(clase);
    console.log(object.multiplicar());
}
funcion(ferrari, objeto);