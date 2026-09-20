const prompt=require('prompt-sync')();
const text1=prompt("entre 1ere chain ");
const text2=prompt("entre 2eme chain ");
compareChain(text1,text2);
function compareChain(chan1,chan2){
    let i=0;
    while(true){
        if(chan1[i]===undefined && chan2[i]===undefined){
         console.log("le doux chain et edontique");
         return;
        } if(chan1[i]===undefined||chan2[i]===undefined){
          console.log("le doux chain pas edontique")
          return;
        } if(chan1[i]!==chan2[i]){
         console.log("le doux chain pas edontique")
         return ;
        }
        i++;
    }
}
