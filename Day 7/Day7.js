// let patron = ''
// for(let i = 0; i < 10; i++) {
//  patron += '*';
//  console.log(patron)
// }
/*
Área de un cuadrado:
El área de un cuadrado se calcula multiplicando la longitud de un lado por sí misma.
Fórmula: Área = Lado x Lado
Donde "Lado" es la longitud de un lado del cuadrado.

Área de un triángulo:
El área de un triángulo se calcula multiplicando la base por la altura y dividiendo el resultado entre 2.
Fórmula: Área = (Base x Altura) / 2
Donde "Base" es la longitud de la base del triángulo y "Altura" es la altura perpendicular a la base.

Área de un rectángulo:
El área de un rectángulo se calcula multiplicando la longitud de la base por la altura.
Fórmula: Área = Base x Altura
Donde "Base" es la longitud de la base del rectángulo y "Altura" es la altura del rectángulo.
 */

    function AreaDeUnCuadrado(lado){
    let area = lado * lado
    return area;
    }
    function AreaDeUnTriangulo(base, altura){
        let area = (base * altura) / 2
        return area;
        }

    function AreaDeUnRectangulo(base, altura){
        let area = base * altura
        return area;
        }    
let resultadoDeUnCuadrado = AreaDeUnCuadrado(25)
console.log(resultadoDeUnCuadrado)

let resultadoDeunTriangulo = AreaDeUnTriangulo(25,20)
console.log(resultadoDeunTriangulo)

let resultadoDeunRectangulo = AreaDeUnRectangulo(25,20)
console.log(resultadoDeunRectangulo)

let opcion  = parseInt(prompt(
    'Escoge una Opcion -> 1: Area de un cuadrado, Escoge una Opcion -> 2: Area de un Rectangul,Escoge una Opcion -> 3: Area de un Triangulo'
))
switch (opcion) {
    case 1:
      let ladoCuadrado = parseFloat(prompt('Ingresa el lado del cuadrado:'));
      let resultadoCuadrado = AreaDeUnCuadrado(ladoCuadrado);
      console.log(`El área del cuadrado es: ${resultadoCuadrado}`);
      break;
  
    case 2:
      let baseRectangulo = parseFloat(prompt('Ingresa la base del rectángulo:'));
      let alturaRectangulo = parseFloat(prompt('Ingresa la altura del rectángulo:'));
      let resultadoRectangulo = AreaDeUnRectangulo(baseRectangulo, alturaRectangulo);
      console.log(`El área del rectángulo es: ${resultadoRectangulo}`);
      break;
  
    case 3:
      let baseTriangulo = parseFloat(prompt('Ingresa la base del triángulo:'));
      let alturaTriangulo = parseFloat(prompt('Ingresa la altura del triángulo:'));
      let resultadoTriangulo = AreaDeUnTriangulo(baseTriangulo, alturaTriangulo);
      console.log(`El área del triángulo es: ${resultadoTriangulo}`);
      break;
  
    default:
      console.log('Opción no válida');
  }
