const prompt = require('prompt-sync')();
function pair(x) {
if(x%2===0){
    return true;
}else{
    return false;
}}
let x=Number(prompt("entre un nembre pour affich que le nombre pair ou non :"));
if(pair(x)){
    console.log("alour le nembre "+x+" pair");
}else{
    console.log("alour le nembre "+x+" impair");
}