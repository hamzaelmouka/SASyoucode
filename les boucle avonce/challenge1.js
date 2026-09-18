const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre pour affich le multiplication 10 a 1 :"));
for(i=10;i>=0;i--){
    let multip=n*i;
    console.log(`${n}*${i}=${multip}`);
}