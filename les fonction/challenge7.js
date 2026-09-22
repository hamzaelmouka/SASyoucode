const prompt = require('prompt-sync')();
function number(x){
 for(let i=x;i>=0;i--){
console.log(i)
}
}

let x=Number(prompt("entre un nembre pour affich tout les nombre jeusca le nombre :"));
number(x);