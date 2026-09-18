const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre pour calcule inverse"));
let invers=0;
while(n!==0){
    invers=invers*10+(n%10)
    n=Math.floor(n/10)
}
console.log(invers);