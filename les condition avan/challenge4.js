const prompt = require('prompt-sync')();
let score=parseInt(prompt("entre le nombre de score de performance"));
let annee=parseInt(prompt("entre le nombrede de annee de travaile"));
let rcompenses=parseInt(prompt("entre le nombrede de recomenses recues"));
if(score>=90 && annee>=5){
console.log("exellente")
}else if(score>=75 && annee>=3){
console.log("bonne")
}else if(score>=50 && annee<3){
console.log("satisfaisante")
}else if(score<50){
console.log("insuffisante")
}else{
    console.log("error")
}
if(rcompenses==1){
console.log(" 10% recompenses");
}else if(rcompenses>=2){
console.log(" 20% recompenses");
}else{
    console.log(" pas de recompenses");
}