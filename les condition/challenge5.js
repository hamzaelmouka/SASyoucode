const prompt = require('prompt-sync')();
let A=parseInt(prompt("entre le nombre entie de annes "))
console.log(`entre un choix 
    . 1 pour calcule le mois
    . 2  pour calcule le jour 
    . 3  pour calcule le  heures
    . 4  pour calculer le munite
    . 5 pour calcule le socounde `);
let B=parseInt(prompt(""));
switch(B){
    case 1:
        let C=A*12
        console.log(`le nobre de mois : ${C}`)
    break;
    case 2:
        let e=A*365
        console.log(`le nobre de jour : ${e}`)
    break;
    case 3:
        let r=A*365*24
        console.log(`le nobre de heures : ${r}`)
    break;
    case 4:
        let t=A*365*24*60
        console.log(`le nobre de munite : ${t}`)
    break;
    case 5:
        let u=A*365*24*60*60
        console.log(`le nobre de soconde : ${u}`)
    break;
    default:
        console.log("le nombre qui entre ne pas valide pour choix");

}