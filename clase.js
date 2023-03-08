//Callback Function
const dividePorDos = numero =>{return numero/2};
const divideNumero =(numero, callbackFn)=>{
    return callbackFn(numero);
}
console.log(divideNumero(10, dividePorDos));
//Metodos para arreglos
const numeros = [1,2,3,20, 893, 452];
let numerosDos = [1,2,3,20, 893, 452];
//.reduce()
const sumarValores = numeros.reduce((acumulador, valorActual)=>{
    return acumulador + valorActual;
});
//foreach()
const fnDos = numerosDos.forEach(number => {
    console.log(number);
});
//.filter()
const fnTres = numerosDos.filter(number=>{
    return number > 10;
});
console.log(fnTres);
//.map()
const nombresPersonas = ['Juan', 'Pedro', 'Pablo', 'Andrés'];
const anuncios = nombresPersonas.map(miembro =>{
    return miembro + ' se unió al grupo';
});
console.log(anuncios)
//Primer punto Actividad
const arreglo = [1, 2, 3, 4, 5];
const tabla = arreglo.map(numero=>{
    return numero*numero;
});
console.log(tabla);
//Segundo punto Actividad
const primerFuncion = number =>{
    return number/2;
}
const segundaFuncion = (numero, callbackFuncion) => {
    return callbackFuncion(numero)/ 2;
}
console.log(segundaFuncion(10, primerFuncion));