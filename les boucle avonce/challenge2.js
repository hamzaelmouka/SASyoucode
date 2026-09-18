const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre de lingr de * :"));
let a=n;
for(i=1;i<=n*2;i+=2){
    console.log(" ".repeat(a)+"*".repeat(i));
    a-=1;
}