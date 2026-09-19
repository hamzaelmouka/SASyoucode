const prompt = require('prompt-sync')();
let tai=parseInt(prompt("entre le nomre de element de tabloau"));
const tab=[];
for(let i=0;i<tai;i++){
    let valour=Number(prompt(`entre le elemnte  ${i+1}  :`));
    tab.push(valour)
}console.log(tab);
const tabllou=[];
for(let i=0;i<tai;i++){
    tabllou[i]=tab[i];

}
console.log(tabllou);