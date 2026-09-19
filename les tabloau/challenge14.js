const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
let somme=0;
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1} `));
    tab.push(valour)
    somme+=tab[i]
}
let moyenne=somme/tai;
console.log(moyenne);