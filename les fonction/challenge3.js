const prompt = require('prompt-sync')();
function multiple(x, y) {
    if(x>y){
    console.log("le maximo et : "+x)
    }else if(x<y){
      console.log("le maximo et : "+y)
    }else{
     console.log("le doux nombre et edontique ");
    }
}
let x=Number(prompt("entre 1er nembre"));
let y=Number(prompt("entre 1er nembre"));
multiple(x,y);