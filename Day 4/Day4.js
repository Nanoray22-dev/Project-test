// ejercio 1
// let number = parseInt(prompt('insert the number', 0));
// if(number > 0 ){
// console.log('the number' + number + 'is positive')
// }else{
//     console.log('The number ' + number + 'is negative');
// }

//ejercio 2

// let letra =prompt('ingrese una de las opciones A-B-C-D')
// letra = letra.toLowerCase();
// if (letra === 'A'){
//     prompt('Has Acertado');
// }else if (letra === 'C'){
//     prompt('Error: Has ingresado la letra incorrecta');
// }else{
//     prompt('Te has equivocado');
// }

// imprimir numero en par en par con while
// let contador = 2;
// console.log('soy el contador', contador)
// while(contador <= 10){
//     console.log(contador);
//     contador = contador + 2;
// } 

// imprimir numero en par en par con for

// for( let i = 2; i <= 10; i += 2){
//     console.log(i);
// }


/*
Escribe un programa que genere un número aleatorio entre 1 y 100. 
Luego, pide al usuario que adivine el número. 
El programa debe proporcionar pistas al usuario sobre 
si el número a adivinar es mayor o menor que el número que ha ingresado. 
El usuario seguirá adivinando hasta que adivine correctamente el número. 
Una vez que lo adivine, el programa debe mostrar cuántos intentos le tomó al usuario.
*/ 

const numeroAleatorio =  Math.floor(Math.random() * 100) || 1;
let intentado = 0;

function adivinaNumero(){
    const numeroUsuario =  prompt('Adivina el numero (entre el numero del 1 al 100)');
    const numeroAdivinando = parseInt(numeroUsuario);
    intentado++;

    if (numeroUsuario === numeroAleatorio){
        alert(`Felicitaciones adivinaste el numero en ${intentado} intentado`);
    }else if (numeroAdivinando > numeroAleatorio) {
        alert('el numero es mayor sigue intentando');
        adivinaNumero(); 
    }else{
        alert('el numero es menor, sigue intentando');
        adivinaNumero();
    }
}
adivinaNumero();

