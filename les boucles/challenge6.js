const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre entie "));
for(let i=2;i<=n*2;i+=2){
  console.log(i);
}