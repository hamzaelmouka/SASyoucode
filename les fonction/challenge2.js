const prompt = require('prompt-sync')();
const multipleModerne = (x, y) => x * y;
let a = 4;
let b = 5;
console.log("Le produit de ${a} par ${b} donne : "+multiple(a, b));
console.log(" Avec la fonction fleche : " +multipleModerne(a, b));