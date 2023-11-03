/* Lesson 3 */

/* FUNCIONES */

// Paso 1: Usando una funcion declarativa, defina una funcion llamada add que reciba dos argumentos, numero 1 y numero 2
// Paso 2: En la funcion, retorna la suma de los parametros numero uno y numero 2
function add(numero1, numero2){
    return numero1 + numero2;
}

// Paso 3: Usando una funcion declarativa, define otra funcion llamada addNumbers que tome los valores de las entradas del formulario con los ID's de addend1 y addend2. Paselos a la funcion add
//  Paso 4: Asigna el valor retornado al elemento de formulario con el ID de sum
function addNumbers(){
    const addend1 = parseInt(document.getElementById('addend1').value);
    const addend2 = parseInt(document.getElementById('addend2').value);
    const sum = add(addend1, addend2);
    document.getElementById('sum').value = sum;
}

// Paso 5: Añade un escuchador de evento "click" al boton HTML con el ID addNumbers que llama a la funcion addNumbers
document.getElementById('addNumbers').addEventListener('click', addNumbers)

// Paso 6: Usando funcion anonima, repita los pasos 1 a 5 con funciones nuevas llamadas subtract y subtractNumbers y controles de formulario HTML con ID de minuend, subtrahend, difference y subtractNumbers
const subtract = function(numero1, numero2) {
    return numero1 - numero2;
};

const subtractNumbers = function() {
    const minuend = parseInt(document.getElementById('minuend').value);
    const subtrahend = parseInt(document.getElementById('subtrahend').value);
    const difference = subtract(minuend, subtrahend);
    document.getElementById('difference').value = difference;
};

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
// Paso 7: Usando funciones flecha, repeta los pasos 1 a 5 con funciones nsubtractNumbers
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    const factor1 = parseInt(document.getElementById('factor1').value);
    const factor2 = parseInt(document.getElementById('factor2').value);
    const product = multiply(factor1, factor2);
    document.getElementById('product').value = product
}
document.getElementById('multiplyNumbers').addEventListener('click',multiplyNumbers)

// Paso 8: Usando funciones flecha, repeta los pasos 1 a 5 con funciones nuevas llamadas divide y divideNumbers y elementos de formulario con ID's dividend, divisor, quotient y divideNumbers
const divide = (dividend , divisor) => dividend / divisor;

const divideNumbers = () => {
    const dividend = parseInt(document.getElementById('dividend').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    const quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient
}
document.getElementById('divideNumbers').addEventListener('click',divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.
// Prueba todas las funciones matematicas de la pagina task3.html


/* BUILT-IN METHODS */

// Paso 1: Declara una instancia en una variable de tipo fecha para obtener la fecha actual // new Date()
const currentDate = new Date();
// Paso 2: Declara una variable para obtener el año actual
var currentYear;
// Paso 3: Usando la variable declarada en paso 1, llama el metodo getFullYear() y asignalo en la variable declarada en paso 2
currentYear = currentDate.getFullYear();
// Paso 4: Asigna la varaible de año actual al elemento de formulario con el id de year
document.getElementById('year').textContent = currentYear
console.log(currentYear, currentDate)

/* Métodos de Array */

// Paso 1: Declara una instancia de un array para que tenga los numero del 1 al 25
const numberArray = Array.from({ length: 25 }, (_, index) => index + 1);

// Paso 2: Asigna el valor del array al elemento HTML con el id de "array"
document.getElementById("array").textContent = numberArray.join(', ');
console.log(numberArray)
// Paso 3: Usa el metodo filter para encontrar todos los numeros impares del array y asigna el resultado el elemento HTML con el ID de "odds" // ( hint: % (modulus operartor) )
const oddNumbers = numberArray.filter(num => num % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.join(', ')
console.log(oddNumbers)
// Paso 4: Usa el metodo filter para encontrar todos los numeros pares del array y asigna el resultado el elemento HTML con el ID de "evens" // ( hint: % (modulus operartor) )
const evenNumbers = numberArray.filter(num => num % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');
console.log(evenNumbers)
// Paso 5: Use el metodo reduce para sumar la variable que contenga el array y asigna el resultado al elemento HTML con el ID de "sumOfArray"
const sumOfArray = numberArray.reduce((acc, number)=> acc + number, 0) 
document.getElementById('sumOfArray').textContent = sumOfArray;
console.log(sumOfArray)
// Paso 6: Usa el metodo map para multiplicar cada elemento en el array por 2 y asignar el resultado el elemnto HTML con el ID de "multiplied"
const multipliedArray = numberArray.map(num => num * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');
console.log(multipliedArray)
// Paso 7: Usa el metodo map y reduce para sumar los elementos del array luego de multiplicar cada elemento por 2. Asigna el resultado al elemento HTML con el id de "sumOfMultiplied"
const sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
console.log(sumOfMultiplied)

