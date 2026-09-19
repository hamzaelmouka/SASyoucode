const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte : ${i+1}  :`));
    tab.push(valour)
}
let elemont=Number(prompt("entre un entie qui rochirch"))
let cont=0;
for(let i=0;i<tai;i++){
    if(tab[i]===elemont){
        console.log("aloure le nombre qui rocherch il y a dans le tableau a lindice : "+i );
        cont++;
         break;
    }
}
if(cont===0){
    console.log("aloure le nombre qui rocherch il ya pas  dans le tableau  : ");
}