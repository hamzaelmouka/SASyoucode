const prompt=require('prompt-sync')();
const chan1=prompt("entre un chain ");
let chan2="";
for(let i=0;chan1[i]!==undefined;i++){
    if(chan1[i]!==" "){
chan2=chan2+chan1[i]
}}       
console.log(chan2);
