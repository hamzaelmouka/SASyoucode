const prompt = require('prompt-sync')();
let cel = parseFloat(prompt("Entrez la temperature en celsis :"));
if(cel<0){
    console.log("alour letat de l'eau et solide ");
}else if(cel<100 && cel>=0){
    console.log("alour letat de l'eau et liquide");
}else {
    console.log("alour letat de l'eau et Gaz");}