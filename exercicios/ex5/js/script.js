function verificarNumero(valor) {
    return isNaN(valor);
}

alert (`É um letra? ${verificarNumero('L')}`)
alert (`É um letra? ${verificarNumero(5)}`)