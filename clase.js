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
