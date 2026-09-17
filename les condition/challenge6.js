const prompt = require('prompt-sync')();
let A=parseInt(prompt("entre un nombre "));
if(A>0){
    console.log("le nombre qui et positif");
}else if (A<0){
    console.log("le nombre qui entre et nigetif");
}else {
    console.log("le nombre qui entre et nule");
}