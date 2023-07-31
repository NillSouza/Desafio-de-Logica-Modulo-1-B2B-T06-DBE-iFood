function solucao(lista) {
    let maisJovemAdulto = lista[0], verificador = 0;

    for (const x of lista) {
        if (x > maisJovemAdulto) {
            maisJovemAdulto = x;
        }
    }

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 18) {
            if (lista[i] <= maisJovemAdulto) {
                maisJovemAdulto = lista[i]
                verificador++;
            }
        }

    }
    if (verificador === 0) {
        console.log("CRESCA E APARECA")
    } else {
        console.log(maisJovemAdulto);
    }

}



function processData(input) {
    //Enter your code here
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
