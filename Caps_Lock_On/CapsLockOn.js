let input = "BaNa  Na  ";
let textoFormatado = "";
let arrayDeBool = [];

function RetornarFormatadoSemEspacos(texto) {
    let formatado = texto.trim();
    const text = " ", newText = "";
    while (formatado !== formatado.replace(text, newText)) {
        formatado = formatado.replace(text, newText);
    }
    return formatado;
}

function MaiusculoEMinusculo(textoFormatado, arrayDeBool) {
    let formatado = textoFormatado;
    for (let i = 0; i < formatado.length; i++) {
        if (formatado[i] === formatado[i].toLocaleLowerCase()) {
            arrayDeBool[i] = true;
        } else {
            arrayDeBool[i] = false;
        }
    }
    return arrayDeBool;
}

function RetornarFormatado(input) {
    let formatado = "";
    const nome = input.split(" ");
    for (let item of nome) {
        let primeiraLetra = item.slice(0, 1);
        let restante = item.slice(1);
        formatado += primeiraLetra.toLocaleUpperCase() + restante.toLocaleLowerCase();
    }
    return formatado
}


function RetornarFormatadoLowerCase(textoFormatado) {
    let formatado = "";
    for (const x of textoFormatado) {
        formatado += x.toLowerCase();
    }
    return formatado;
}

textoFormatado = RetornarFormatadoSemEspacos(input);
arrayDeBool = MaiusculoEMinusculo(textoFormatado, arrayDeBool);

if (arrayDeBool[0] === false && arrayDeBool[1] === false) {
    console.log(RetornarFormatadoLowerCase(textoFormatado));
} else if (arrayDeBool[0] === true && arrayDeBool[1] === false && arrayDeBool[2] === false) {
    console.log(RetornarFormatado(textoFormatado));
} else if (arrayDeBool[0] === false && arrayDeBool[1] === true && arrayDeBool[2] === false || arrayDeBool[0] === true && arrayDeBool[1] === false && arrayDeBool[2] === true) {
    console.log(textoFormatado);
} else {
    console.log(textoFormatado);
}
