/*
Problema 1: Suma de Pares
Escribe una función llamada sumaPares que tome un número n y 
devuelva la suma de todos los números pares desde 0 hasta n. 
Por ejemplo, si n es 6, la función debería devolver 12 (2 + 4 + 6) 
*/
// function sumaPar (n) {
//  let suma = 0;
//   for (let i = 0; i <= n; i++) {
//    if (i % 2 === 0){
//     suma += i;
//    }
//   }
//   return suma;
// }

// const resultado = sumaPar(6)
// console.log(resultado)

/*
Problema 2: Reverso de una Cadena
Escribe una función llamada reversoCadena que tome una cadena como entrada y 
devuelva la cadena al revés. Por ejemplo, si la entrada es "Hola", 
la función debería devolver "aloH".
 */
//  ------primera solucion -----------
// function reversoCadena (cadena){
//      const s = cadena.split('');
//      const n = s.reverse();
//      const a = n.join('');
//      return a;
// }

// const resultado = reversoCadena("Eloise")
// console.log(resultado);

//  ------------- segunda solucion  ----------------
// const cadenas = 'programador';
// const revertirCadena = cadenas.split('');
// const revertir = revertirCadena.reverse();
// const final = revertir.join('')

// console.log(final)

/*
Problema 3: Números Primos
Escribe una función llamada esPrimo que tome un número como entrada y 
devuelva true si es primo y false si no lo es.
*/

// function esPrimo(numero){
//     if(numero <= 1){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(numero); i++){
//         if(numero % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(esPrimo(13))

/*
Problema 4: FizzBuzz
Escribe una función llamada fizzBuzz que imprima los números del 1 al 100. 
Pero, para múltiplos de 3, imprime "Fizz" en lugar del número, y 
para múltiplos de 5, imprime "Buzz". Para números que son múltiplos de ambos 3 y 5, 
imprime "FizzBuzz".
 */

// function FizzBuzz(){
//     for(let i = 1; i <= 50; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('FizZBuzz')
//         }else if (i % 3 === 0){
//             console.log('Fizz')
//         }else if(i % 2 === 0){
//             console.log("Buzz")
//         }else{
//             console.log(i)
//         }
//     }
// }
// FizzBuzz()

// la Funcion con un operador ternario
// function FizzBuzz(){
//     for(let i = 1; i <= 100; i++){
//         const output = (i % 3 === 0 && i % 2 === 0) ? 'FizzBuzz' : 
//         (i % 3 === 0) ? 'Fizz': 
//         (i % 2 === 0) ? 'Buzz': i
//         console.log(output)
//     }
// }
// FizzBuzz();


const FizzBuzz = () =>{
    for (let i = 1; i <= 10; i++){
        if(i %3  === 0 && i % 2  === 0){
            console.log('FizzBuzz', i)
        }else if(i % 3 === 0){
            console.log('Fizz', i)
        }else if (i % 2 === 0){
            console.log('Buzz', i)
        }else{
            console.log(i)
        }
    }
}

FizzBuzz();

const numObj = (s) => {
    const resultArray = [];
    for(let i = 0; i < s.length; i++){
        const charCode = String.fromCharCode(s[i]);
        const obj = {
            [String(s[i])] : charCode
        };
        resultArray.push(obj);
    }
    return resultArray;
}

const numbersArray = [97,98,99,100,101];
const result = numObj(numbersArray)
console.log(result);

// como saber si una palabra es un palidromo o no
// const palidromo = (palabra) => {
//     const palabraInvertida = palabra.split('').reverse().join('')
//     return palabra === palabraInvertida;
// }

// console.log(palidromo('neuquen'))
// console.log(palidromo('eye'))
// console.log(palidromo('mama'))

/*Problema 1: Manipulación de Arrays
Escribe una función en JavaScript que tome un array de números como entrada y
 devuelva un nuevo array que contenga solo los números pares del array original. */

 const filterAnArray = (array) => {
    const numberOdd = array.filter(number => number % 2 === 0);
    return numberOdd;
 }

 const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,23, 22, 24,25, 26]
 const numberOdd = filterAnArray(originalArray);

 console.log(numberOdd)
