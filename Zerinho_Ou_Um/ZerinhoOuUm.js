function solucao(jogadores) {
    let ContadorZero = 0;
    let ContadorUm = 0;
    let indice = 0;
    let nomeEscolhido = 0;

    for (const x of jogadores) {
        if (x.jogada === 0) {
            ContadorZero++;
        }
        if (x.jogada === 1) {
            ContadorUm++;
        }
    }


    function nomeSelecionadoZero(jogadores, nomeEscolhido) {
        for (const x of jogadores) {

            if (x.jogada === 0) {

                nomeEscolhido = indice;
            }
            indice++;
        }
        return jogadores[nomeEscolhido].nome;
    }

    function nomeSelecionadoUm(jogadores, nomeEscolhido) {
        for (const x of jogadores) {

            if (x.jogada === 1) {

                nomeEscolhido = indice;
            }
            indice++;
        }
        return jogadores[nomeEscolhido].nome;
    }


    if (ContadorUm === 1) {
        console.log(nomeSelecionadoUm(jogadores, nomeEscolhido));
    } else if (ContadorZero === 1) {
        console.log(nomeSelecionadoZero(jogadores, nomeEscolhido));
    } else {
        console.log("NINGUEM");
    }



}

function processData(input) {
    solucao(JSON.parse(input));
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
