const prompt=require('prompt-sync')();
let a=parseInt(prompt("entre un nombre  "))
let b=parseInt(prompt("entre un exeposonte "))
let c=1;
for(let i=1;i<=b;i++){
    c=c*a;
}
console.log(`alour si ${a} al pouisence ${b} egale : ${c}`);