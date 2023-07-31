function solucao(numeros) {
    let indiceGoleiro = 0, Continuar = true;
    for (const x of numeros) {
        indiceGoleiro += x;
    }

    while (Continuar) {
        if (indiceGoleiro > numeros.length) {
            indiceGoleiro -= numeros.length;
        } else {
            Continuar = false;
        }
    }
    console.log(indiceGoleiro)

}

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10))
    }
    solucao(numeros)
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