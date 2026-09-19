const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un entie positif "));
let documen="";
for(let i=n;i>0;i--){
    let a=n/i
    if(a===Math.floor(a)){
    documen+=a+",";
    }
}
console.log(documen);