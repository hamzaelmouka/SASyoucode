const prompt = require('prompt-sync')();
let texte = prompt(" entre un chain");
let compteur = 0;
for (let caractere of texte) {
    compteur++;
}
console.log(`le texte qui entre de ${compteur} caracter`);