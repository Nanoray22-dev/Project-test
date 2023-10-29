// let colores = ['rojo',' amarillo', 'verde', 'azul'];
// let nuevoColores =[];
// for (let contador = 0; contador < colores.length; contador++) {
//     if(colores[contador] === 'verde'){
//        console.log(colores[contador]);
//     }
    
// }

// let listaDeEstudiante =
// [
//     {
//     nombre: 'Raysell Concepcion',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1999'
//     },
//     {
//     nombre: 'Diego Echaveria',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1999'
//     },
//     {
//     nombre: 'Ramon Antonio',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1996'
//     },
//     {
//     nombre: 'Pedro Feliciano',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1997'
//     },
//     {
//     nombre: 'Raysa Ramirez',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1998'
//     },
//     {
//     nombre: 'Genesis Santos',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1992'
//     },
//     {
//     nombre: 'Eloise Concepcion',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1991'
//     },
//     {
//     nombre: 'Erika Salm',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1990'
//     },
//     {
//     nombre: 'Emmanuel novas',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1992'
//     },
//     {
//     nombre: 'Vernika Burgos',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1993'
//    },
//    {
//     nombre: 'Sofia Burgos',
//     edad: 24,
//     fechaDeNacimiento: '22/07/1995'
//    }
// ];


// for (let i = 0; i < listaDeEstudiante.length; i++) {
//     console.log(listaDeEstudiante[i].nombre)  
// }
/*
crea un objeto array con los dias laborables de la semana(
    lunes a viernes) y utiliza un metodo del objeto para recorrer el array y convertir
    cada elemento de ese array a mayusculas console.table para ver el resultado
)
*/

// let diaDeLaSemana = 
// [
//     'lunes',
//      'martes',
//      'miercoles',
//      'jueves',
//      'viernes',
// ]
// for (let i = 0; i < diaDeLaSemana.length; i++) {
//     diaDeLaSemana[i] = diaDeLaSemana[i].toUpperCase();
// }
// console.table(diaDeLaSemana);


// let diaLaborables = diaDeLaSemana.map(dia => dia.toUpperCase());
// console.table(diaLaborables);

/*
crea un array para albergar al menos 10 numeros enteros cualesquiera, luegoo rellena el array (o crealo ya con los valores)
el ejercicio trata de crear a partir de estes array otros dos uno con los numero pares y otros con con los impares
 */
const numeros = [4, 7, 12, 15, 20, 23, 36, 41, 52, 63];
const numeroPar = [];
const numeroImpar = [];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
       numeroPar.push(numeros[i]);
    }else{
        numeroImpar.push(numeros[i]);
    }
}
console.log(numeroPar);
console.log(numeroImpar);
