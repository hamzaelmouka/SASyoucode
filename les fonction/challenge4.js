const prompt = require('prompt-sync')();
function multiple(x, y) {
    if(x>y){
      return  y;
    }else if(x<y){
      return  x;
    }else{
      return  "edontique";
    }
}
let x=Number(prompt("entre 1er nembre"));
let y=Number(prompt("entre 1er nembre"));
console.log("les minimonte de doux nombre et : "+multiple(x,y));