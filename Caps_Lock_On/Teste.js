let input = "bAnAnA"


function detectAndCorrectCapsLock(word) {

    if (word === word.toUpperCase()) {
        return word.toLowerCase();
    }
    if (word[0] === word[0].toLowerCase() && word.slice(1) === word.slice(1).toUpperCase()) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase(); // Retorna a primeira letra em maiúsculo e o restante em minúsculo
    }
    return word;
}

console.log(detectAndCorrectCapsLock(input));