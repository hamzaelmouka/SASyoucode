const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre pour affich le multiplication 1 a 10 "));
for(i=0;i<=10;i++){
    let multip=n*i;
    console.log(`${n}*${i}=${multip}`);
}