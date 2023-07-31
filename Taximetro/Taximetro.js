function solucao(min, km) {
    let valorMin = 0
    let valorMinPromo = 0
    let valorKm = 0;
    let valorKmPromo = 0
    let totalMin = 0;
    let totalKm = 0;

    if ((min - 20) > 0) {
        valorMinPromo = (min - 20) * 30;
        valorMin = (min - (min - 20)) * 50;
        totalMin = valorMin + valorMinPromo;
    } else {
        totalMin = min * 50;
    }

    if ((km - 10) > 0) {
        valorKmPromo = (km - 10) * 50;
        valorKm = (km - (km - 10)) * 70;
        totalKm = valorKm + valorKmPromo
    } else {
        totalKm = km * 70;
    }

    console.log(totalMin + totalKm)


}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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