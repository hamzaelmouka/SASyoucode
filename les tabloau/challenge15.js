const prompt = require('prompt-sync')();
let tai1=parseInt(prompt("entre le nomre de element de 1er tabloau"));
const tab1=[];
for(let i=0;i<tai1;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  de 2eme tabloau:`));
    tab1.push(valour);
}
let tai2=parseInt(prompt("entre le nomre de element de 2eme tabloau"));
const tab2=[];
for(let i=0;i<tai2;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1} de 1er tabloau :`));
    tab2.push(valour);
}
if(tai1>=tai2){
for(let i=0;i<tai2;i++){
    tab1[i]=tab1[i]+tab2[i];
}
    console.log(tab1)
}else{
for(let i=0;i<tai1;i++){
    tab2[i]=tab1[i]+tab2[i];
}
console.log(tab2)
}