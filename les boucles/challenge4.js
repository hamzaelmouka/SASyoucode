const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre entie"));
let i=1;
while(i<=n*2){
 console.log(i)
 i+=2;
}