const prompt = require('prompt-sync')();
let Cel = parseFloat(prompt("Entrez la temperature en celsis :"));
let Kel = tempCel + 273.15;
console.log(`${Cel}°C ETEGALE a${Kel}K`);