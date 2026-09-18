const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre entie"));
let somme=0
for(let i=0;i<=n;i++){
  somme+=i;
}
console.log(`la somme des n premiers nombre naturale: ${somme}`);