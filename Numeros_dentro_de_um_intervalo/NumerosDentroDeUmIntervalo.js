function solucao(numero, limiteInferior, limiteSuperior) {

    function limite_Inferior_Superior(numero, Inferior, Superior) {
        if (numero >= Inferior && numero <= Superior) {
            console.log("PERTENCE");
        } else {
            console.log("NAO PERTENCE");
        }
    }
    limite_Inferior_Superior(numero, limiteInferior, limiteSuperior);

}

function processData(input) {
    const lista = input.split(" ");
    solucao(parseInt(lista[0], 10), parseInt(lista[1], 10), parseInt(lista[2], 10));
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