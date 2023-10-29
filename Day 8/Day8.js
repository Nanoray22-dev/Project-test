function showArea (area){
    document.querySelectorAll('.Formcaja').forEach(function (element){
        element.style.display = 'none';
    })
    document.getElementById(area).style.display = 'block';
}

function calcularArea(area){
    let resultado;
    if (area === 'Cuadrado'){
        const lado = parseFloat(document.getElementById('ladoCuadrado').value);
        resultado = lado * lado;
    }else if (area === 'Triangulo'){
        const base = parseFloat(document.getElementById('baseTriangulo').value);
        const altura = parseFloat(document.getElementById('alturaTriangulo').value);
        resultado = (base * altura) / 2 ;
    }else if(area === 'Rectangulo'){
        const base = parseFloat(document.getElementById('baseRectangulo').value);
        const altura = parseFloat(document.getElementById('alturaRectangulo').value);
        resultado = base * altura;
    }
    const resultadoElement = document.getElementById(`res${area}`);
    resultadoElement.textContent = `Area del ${area}: ${resultado}`;
    resultadoElement.style.color = '#007bff'
}



