function solucao(precos) {
    let menorValor = precos[0];
    let soma = 0;

    for (const x of precos) {

        if (x <= menorValor) {
            menorValor = x;
        }
        soma += x;
    }

    if (precos.length > 2) {
        console.log(soma - (menorValor / 2));
    } else {
        console.log(soma);
    }

}



function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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