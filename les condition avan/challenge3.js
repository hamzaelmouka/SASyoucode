const prompt = require('prompt-sync')();
let jourAccordi=prompt("entre le nombrede jour de conjes accordi");
let jourUtilises=prompt("entre le nombrede jour de conjes utilises");

console.log(`
    .1 pour temps plain
    .0 pour temps partiel`);
let temp=parseInt(prompt("entre un choix 0 ou 1"));
if(temp===1){
    let jourRest=jourAccordi-jourUtilises;
if(jourRest<0){
    console.log("le jour de utilises plus grade pour le jour de conjee ")
}else{
 console.log(`alour le nombre de jour de conjes reste ${jourRest}`);
}
}else if(temp===0){
    let jourRest=(jourAccordi/2)-jourUtilises
if(jourRest<0){
    console.log("le jour de utilises plus grade pour le jour de conjee ")
}else{
console.log(`alour le nombre de jour de conjes reste ${jourRest}`);
}
if(jourRest<0){
    console.log("le jour de utilises plus grade pour le jour de conjee ")}
}else{
    console.log("le choix par valid");
}
