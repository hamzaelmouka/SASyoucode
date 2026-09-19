const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
const tablo=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  :`));
    tab.push(valour);
    if(tab[i]%2!==0){
        tablo.push(valour);
    }
}
console.log("aloure le element impair dun tablo :"+tablo);