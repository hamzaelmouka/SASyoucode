const prompt = require('prompt-sync')();
function vactoriale(x) {
    let y=1;
    for(let i=1;i<=x;i++){
        y*=i;
    }
    return y ;
}
let x=Number(prompt("entre UN nembre pour calcule la factourial :"));
console.log("le factouriale de "+x+" et egale  : "+vactoriale(x));