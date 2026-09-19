const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  :`));
    tab.push(valour)
}
let min=tab[0];
for(let i=0;i<tai;i++){
   if (tab[i]<min){
    min=tab[i]
   }
}
console.log("aloure l'elemente et plus petit et :"+min);