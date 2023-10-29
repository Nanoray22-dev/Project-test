// let miArray = [
//     {
//     nombre: 'Raysell',
//     apellido: 'Concepcion',
//     edad: 24,
//     pasatiempo: [
//         'Caminar', 'Programar' , 'Estudiar'
//     ]
//     },
//     {
//         nombre: 'Erika',
//         apellido: 'Salm',
//         edad: 22,
//         pasatiempo: [
//             'Caminar', 'Leer' , 'Estudiar'
//         ]
//     },
//     {
//         nombre: 'Eriel',
//         apellido: 'Salm',
//         edad: 2,
//         pasatiempo: [
//            'Comer', 'jugar' , 'Dormir'
//         ]
//     },
//     {
//         nombre: 'Eloise',
//         apellido: 'Salm',
//         edad: 9,
//         pasatiempo: [
//             'Caminar', 'Jugar' , 'Estudiar'
//         ]
//     },
// ]

// miArray.forEach(persona => {
//     console.log('Nombre:', persona.nombre);
//     console.log('Edad:', persona.edad);
   
//     console.log('Pasatiempos:');
//     persona.pasatiempo.forEach(pasatiempo => {
//         console.log('-', pasatiempo);
//     });
    
//     console.log('\n'); 
// });

const add = (a  = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10))