/* 
registrar al sistema como usuario nuevo
login como usuario
consultar saldo en el sistema
ingresar dinero al sistema
retirar dinero del sistma
hacer alguna trasaciones a otro usuario
logout
*/








// escribir la funcion compute_surface_area que debe tomar como parametos "radius" y " height",
// calcular "surface_area", y retornar el valor calculado

function computeSurfaceArea(radius, height){
    const surfaceArea = 2 * Math.PI * radius * ( radius + height)
    return surfaceArea
}

const radiusValue = 3.0
const heightValue = 5.0
const result = computeSurfaceArea(radiusValue, heightValue)

console.log(`El area de la superfcie del cilindro con radio ${radiusValue} y altura ${heightValue} es: ${result}`)