const prompt = require('prompt-sync')();
let A=parseInt(prompt("entre un nombre entier"));
if(A%2===0){
 console.log("le nombre qui entre et pair ");
}else{
 console.log("le nombre qui entre et impair ");
}