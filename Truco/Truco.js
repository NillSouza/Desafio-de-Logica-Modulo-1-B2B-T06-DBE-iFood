function solucao(carta) {
    const manilha = ["Q", "J", "K", "A", "2", "3"];
    let indice = 0;
    for (const x of manilha) {
        if (x === carta && indice < 5) {
            console.log(manilha[indice + 1]);
        } else {
            if (indice >= 5) {
                indice = 0;
                console.log(manilha[indice]);
            }
            indice++;
        }
    }
}

function processData(input) {
    solucao(input);
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