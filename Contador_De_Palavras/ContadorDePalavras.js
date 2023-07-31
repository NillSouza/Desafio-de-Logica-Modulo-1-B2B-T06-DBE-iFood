function solucao(texto) {
    let formatado = texto.trim();
    let retirarEspacosDuplicados = formatado;
    let indice = 0;
    let palavras = formatado.split(" ");
    for (let x = 0; x < palavras.length; x++) {
        if (palavras[x] == "") {
            palavras.splice(x, 1)
            x--;
        }
    }
    console.log(palavras.length)
}

function processData(input) {
    solucao(input)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});