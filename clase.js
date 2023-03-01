//funcion normal
function sumar(numero1, numero2){
    return numero1 + numero2;
}
//funcion anonima
const hola = function(){
    return 'hola';
}
//funcion flecha
const sum =(numero1, numero2) =>{
    return numero1+numero2;
}
//funcion flecha con un solo parametro
const multiplicarDos = numero =>{
    return numero*2;
}
//funcion flecha con ningun parametro
const multiplicar = () =>{
    return 'Que haces?';
}
//ejercicio de la clase
const resta =(numero1, numero2) =>{
    return numero1-numero2;
}
const multiplicacionTres = numero =>{
    return numero*3;
}
const mensaje = () =>{
    return 'Que haces?';
}
console.log(mensaje());
console.log(multiplicacionTres(1));
console.log(resta(5,4));
//arreglo
let numero = [1,2,3,4,5,6];
//ingresar un dato adicional al final del arreglo
numero.push(10);
//saca el ultimo elemento
numero.pop();
//funcion que recibe un arreglo y elimina o agrega un dato
const eliminarUltimo = arreglo =>{
    arreglo.pop();
}
let vector = [9,8,7,6,5,4,3,2,1];
console.log('Numero de elementos antes de eliminar: '+vector.length);
eliminarUltimo(vector);
console.log('Numero de elementos despues de eliminar: '+vector.length);