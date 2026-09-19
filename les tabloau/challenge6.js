const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  :`));
    tab.push(valour)
}
let factour=Number(prompt("entre le factoure de multub "));
for(let i=0;i<tai;i++){
   tab[i]=tab[i]*factour;
}
console.log(tab);