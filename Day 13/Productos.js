/* 1. Convertir tabla en  los meses enero y febrero en arrays de objetos */
/* 2. obtener el articulo mas vendido de todos lo meses */
/* 3. obtner el articulo mas vendido del mes abril y el menos vendido */
/* 4. En que mes se vendieron mas impresoras? */
/* 5. crear un nuevo array de objetos  con el  mes y la cantidad de vendidos de Smartphone X {mes: x, cantidad: x}*/
/* 6. crea un nuevo array con el total vendido en los 5 meses por cada articulo {nombreProducto: x, TotalVendido: x} */
/* 7. Modifica el objeto donde las ventas de Laptop Y  hayan sido === 40 y cambia el valor de vendidos por 120*/
/* 8. crea un nuevo array con la lista de los articulos cuyas ventas hayan sido menores que 55 e imprimerlos en pantalla */
/* 9. Devuelve una lista de los articulos cuyo nombre incluya la letra t */

const datosVentas = {
    enero: [
        { producto: "Smartphone X", vendidos: 50 },
        { producto: "Laptop Y", vendidos: 30 },
        { producto: "Tableta Z", vendidos: 25 },
        { producto: "Auriculares Inalámbricos W", vendidos: 40 },
        { producto: "Cámara Digital V", vendidos: 55 },
        { producto: "Consola de Juegos A", vendidos: 35 },
        { producto: "Impresora B", vendidos: 20 },
        { producto: "Monitor LCD C", vendidos: 60 },
        { producto: "Ratón Inalámbrico D", vendidos: 45 },
        { producto: "Teclado Mecánico E", vendidos: 30 }
    ],
    febrero: [
        { producto: "Smartphone X", vendidos: 45 },
        { producto: "Laptop Y", vendidos: 35 },
        { producto: "Tableta Z", vendidos: 20 },
        { producto: "Auriculares Inalámbricos W", vendidos: 50 },
        { producto: "Cámara Digital V", vendidos: 60 },
        { producto: "Consola de Juegos A", vendidos: 40 },
        { producto: "Impresora B", vendidos: 25 },
        { producto: "Monitor LCD C", vendidos: 55 },
        { producto: "Ratón Inalámbrico D", vendidos: 50 },
        { producto: "Teclado Mecánico E", vendidos: 35 }
    ],
    marzo: [
        { producto: "Smartphone X", vendidos: 60 },
        { producto: "Laptop Y", vendidos: 40 },
        { producto: "Tableta Z", vendidos: 30 },
        { producto: "Auriculares Inalámbricos W", vendidos: 45 },
        { producto: "Cámara Digital V", vendidos: 65 },
        { producto: "Consola de Juegos A", vendidos: 50 },
        { producto: "Impresora B", vendidos: 30 },
        { producto: "Monitor LCD C", vendidos: 70 },
        { producto: "Ratón Inalámbrico D", vendidos: 55 },
        { producto: "Teclado Mecánico E", vendidos: 40 }
    ],
    abril: [
        { producto: "Smartphone X", vendidos: 55 },
        { producto: "Laptop Y", vendidos: 45 },
        { producto: "Tableta Z", vendidos: 35 },
        { producto: "Auriculares Inalámbricos W", vendidos: 55 },
        { producto: "Cámara Digital V", vendidos: 70 },
        { producto: "Consola de Juegos A", vendidos: 45 },
        { producto: "Impresora B", vendidos: 35 },
        { producto: "Monitor LCD C", vendidos: 75 },
        { producto: "Ratón Inalámbrico D", vendidos: 60 },
        { producto: "Teclado Mecánico E", vendidos: 45 }
    ],
    mayo: [
        { producto: "Smartphone X", vendidos: 70 },
        { producto: "Laptop Y", vendidos: 50 },
        { producto: "Tableta Z", vendidos: 40 },
        { producto: "Auriculares Inalámbricos W", vendidos: 60 },
        { producto: "Cámara Digital V", vendidos: 75 },
        { producto: "Consola de Juegos A", vendidos: 55 },
        { producto: "Impresora B", vendidos: 40 },
        { producto: "Monitor LCD C", vendidos: 80 },
        { producto: "Ratón Inalámbrico D", vendidos: 65 },
        { producto: "Teclado Mecánico E", vendidos: 50 }
    ]
    // Puedes continuar con los datos para los meses siguientes si es necesario
};

for(const key in datosVentas){
    console.log(key, datosVentas[key]);
}

const obtenerVentas = function (){
    let masVendidos = {producto: "", vendidos: 0 }
    for (const mes in datosVentas){
        if(Array.isArray(datosVentas[mes])){
            datosVentas[mes].forEach((ventas) => {
                if(ventas.vendidos > masVendidos.vendidos){
                    masVendidos = {ventas};
                }
            })
        }
    }
    return masVendidos;
}

const articulos = obtenerVentas()
console.log(articulos)



const ventasAbril = datosVentas.abril

let masVendido = ventasAbril[0]
let menosVendido = ventasAbril[0]

ventasAbril.forEach((ventas) => {
    if(ventas.vendidos > masVendido.vendidos){
        masVendido = ventas;
    }
    if(ventas.vendidos < menosVendido.vendidos){
        menosVendido = ventas;
    }
})
console.log(masVendido)
console.log(menosVendido)

function mesMasVendidoImpresoras() {
    let mesMasVendido = "";
    let maxVentasImpresoras = 0;
  
    for (const mes in datosVentas) {
      if (Array.isArray(datosVentas[mes])) {
        const ventasImpresoras = datosVentas[mes].reduce((total, venta) => {
          if (venta.producto === "Impresora B") {
            return total + venta.vendidos;
          }
          return total;
        }, 0);
  
        if (ventasImpresoras > maxVentasImpresoras) {
          maxVentasImpresoras = ventasImpresoras;
          mesMasVendido = mes;
        }
      }
    }
  
    return mesMasVendido;
  }

  const mesImpresorasMasVendido = mesMasVendidoImpresoras();
  console.log(mesImpresorasMasVendido); // Mayo
  
  function ventasSmartphoneXPorMes() {
    const ventasSmartphoneX = [];
  
    for (const mes in datosVentas) {
      if (Array.isArray(datosVentas[mes])) {
        const ventasMes = datosVentas[mes].find(
          (venta) => venta.producto === "Smartphone X"
        );
  
        if (ventasMes) {
          ventasSmartphoneX.push({ mes, cantidad: ventasMes.vendidos });
        }
      }
    }
  
    return ventasSmartphoneX;
  }
  

  const ventasSmartphoneX = ventasSmartphoneXPorMes();
  console.log(ventasSmartphoneX);
  