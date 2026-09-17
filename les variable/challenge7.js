const prompt = require('prompt-sync')();
let A=Number(prompt("entre un 1ere nombre"));
let B=Number(prompt("entre un 2eme  nombre"));
let C=Number(prompt("entre un 3eme  nombre"));
let moy=(A*2+B*3+C*5)/10;
console.log(`alour le moyen ponderee trois nombre :${moy}`);