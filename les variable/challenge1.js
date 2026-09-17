const prompt = require('prompt-sync')();
let nom = prompt("quel est votre nom ");
let prenom = prompt("quel est votre prénom ");
let age = prompt("quel est votre âge ");
let sexe = prompt("quel est votre sexe M/F");
let email = prompt("quelle est votre  email ");
console.log(`alour les informations  est:
.le nom : ${nom}
.le prénom : ${prenom}
.le age : ${age} ans
.le sexe : ${sexe}
.le email : ${email}`);