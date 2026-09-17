const prompt = require('prompt-sync')();
let litre=prompt("entre un la letre ").toLowerCase();
switch(litre){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log("la litre qui entre et voyelle");
        break;
    default:
        console.log("la litr qui entre et consonne ");
}