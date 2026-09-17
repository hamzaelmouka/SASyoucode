const prompt = require('prompt-sync')();
let A=parseInt(prompt("entre 1ere nombre entie"));
let B=parseInt(prompt("entre 2eme nombre entie"));
let somme=A+B;
console.log(`la somme de les nombre qui entre : ${somme}`);
if(A===B){
console.log(`le doux nombre qui entre identique
. triple de la somme :${somme*3}`);
}else {
    console.log(".le doux nombre qui entre sans identique");
}
