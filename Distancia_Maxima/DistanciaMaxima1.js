let input = "3 0  0 0  3 4  0"
let formatado = input.trim();
let retirarEspacosDuplicados = formatado;
let indice = 0;
let palavras = formatado.split("");
for (let x = 0; x < palavras.length; x++) {
    if (palavras[x] == " ") {
        palavras.splice(x, 1)
        x--;
    }
}
console.log(palavras)