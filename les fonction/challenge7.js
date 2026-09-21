const prompt = require('prompt-sync')();
function number(x) {
let tab=[];
 for(i=0;i<=x;i++){
    tab[i]=i;
    }
    return tab;
 }

let x=Number(prompt("entre un nembre pour affich tout les nombre jeusca le nombre :"));
console.log("alour le numbre jusca "+x+"et :"+number(x));