const manilha = ["Q", "J", "K", "A", "2", "3"];
const carta = "Q"
let indice = 0;
for (const x of manilha) {
    if (x === carta && indice < 5) {
        console.log(manilha[indice + 1]);

    } else {
        if (indice >= 5) {
            indice = 0;
            console.log(manilha[indice])
        }
        indice++;
    }
}
