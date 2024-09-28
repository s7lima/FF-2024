function calcularAreaQuadrado(lado) {
    let resultado = lado ** 2;
    return resultado;
}

let valor = 3;
let result = calcularAreaQuadrado(valor)
let msg = `A área do Quadrado é ${result}m²`;
alert(msg);
