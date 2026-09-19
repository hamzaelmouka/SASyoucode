const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  :`));
    tab.push(valour)
}
let n=tai-1;
let x=0;
for(let i=0;i<tai/2;i++){
    x=tab[n];
    tab[n]=tab[i];
    tab[i]=x;
    n--;
}
console.log(tab);