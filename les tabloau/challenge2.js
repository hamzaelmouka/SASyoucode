const prompt = require('prompt-sync')();
let taille = parseInt(prompt("entre la taille de tabloau"));
let monTableau=[];
for (let i = 0; i < taille; i++) {
    let valeur = prompt(`entrez element n°${i + 1} :`);
    monTableau.push(valeur);
}
console.log("Voila le tabloau :");
console.log(monTableau);