const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  :`));
    tab.push(valour)
}let x;
for(let i=0;i<tai;i++){
    for(let j=0;j<tai;j++){
        if(tab[j]>tab[j+1]){
            x=tab[j+1];
            tab[j+1]=tab[j];
            tab[j]=x;
        }
    }
}
console.log(tab)