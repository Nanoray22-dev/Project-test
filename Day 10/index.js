 // Reto 1

 document.getElementById('cambiar').textContent = 'Porgramacion fullstack';

 // Reto 2
 const operador1Value = parseInt(document.getElementById('operador1').innerText);
 const operador2Value = parseInt(document.getElementById('operador2').innerText);
 const suma = operador1Value + operador2Value;
 document.getElementById('suma').innerText = suma;

 // Reto 3
 document.getElementById('estilos').classList.add('button');

 // Reto 4
 const frutas = ["manzana", "mandarina", "pera"];
 const lista = document.getElementById('lista');

 frutas.forEach(function(fruta) {
   const li = document.createElement('li');
   li.innerText = fruta;
   lista.appendChild(li);
 });