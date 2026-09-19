const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  :`));
    tab.push(valour)
}let x=0;
for(let i=0;i<tai;i++){
    for(let j=0;j<tai;j++){
        if(tab[j]>tab[j+1]){
            x=tab[j];
            tab[i]=tab[j];
            tab[j]=x;
        }   
    }
}
console.log(tab)