function solucao(lista) {
    let media = 0, soma = 0;
    for (const x of lista) {
        soma += x;
    }
    media = soma / lista.length;
    console.log(media);
}

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
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