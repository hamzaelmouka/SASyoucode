const prompt=require('prompt-sync')();
const chan1=prompt("entre un chain ");
const chan2=prompt("entre un caractire" );
let j=0;
let a=0;
while(true){
        if(chan1[j]===undefined){
        break ;
        } 
        if(chan1[j]===chan2){
            a++;
        }
        j++;
}

console.log("l cractire et repet "+a+" fois");